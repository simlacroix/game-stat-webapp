import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
    LolDataDragonChampionListResponse,
    LolDataDragonChampionResponse,
    LolDataDragonPerkResponse,
    LolDataDragonSummonerResponse,
    LolDataDragonSummonerSpellListResponse,
    LolQueue,
} from '../../types/LeagueOfLegendsTypes';
import {
    TftDataDragonAugmentResponse,
    TftDataDragonAugmentsResponse,
    TftDataDragonChampionResponse,
    TftDataDragonChampionsResponse,
    TftDataDragonHeroAugmentResponse,
    TftDataDragonHeroAugmentsResponse,
    TftDataDragonItemResponse,
    TftDataDragonItemsResponse,
    TftDataDragonTraitResponse,
    TftDataDragonTraitsResponse,
} from '../../types/TeamfightTacticsTypes';

export const dataDragonApiSlice = createApi({
    reducerPath: 'dataDragonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://ddragon.leagueoflegends.com/',
    }),
    endpoints(builder) {
        return {
            getLatestVersion: builder.query<string, void>({
                query() {
                    return 'api/versions.json';
                },
                transformResponse: (response: string[], meta, arg) => {
                    return response[0];
                },
            }),
            getChampionJson: builder.query<LolDataDragonChampionListResponse, string>({
                query(version) {
                    return `cdn/${version}/data/en_US/champion.json`;
                },
                transformResponse: (response: any, meta, arg) => {
                    const result: LolDataDragonChampionListResponse = {
                        type: response.type,
                        format: response.format,
                        version: response.version,
                        data: Object.keys(response.data).map(function (championNamedIndex) {
                            const dataDragonChampion: LolDataDragonChampionResponse = response.data[championNamedIndex];
                            dataDragonChampion.key = Number(response.data[championNamedIndex].key);
                            return dataDragonChampion;
                        }),
                    };
                    return result;
                },
            }),
            getSummonerSpells: builder.query<LolDataDragonSummonerSpellListResponse, string>({
                query(version) {
                    return `cdn/${version}/data/en_US/summoner.json`;
                },
                transformResponse: (response: any, meta, arg) => {
                    const result: LolDataDragonSummonerSpellListResponse = {
                        type: response.type,
                        version: response.version,
                        data: Object.keys(response.data).map(function (championNamedIndex) {
                            const dataDragonChampion: LolDataDragonSummonerResponse = response.data[championNamedIndex];
                            dataDragonChampion.key = Number(response.data[championNamedIndex].key);
                            return dataDragonChampion;
                        }),
                    };
                    return result;
                },
            }),
            getRunes: builder.query<LolDataDragonPerkResponse[], string>({
                query(version) {
                    return `cdn/${version}/data/en_US/runesReforged.json`;
                },
            }),
            getQueueTypes: builder.query<LolQueue, void>({
                query() {
                    return 'https://static.developer.riotgames.com/docs/lol/queues.json';
                },
            }),
            getTftTraits: builder.query<TftDataDragonTraitsResponse, string>({
                query(version) {
                    return `cdn/${version}/data/en_US/tft-trait.json`;
                },
                transformResponse: (response: any, meta, arg) => {
                    const result: TftDataDragonTraitsResponse = {
                        type: response.type,
                        version: response.version,
                        data: Object.keys(response.data).map(function (traitIdIndex, index) {
                            const dataDragonTrait: TftDataDragonTraitResponse = response.data[traitIdIndex];
                            return dataDragonTrait;
                        }),
                    };
                    return result;
                },
            }),
            getTftChampions: builder.query<TftDataDragonChampionsResponse, string>({
                query(version) {
                    return `cdn/${version}/data/en_US/tft-champion.json`;
                },
                transformResponse: (response: any, meta, arg) => {
                    const result: TftDataDragonChampionsResponse = {
                        type: response.type,
                        version: response.version,
                        data: Object.keys(response.data).map(function (championIdIndex, index) {
                            const dataDragonChampion: TftDataDragonChampionResponse = response.data[championIdIndex];
                            return dataDragonChampion;
                        }),
                    };
                    return result;
                },
            }),
            getTftItems: builder.query<TftDataDragonItemsResponse, string>({
                query(version) {
                    return `cdn/${version}/data/en_US/tft-item.json`;
                },

                transformResponse: (response: any, meta, arg) => {
                    const result: TftDataDragonItemsResponse = {
                        type: response.type,
                        version: response.version,
                        data: Object.keys(response.data).map(function (itemIdIndex, index) {
                            const dataDragonItem: TftDataDragonItemResponse = response.data[itemIdIndex];
                            return dataDragonItem;
                        }),
                    };
                    return result;
                },
            }),
            getTftAugments: builder.query<TftDataDragonAugmentsResponse, string>({
                query(version) {
                    return `cdn/${version}/data/en_US/tft-augments.json`;
                },

                transformResponse: (response: any, meta, arg) => {
                    const result: TftDataDragonAugmentsResponse = {
                        type: response.type,
                        version: response.version,
                        data: Object.keys(response.data).map(function (augmentIdIndex, index) {
                            const dataDragonAugment: TftDataDragonAugmentResponse = response.data[augmentIdIndex];
                            return dataDragonAugment;
                        }),
                    };
                    return result;
                },
            }),
            getTftHeroAugments: builder.query<TftDataDragonHeroAugmentsResponse, string>({
                query(version) {
                    return `cdn/${version}/data/en_US/tft-hero-augments.json`;
                },

                transformResponse: (response: any, meta, arg) => {
                    const result: TftDataDragonHeroAugmentsResponse = {
                        type: response.type,
                        version: response.version,
                        data: Object.keys(response.data).map(function (heroAugmentIdIndex, index) {
                            const dataDragonHeroAugment: TftDataDragonHeroAugmentResponse = response.data[heroAugmentIdIndex];
                            return dataDragonHeroAugment;
                        }),
                    };
                    return result;
                },
            }),
        };
    },
});

export const {
    useGetLatestVersionQuery,
    useGetChampionJsonQuery,
    useGetSummonerSpellsQuery,
    useGetRunesQuery,
    useGetTftTraitsQuery,
    useGetTftChampionsQuery,
    useGetTftItemsQuery,
    useGetTftAugmentsQuery,
    useGetTftHeroAugmentsQuery,
} = dataDragonApiSlice;