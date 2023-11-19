import {Game} from './gameTypes';

export interface ChangePasswordFormValues {
    currentPassword: string;
    newPassword: string;
    newPasswordConfirm: string;
}

export interface UpdatePasswordRequest {
    OldPassword: string;
    NewPassword: string;
}

export interface Gamertag {
    gamertagId: number;
    tag: string;
    game: Game;
    gameName: string;
}

export interface ChangeGamertagsFormValues {
    gamertagRequests: Gamertag[];
}