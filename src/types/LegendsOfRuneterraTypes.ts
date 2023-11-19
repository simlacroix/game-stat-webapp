import {RiotSummoner} from './RiotTypes';

export interface LoRPlayerStatResponse {
    summoner: RiotSummoner;
    playerName: string;
    totalMatches: number;
    wins: number;
    losses: number;
    rank: number;
    points: number;
    winRatio: number;
    matchHistory: LoRMatchResponse[];

}

export interface LoRMatchResponse {
    metadata: LoRMetadata;
    info: LoRMatchInfo;
    opponent_name: string;
    focus_player_win: boolean;
    focus_player_deck_code: string;
    Id: string;
}

export interface LoRMetadata {
    data_version: string;
    match_id: string;
    participants: string[];
}

export interface LoRMatchInfo {
    game_mode: string;
    game_type: string;
    game_start_time_utc: Date;
    game_version: string;
    players: LorPlayer[];
    total_turn_count: number;
}

export interface LorPlayer {
    puuid: string;
    deck_id: string;
    deck_code: string;
    factions: string[];
    game_outcome: string;
    order_of_play: number;
}