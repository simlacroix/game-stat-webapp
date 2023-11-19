import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {LolCommunityDragonPerkResponse} from '../../types/LeagueOfLegendsTypes';

export const communityDragonApiSlice = createApi({
    reducerPath: 'communityDragonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://raw.communitydragon.org/latest',
    }),
    endpoints(builder) {
        return {
            getCommunityRunes: builder.query<LolCommunityDragonPerkResponse[], void>({
                query() {
                    return `/plugins/rcp-be-lol-game-data/global/default/v1/perks.json`;
                },
            }),
        };
    },
});

export const {
    useGetCommunityRunesQuery,
} = communityDragonApiSlice;