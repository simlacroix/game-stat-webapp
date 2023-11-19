import {RiotSummoner} from './RiotTypes';
import {LolDataDragonImageResponse, LoLRanks, LoLTiers} from './LeagueOfLegendsTypes';

export interface TFTSummonerResponse extends RiotSummoner {
    puuid: string;
    leagueEntry: TfTLeagueEntry[];
}

export interface TfTLeagueEntry {
    leagueId: string;
    summonerId: string;
    summonerName: string;
    queueType: TftQueueTypes;
    ratedTier: string;
    ratedRating: number;
    tier: LoLTiers;
    rank: LoLRanks;
    leaguePoints: number;
    wins: number;
    losses: number;
    hotStreak: boolean;
    veteran: boolean;
    freshBlood: boolean;
    inactive: boolean;
    miniSeries: TfTMiniSeries;
}

export interface TfTMiniSeries {
    losses: number;
    progress: string;
    target: number;
    wins: number;
}

export interface TftMatchesFromQueueAndTagResponse {
    matches: TftMatch[];
    averagePlacement: number;
    averageDamageToPlayers: number;
}

export interface TftMatch {
    Info: TftInfo;
    Metadata: TftMetadata;
    focusedPlayer: TftParticipant;
    id: number;
    summonersParticipants: TFTSummonerResponse[];
}

interface TftMetadata {
    Data_Version: string;
    Match_Id: string;
    Participants: string[];
}

interface TftInfo {
    Game_Datetime: number;
    Game_Length: number;
    Game_Variation: string;
    Game_Version: string;
    Participants: TftParticipant[];
    Queue_Id: number;
    Tft_Set_Number: number;
}

export interface TftParticipant {
    Companion: TftCompanion;
    Gold_Left: number;
    Last_Round: number;
    Level: number;
    Placement: number;
    Players_Eliminated: number;
    Puuid: string;
    Time_Eliminated: number;
    Total_Damage_To_Players: number;
    Traits: TftTrait[];
    Units: TftUnit[];
    Augments: string[];
}

interface TftCompanion {
    ContentId: string;
    ItemId: number;
    SkinId: number;
    Species: string;
}

export interface TftTrait {
    Name: string;
    Num_Units: number;
    Style: number;
    Tier_Current: number;
    Tier_Total: number;
}

export interface TftUnit {
    Character_Id: string;
    Chosen: string;
    ItemNames: string[];
    Items: number[];
    Name: string;
    Rarity: number;
    Tier: number;
}

export interface TeamfightTacticsState {
    currentMatchId: number | null;
    traits: TftDataDragonTraitsResponse;
    champions: TftDataDragonChampionsResponse;
    items: TftDataDragonItemsResponse;
    augments: TftDataDragonAugmentsResponse;
    heroAugments: TftDataDragonHeroAugmentsResponse;
}

export interface TftDataDragonTraitsResponse {
    type: string;
    version: string;
    data: TftDataDragonTraitResponse[];
}

export interface TftDataDragonTraitResponse {
    id: string;
    name: string;
    image: LolDataDragonImageResponse;
}

export interface TftDataDragonChampionsResponse {
    type: string;
    version: string;
    data: TftDataDragonChampionResponse[];
}

export interface TftDataDragonChampionResponse {
    id: string;
    name: string;
    tier: number;
    image: LolDataDragonImageResponse;
}

export interface TftDataDragonItemsResponse {
    type: string;
    version: string;
    data: TftDataDragonItemResponse[];
}

export interface TftDataDragonItemResponse {
    id: string;
    name: string;
    image: LolDataDragonImageResponse;
}

export interface TftDataDragonAugmentsResponse {
    type: string;
    version: string;
    data: TftDataDragonAugmentResponse[];
}

export interface TftDataDragonAugmentResponse {
    id: string;
    name: string;
    image: LolDataDragonImageResponse;
}

export interface TftDataDragonHeroAugmentsResponse {
    type: string;
    version: string;
    data: TftDataDragonHeroAugmentResponse[];
}

export interface TftDataDragonHeroAugmentResponse {
    id: string;
    name: string;
    image: LolDataDragonImageResponse;
}

export enum TftQueueTypes {
    Solo = 'RANKED_TFT'
}

export const TFTQueueTypeDescription = (TFTQueueType: TftQueueTypes) => {
    switch (TFTQueueType) {
        case TftQueueTypes.Solo:
            return 'Solo';
        default:
            return 'Duo';
    }
};

export function getPlacementAbbreviation(placement: number): string {
    if (placement < 1) {
        throw new Error('Placement must be a positive integer greater than or equal to 1.');
    }

    const lastDigit = placement % 10;
    const secondToLastDigit = Math.floor(placement / 10) % 10;

    if (lastDigit === 1 && secondToLastDigit !== 1) {
        return placement + 'st';
    } else if (lastDigit === 2 && secondToLastDigit !== 1) {
        return placement + 'nd';
    } else if (lastDigit === 3 && secondToLastDigit !== 1) {
        return placement + 'rd';
    } else {
        return placement + 'th';
    }
}

export function getTftTierColor(tier: number): string {
    switch (tier) {
        case 1:
            return '#5e7a95';
        case 2:
            return '#2d7e3c';
        case 3:
            return '#599cbc';
        case 4:
            return '#b52fb7';
        case 5:
            return '#e89f3f';
        default:
            return '';
    }
}

export function getTftPlacementColor(placement: number): string {
    switch (placement) {
        case 1:
            return '#d4af37';
        case 2:
            return '#C0C0C0';
        case 3:
            return '#CD7F32';
        case 4:
            return '#a19d94';
        case 5:
        case 6:
        case 7:
        case 8:
            return '#5A5A5A';
        default:
            return '#5A5A5A';
    }
}

export function getTftQueueTypeName(queueId: number): string {
    switch (queueId) {
        case 1100:
            return 'Ranked';
        default:
            return 'Normal';
    }
}

export function getTftStageAndRound(roundNumber: number): string {
    let stage = 1;
    let roundWithinStage = 1;

    if (roundNumber > 3) {
        roundNumber -= 3;
        stage = Math.floor((roundNumber - 1) / 7) + 2;
        roundWithinStage = (roundNumber - 1) % 7;
    } else {
        roundWithinStage = roundNumber;
    }

    return `${stage}-${roundWithinStage}`;
}

export function getTftTraitStyleColor(style: number): string {
    switch (style) {
        case 0:
            return 'white';
        case 1:
            return '#CD7F32';
        case 2:
            return '#C0C0C0';
        case 3:
            return '#FFD700';
        case 4:
            return '#A072FF';
        default:
            return '';
    }
}