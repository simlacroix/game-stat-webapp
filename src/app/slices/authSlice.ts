import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthenticateResponse, AuthState} from '../../types/authTypes';
import {Gamertag} from '../../types/accountManagementTypes';
import axios from 'axios';

const getInitialState = (): AuthState => {
    const persistedData = localStorage.getItem('authPersistedData');

    if (persistedData) {
        return JSON.parse(persistedData);
    }

    return {
        isAuthenticated: false,
        email: '',
        username: '',
        refreshTokenExchange: {
            jwtToken: null,
            refreshTokenKey: null,
        },
        gamertags: [],
    };
};

const initialState: AuthState = getInitialState();

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser(state, action: PayloadAction<AuthenticateResponse>) {
            state.isAuthenticated = true;
            state.refreshTokenExchange = action.payload.refreshTokenExchange;
            state.email = action.payload.email;
            state.username = action.payload.username;
            state.gamertags = action.payload.gamertags;
            persistData(state);
        },
        logoutUser(state) {
            axios.post(process.env.REACT_APP_BASE_URL + 'Auth/logout', JSON.stringify(state.refreshTokenExchange), {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${state.refreshTokenExchange.jwtToken}`,
                },
            });
            eraseData();
            state.isAuthenticated = false;
            state.refreshTokenExchange = {
                jwtToken: null,
                refreshTokenKey: null,
            };
            state.email = '';
            state.username = '';
            state.gamertags = [];
        },
        setUserGamertags(state, action: PayloadAction<Gamertag[]>) {
            state.gamertags = action.payload;
            persistData(state);
        },
        tokenReceived(state, action: PayloadAction<any>) {
            state.refreshTokenExchange = action.payload;
            persistData(state);
        },
    },
});

const persistData = (state: AuthState) => {
    localStorage.setItem('authPersistedData', JSON.stringify(state));
};

const eraseData = () => {
    localStorage.removeItem('authPersistedData');
};

export const {loginUser, logoutUser, setUserGamertags, tokenReceived} = authSlice.actions;
export default authSlice.reducer;