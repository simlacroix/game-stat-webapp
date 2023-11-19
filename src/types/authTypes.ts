import {Gamertag} from './accountManagementTypes';

export interface LoginFormValues {
    username: string;
    password: string;
}

export interface RegisterFormValues {
    username: string;
    email: string;
    emailConfirm: string;
    password: string;
    passwordConfirm: string;
}

export interface AuthenticateResponse {
    username: string;
    email: string;
    refreshTokenExchange: RefreshTokenExchange;
    gamertags: Gamertag[];
}

export interface RefreshTokenExchange {
    jwtToken: string | null | undefined;
    refreshTokenKey: string | null | undefined;
}

export interface AuthState {
    isAuthenticated: boolean;
    username: string;
    email: string;
    refreshTokenExchange: RefreshTokenExchange;
    gamertags: Gamertag[];
}