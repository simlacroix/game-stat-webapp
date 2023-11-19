import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
    TagDescription,
} from '@reduxjs/toolkit/query/react';
import {AuthenticateResponse, LoginFormValues, RegisterFormValues} from '../../types/authTypes';
import errorResolver from '../../Errors/ErrorResolver';
import {RootState} from '../store';
import {ChangeGamertagsFormValues, Gamertag, UpdatePasswordRequest} from '../../types/accountManagementTypes';
import {Mutex} from 'async-mutex';
import {logoutUser, setUserGamertags, tokenReceived} from './authSlice';
import axios from 'axios';
import {LoLPlayerStatResponse} from '../../types/LeagueOfLegendsTypes';
import {Game} from '../../types/gameTypes';
import {TftMatchesFromQueueAndTagResponse, TFTSummonerResponse} from '../../types/TeamfightTacticsTypes';
import {LoRPlayerStatResponse} from '../../types/LegendsOfRuneterraTypes';

const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers, {getState}) => {
        const token = (getState() as RootState).auth.refreshTokenExchange.jwtToken;

        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }

        return headers;
    },
});
const baseQueryWithReauth: BaseQueryFn<string | FetchArgs,
    unknown,
    FetchBaseQueryError> = async (args, api, extraOptions) => {
    // wait until the mutex is available without locking it
    await mutex.waitForUnlock();
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.data && result.error.status === 401 && result.error.data === 'Token invalid') {
        // checking whether the mutex is locked
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();
            try {
                const refreshResult = await axios.patch(process.env.REACT_APP_BASE_URL + 'Auth/refresh-token', JSON.stringify((api.getState() as RootState).auth.refreshTokenExchange), {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (refreshResult.data) {
                    api.dispatch(tokenReceived(refreshResult.data));
                    // retry the initial query
                    result = await baseQuery(args, api, extraOptions);
                } else {
                    api.dispatch(logoutUser());
                }
            } catch (e) {
                api.dispatch(logoutUser());
            } finally {
                // release must be called once the mutex should be released again.
                release();
            }
        } else {
            // wait until the mutex is available without locking it
            await mutex.waitForUnlock();
            result = await baseQuery(args, api, extraOptions);
        }
    }
    return result;
};

export const trackingFellowshipApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['LoLStats', 'TFTStats', 'LoRStats'],
    endpoints(builder) {
        return {
            authenticate: builder.mutation<AuthenticateResponse, LoginFormValues>({
                query: (loginFormValues) => ({
                    url: 'Auth/authenticate',
                    method: 'POST',
                    body: loginFormValues,
                }),
                transformErrorResponse: errorResolver,
            }),
            register: builder.mutation<AuthenticateResponse, RegisterFormValues>({
                query: (registerFormValues) => ({
                    url: 'Auth/register',
                    method: 'POST',
                    body: registerFormValues,
                }),
                transformErrorResponse: errorResolver,
            }),
            updatePassword: builder.mutation<any, UpdatePasswordRequest>({
                query: (updatePasswordRequest) => ({
                    url: 'User/update-password',
                    method: 'POST',
                    body: updatePasswordRequest,
                }),
                transformErrorResponse: errorResolver,
            }),
            fetchGamerTags: builder.query<Gamertag[], void | null>({
                query() {
                    return `/User/get-gamertags`;
                },
                transformErrorResponse: errorResolver,
                async onQueryStarted(args, {dispatch, queryFulfilled}) {
                    const {data: gamertags} = await queryFulfilled;
                    dispatch(setUserGamertags(gamertags));
                },
            }),
            updateGamerTags: builder.mutation<Gamertag[], ChangeGamertagsFormValues>({
                query: (gamertags) => ({
                    url: 'User/update-gamertags',
                    method: 'POST',
                    body: gamertags,
                }),
                transformErrorResponse: errorResolver,
                async onQueryStarted({gamertagRequests}, {dispatch, queryFulfilled}) {
                    try {
                        const {data: gamertags} = await queryFulfilled;
                        dispatch(setUserGamertags(gamertags));
                        const patchResult = dispatch(
                            trackingFellowshipApiSlice.util.updateQueryData('fetchGamerTags', undefined, (draft) => {
                                Object.assign(draft, gamertags);
                            }),
                        );
                    } catch {
                    }
                },
                invalidatesTags: (result, error, arg) => {
                    let invalidatedTags: TagDescription<'LoLStats' | 'TFTStats' | 'LoRStats'>[] = [];

                    for (const gamertagRequest of arg.gamertagRequests) {
                        switch (gamertagRequest.game) {
                            case Game.LeagueOfLegends:
                                invalidatedTags.push({type: 'LoLStats'});
                                break;
                            case Game.TeamfightTactics:
                                invalidatedTags.push({type: 'TFTStats'});
                                break;
                            case Game.LegendsOfRuneterra:
                                invalidatedTags.push({type: 'LoRStats'});
                                break;

                        }
                    }

                    return invalidatedTags;
                },
            }),
            getLeagueOfLegendsPlayerStats: builder.query<LoLPlayerStatResponse, void>({
                query() {
                    return 'LoL/get-stats-for-player';
                },
                transformErrorResponse: errorResolver,
                providesTags: ['LoLStats'],
            }),
            getTftSummonerInfo: builder.query<TFTSummonerResponse, void>({
                query() {
                    return 'Tft/get-summoner';
                },
                transformErrorResponse: errorResolver,
                providesTags: ['TFTStats'],
            }),
            getTftMatchHistory: builder.query<TftMatchesFromQueueAndTagResponse, void>({
                query() {
                    return 'Tft/get-matches';
                },
                transformErrorResponse: errorResolver,
                providesTags: ['TFTStats'],
            }),
            getLegendsOfRuneterraPlayerStats: builder.query<LoRPlayerStatResponse, void>({
                query() {
                    return 'LoR/get-stats-for-player';
                },
                transformErrorResponse: errorResolver,
                providesTags: ['LoRStats'],
            }),
        };
    },
});

export const {
    useAuthenticateMutation,
    useRegisterMutation,
    useUpdatePasswordMutation,
    useFetchGamerTagsQuery,
    useUpdateGamerTagsMutation,
    useGetLeagueOfLegendsPlayerStatsQuery,
    useGetTftSummonerInfoQuery,
    useGetTftMatchHistoryQuery,
    useGetLegendsOfRuneterraPlayerStatsQuery,
} = trackingFellowshipApiSlice;