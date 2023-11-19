import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LeagueOfLegendsState} from '../../types/LeagueOfLegendsTypes';
import {dataDragonApiSlice} from './dataDragonApiSlice';
import {communityDragonApiSlice} from './communityDragonApiSlice';

const initialState: LeagueOfLegendsState = {
    latestVersion: '',
    currentMatchId: null,
    dataDragonChampionList: null,
    dataDragonSummonerSpellList: null,
    dataDragonPerks: [],
    communityDragonPerks: [],
};

const LeagueOfLegendSlice = createSlice({
    name: 'leagueOfLegends',
    initialState,
    reducers: {
        setCurrentLoLMatchId(state, action: PayloadAction<number>) {
            if (state.currentMatchId && state.currentMatchId === action.payload) {
                state.currentMatchId = null;

            } else {
                state.currentMatchId = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            dataDragonApiSlice.endpoints.getLatestVersion.matchFulfilled,
            (state, {payload}) => {
                state.latestVersion = payload;
            },
        );
        builder.addMatcher(
            dataDragonApiSlice.endpoints.getChampionJson.matchFulfilled,
            (state, {payload}) => {
                state.dataDragonChampionList = payload;
            },
        );
        builder.addMatcher(
            dataDragonApiSlice.endpoints.getSummonerSpells.matchFulfilled,
            (state, {payload}) => {
                state.dataDragonSummonerSpellList = payload;
            },
        );
        builder.addMatcher(
            dataDragonApiSlice.endpoints.getRunes.matchFulfilled,
            (state, {payload}) => {
                state.dataDragonPerks = payload;
            },
        );
        builder.addMatcher(
            communityDragonApiSlice.endpoints.getCommunityRunes.matchFulfilled,
            (state, {payload}) => {
                state.communityDragonPerks = payload;
            },
        );
    },
});

export const {setCurrentLoLMatchId} = LeagueOfLegendSlice.actions;
export default LeagueOfLegendSlice.reducer;

