import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../app/slices/authSlice';
import leagueOfLegendsReducer from '../app/slices/leagueOfLegendSlice';
import teamfightTacticsReducer from '../app/slices/teamfightTacticsSlice';
import {trackingFellowshipApiSlice} from './slices/trackingFellowshipApiSlice';
import {dataDragonApiSlice} from './slices/dataDragonApiSlice';
import {communityDragonApiSlice} from './slices/communityDragonApiSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        leagueOfLegends: leagueOfLegendsReducer,
        teamfightTactics: teamfightTacticsReducer,
        [trackingFellowshipApiSlice.reducerPath]: trackingFellowshipApiSlice.reducer,
        [dataDragonApiSlice.reducerPath]: dataDragonApiSlice.reducer,
        [communityDragonApiSlice.reducerPath]: communityDragonApiSlice.reducer,

    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(trackingFellowshipApiSlice.middleware).concat(dataDragonApiSlice.middleware).concat(communityDragonApiSlice.middleware);
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

