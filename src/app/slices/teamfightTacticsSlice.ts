import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TeamfightTacticsState} from '../../types/TeamfightTacticsTypes';
import {dataDragonApiSlice} from './dataDragonApiSlice';

const initialState: TeamfightTacticsState = {
    currentMatchId: null,
    traits: {
        type: '',
        data: [],
        version: '',
    },
    champions: {
        type: '',
        data: [],
        version: '',
    },
    items: {
        type: '',
        data: [],
        version: '',
    },
    augments: {
        type: '',
        data: [],
        version: '',
    },
    heroAugments: {
        type: '',
        data: [],
        version: '',
    },
};

const TeamfightTacticsSlice = createSlice({
    name: 'teamfightTactics',
    initialState,
    reducers: {
        setCurrentTFTMatchId(state, action: PayloadAction<number>) {
            if (state.currentMatchId && state.currentMatchId === action.payload) {
                state.currentMatchId = null;

            } else {
                state.currentMatchId = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            dataDragonApiSlice.endpoints.getTftTraits.matchFulfilled,
            (state, {payload}) => {
                state.traits = payload;
            },
        );
        builder.addMatcher(
            dataDragonApiSlice.endpoints.getTftChampions.matchFulfilled,
            (state, {payload}) => {
                state.champions = payload;
            },
        );
        builder.addMatcher(
            dataDragonApiSlice.endpoints.getTftItems.matchFulfilled,
            (state, {payload}) => {
                state.items = payload;
            },
        );
        builder.addMatcher(
            dataDragonApiSlice.endpoints.getTftAugments.matchFulfilled,
            (state, {payload}) => {
                state.augments = payload;
            },
        );
        builder.addMatcher(
            dataDragonApiSlice.endpoints.getTftHeroAugments.matchFulfilled,
            (state, {payload}) => {
                state.heroAugments = payload;
            },
        );
    },
});

export const {setCurrentTFTMatchId} = TeamfightTacticsSlice.actions;
export default TeamfightTacticsSlice.reducer;

