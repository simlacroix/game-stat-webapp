import EmblemIronPng from '../assets/leagueOfLegendsAssets/rankedEmblemsIcons/emblem-iron.png';
import EmblemBronzePng from '../assets/leagueOfLegendsAssets/rankedEmblemsIcons/emblem-bronze.png';
import EmblemSilverPng from '../assets/leagueOfLegendsAssets/rankedEmblemsIcons/emblem-silver.png';
import EmblemGoldPng from '../assets/leagueOfLegendsAssets/rankedEmblemsIcons/emblem-gold.png';
import EmblemPlatinumPng from '../assets/leagueOfLegendsAssets/rankedEmblemsIcons/emblem-platinum.png';
import EmblemDiamondPng from '../assets/leagueOfLegendsAssets/rankedEmblemsIcons/emblem-diamond.png';
import EmblemMasterPng from '../assets/leagueOfLegendsAssets/rankedEmblemsIcons/emblem-master.png';
import EmblemGrandMasterPng from '../assets/leagueOfLegendsAssets/rankedEmblemsIcons/emblem-grandmaster.png';
import EmblemChallengerPng from '../assets/leagueOfLegendsAssets/rankedEmblemsIcons/emblem-challenger.png';
import {RiotSummoner} from './RiotTypes';

export interface LoLPlayerStatResponse {
    summoner: RiotSummoner;
    leagueEntry: LoLLeagueEntry[];
    mostPlayedPosition: string;
    matchHistory: LoLMatch[];
    championStats: LoLChampionStats[];
}

interface LoLChampionStats {
    championId: number;
    championName: string;
    winRatio: number;
    CS: number;
    CSPerMinute: number;
    KDA: number;
    averageKill: number;
    averageDeath: number;
    averageAssist: number;
    gamesPlayed: number;
}

export interface LoLLeagueEntry {
    leagueId: string;
    summonerName: string;
    queueType: LoLQueueTypes;
    tier: LoLTiers;
    rank: LoLRanks;
    leaguePoints: number;
    wins: number;
    losses: number;
    hotStreak: boolean;
    veteran: boolean;
    freshBlood: boolean;
    inactive: boolean;
    winRatio: number;
}

export interface LoLMatch {
    focusedPlayer: LoLParticipant;
    averageRank: AverageRanks;
    info: LolInfo;
    teammates: LoLTeamResponse;
    opponents: LoLTeamResponse;
    isSelected: boolean;
}

interface LoLTeamResponse {
    teammates: LoLParticipant[];
    totalDragonKills: number;
    totalTurretKills: number;
    totalBaronKills: number;
    totalKills: number;
    totalGoldEarned: number;
}

interface LolInfo {
    gameCreation: number;
    gameDuration: number;
    gameEndTimestamp: number;
    gameId: number;
    gameMode: string;
    gameName: string;
    gameStartTimestamp: number;
    gameType: string;
    gameVersion: string;
    mapId: number;
    participants: LoLParticipant[];
    platformId: string;
    queueId: number;
    teams: LoLTeam[];
    tournamentCode: string;
}

interface LoLTeam {
    bans: LoLBan[];
    objectives: LoLObjectives;
    teamId: number;
    win: boolean;
}

interface LoLBan {
    championId: number;
    pickTurn: number;
}

interface LoLObjectives {
    baron: LoLObjective;
    champion: LoLObjective;
    dragon: LoLObjective;
    inhibitor: LoLObjective;
    riftHerald: LoLObjective;
    tower: LoLObjective;
}

interface LoLObjective {
    first: boolean;
    kills: number;
}

export interface LoLItem {
    id: number;
    name: string;
    description: string;
    baseCost: string;
    totalCost: string;
}

export interface LoLParticipant {
    assists: number;
    baronKills: number;
    bountyLevel: number;
    champExperience: number;
    champLevel: number;
    championId: number;
    championName: string;
    championTransform: number;
    consumablesPurchased: number;
    damageDealtToBuildings: number;
    damageDealtToObjectives: number;
    damageDealtToTurrets: number;
    damageSelfMitigated: number;
    deaths: number;
    detectorWardsPlaced: number;
    doubleKills: number;
    dragonKills: number;
    firstBloodAssist: boolean;
    firstBloodKill: boolean;
    firstTowerAssist: boolean;
    firstTowerKill: boolean;
    gameEndedInEarlySurrender: boolean;
    gameEndedInSurrender: boolean;
    goldEarned: number;
    goldSpent: number;
    individualPosition: string;
    inhibitorKills: number;
    inhibitorTakedowns: number;
    inhibitorsLost: number;
    item0: number;
    item1: number;
    item2: number;
    item3: number;
    item4: number;
    item5: number;
    item6: number;
    itemsPurchased: number;
    killingSprees: number;
    kills: number;
    lane: string;
    largestCriticalStrike: number;
    largestKillingSpree: number;
    largestMultiKill: number;
    longestTimeSpentLiving: number;
    magicDamageDealt: number;
    magicDamageDealtToChampions: number;
    magicDamageTaken: number;
    neutralMinionsKilled: number;
    nexusKills: number;
    nexusTakedowns: number;
    nexusLost: number;
    objectivesStolen: number;
    objectivesStolenAssists: number;
    participantId: number;
    pentaKills: number;
    perks: LoLPerks;
    physicalDamageDealt: number;
    physicalDamageDealtToChampions: number;
    physicalDamageTaken: number;
    profileIcon: number;
    puuid: string;
    quadraKills: number;
    riotIdName: string;
    riotIdTagline: string;
    role: string;
    sightWardsBoughtInGame: number;
    spell1Casts: number;
    spell2Casts: number;
    spell3Casts: number;
    spell4Casts: number;
    summoner1Casts: number;
    summoner1Id: number;
    summoner2Casts: number;
    summoner2Id: number;
    summonerId: string;
    summonerLevel: number;
    summonerName: string;
    teamEarlySurrendered: boolean;
    teamId: number;
    teamPosition: string;
    timeCCingOthers: number;
    timePlayed: number;
    totalDamageDealt: number;
    totalDamageDealtToChampions: number;
    totalDamageShieldedOnTeammates: number;
    totalDamageTaken: number;
    totalHeal: number;
    totalHealsOnTeammates: number;
    totalMinionsKilled: number;
    totalTimeCCDealt: number;
    totalTimeSpentDead: number;
    totalUnitsHealed: number;
    tripleKills: number;
    trueDamageDealt: number;
    trueDamageDealtToChampions: number;
    trueDamageTaken: number;
    turretKills: number;
    turretTakedowns: number;
    turretsLost: number;
    unrealKills: number;
    visionScore: number;
    visionWardsBoughtInGame: number;
    wardsKilled: number;
    wardsPlaced: number;
    win: boolean;
    items: LoLItem[];
    cs: number;
    cSperMinute: number;
    killParticipation: number;
    kda: number;
}

interface LoLPerks {
    statPerks: LoLPerkStats;
    styles: LoLPerkStyle[];
}

interface LoLPerkStats {
    defense: number;
    flex: number;
    offense: number;
}

interface LoLPerkStyle {
    description: string;
    selections: LolPerkStyleSelection[];
    style: number;
}

interface LolPerkStyleSelection {
    perk: number;
    var1: number;
    var2: number;
    var3: number;
}

export interface LolDataDragonChampionListResponse {
    type: string;
    format: string;
    version: string;
    data: LolDataDragonChampionResponse[];
}

export interface LolDataDragonChampionResponse {
    version: string;
    id: string;
    key: number;
    name: string;
    title: string;
    blurb: string;
    info: {
        attack: number;
        defense: number;
        magic: number;
        difficulty: number;
    };
    image: LolDataDragonImageResponse;
    tags: {
        tag: string;
    }[];
    stats: {
        hp: number
        hpperlevel: number
        mp: number
        mpperlevel: number
        movespeed: number
        armor: number
        armorperlevel: number
        spellblock: number
        spellblockperlevel: number
        attackrange: number
        hpregen: number
        hpregenperlevel: number
        mpregen: number
        mpregenperlevel: number
        crit: number
        critperlevel: number
        attackdamage: number
        attackdamageperlevel: number
        attackspeedperlevel: number
        attackspeed: number
    };
}

export interface LolDataDragonSummonerSpellListResponse {
    type: string;
    version: string;
    data: LolDataDragonSummonerResponse[];
}

export interface LolDataDragonSummonerResponse {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    image: LolDataDragonImageResponse;
    key: number;
}

export interface LolDataDragonImageResponse {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface LolCommunityDragonPerkResponse {
    id: number;
    name: string;
    majorChangePatchVersion: string;
    tooltip: string;
    shortDesc: string;
    longDesc: string;
    recommendationDescription: string;
    iconPath: string;
}

export interface LolDataDragonPerkResponse {
    id: number;
    key: string;
    icon: string;
    name: string;
    slots: LolDataDragonRuneSlotResponse[];
}

interface LolDataDragonRuneSlotResponse {
    runes: LolDataDragonRuneResponse[];
}

interface LolDataDragonRuneResponse {
    id: number;
    key: string;
    icon: string;
    name: string;
    shortDesc: string;
    longDesc: string;
}

export interface LolQueue {
    queueId: number;
    map: string;
    description: string;
    notes: string;
}

enum AverageRanks {
    Iron4,
    Iron3,
    Iron2,
    Iron1,
    Bronze4,
    Bronze3,
    Bronze2,
    Bronze1,
    Silver4,
    Silver3,
    Silver2,
    Silver1,
    Gold4,
    Gold3,
    Gold2,
    Gold1,
    Platinum4,
    Platinum3,
    Platinum2,
    Platinum1,
    Diamond4,
    Diamond3,
    Diamond2,
    Diamond1,
    Master,
    GrandMaster,
    Challenger,
    Unavailable,
    Unranked
}

export enum LoLTiers {
    Iron = 'IRON',
    Bronze = 'BRONZE',
    Silver = 'SILVER',
    Gold = 'GOLD',
    Platinum = 'PLATINUM',
    Diamond = 'DIAMOND',
    Master = 'MASTER',
    GrandMaster = 'GRANDMASTER',
    Challenger = 'CHALLENGER'
}

export enum LoLRanks {
    I = 'I',
    II = 'II',
    III = 'III',
    IV = 'IV'
}

export enum LoLQueueTypes {
    Solo = 'RANKED_SOLO_5x5',
    Flex = 'RANKED_FLEX_SR'
}

export const LoLTierDescription = (loLTier: LoLTiers) => {
    switch (loLTier) {
        case LoLTiers.Iron:
            return 'Iron';
        case LoLTiers.Bronze:
            return 'Bronze';
        case LoLTiers.Silver:
            return 'Silver';
        case LoLTiers.Gold:
            return 'Gold';
        case LoLTiers.Platinum:
            return 'Platinum';
        case LoLTiers.Diamond:
            return 'Diamond';
        case LoLTiers.Master:
            return 'Master';
        case LoLTiers.GrandMaster:
            return 'GrandMaster';
        case LoLTiers.Challenger:
            return 'Challenger';

    }
};

export const LolRankDescription = (loLRank: LoLRanks) => {
    switch (loLRank) {
        case LoLRanks.I:
            return '1';
        case LoLRanks.II:
            return '2';
        case LoLRanks.III:
            return '3';
        case LoLRanks.IV:
            return '4';
    }
};

export const LoLQueueTypeDescription = (loLQueueType: LoLQueueTypes) => {
    switch (loLQueueType) {
        case LoLQueueTypes.Solo:
            return 'Solo';
        case LoLQueueTypes.Flex:
            return 'Flex';
    }
};

export const GetEmblemImage = (loLTier: LoLTiers) => {
    switch (loLTier) {
        case LoLTiers.Iron:
            return EmblemIronPng;

        case LoLTiers.Bronze:
            return EmblemBronzePng;
        case LoLTiers.Silver:
            return EmblemSilverPng;
        case LoLTiers.Gold:
            return EmblemGoldPng;
        case LoLTiers.Platinum:
            return EmblemPlatinumPng;
        case LoLTiers.Diamond:
            return EmblemDiamondPng;
        case LoLTiers.Master:
            return EmblemMasterPng;
        case LoLTiers.GrandMaster:
            return EmblemGrandMasterPng;
        case LoLTiers.Challenger:
            return EmblemChallengerPng;

    }
};

export const MatchVictoryStatusDescription = (win: boolean): string => {
    switch (win) {
        case true:
            return 'Victory';
        case false:
            return 'Defeat';
    }
};

export const MatchTeamSideDescription = (teamId: number): string => {
    switch (teamId) {
        case 100:
            return 'Blue Team';
        case 200:
            return 'Red Team';
        default:
            return 'Bots';
    }
};

export const LoLAverageRankDescription = (averageRank: AverageRanks): string => {
    switch (averageRank) {
        case AverageRanks.Iron4:
            return 'Iron 4';
        case AverageRanks.Iron3:
            return 'Iron 3';
        case AverageRanks.Iron2:
            return 'Iron 2';
        case AverageRanks.Iron1:
            return 'Iron 1';
        case AverageRanks.Bronze4:
            return 'Bronze 4';
        case AverageRanks.Bronze3:
            return 'Bronze 3';
        case AverageRanks.Bronze2:
            return 'Bronze 2';
        case AverageRanks.Bronze1:
            return 'Bronze 1';
        case AverageRanks.Silver4:
            return 'Silver 4';
        case AverageRanks.Silver3:
            return 'Silver 3';
        case AverageRanks.Silver2:
            return 'Silver 2';
        case AverageRanks.Silver1:
            return 'Silver 1';
        case AverageRanks.Gold4:
            return 'Gold 4';
        case AverageRanks.Gold3:
            return 'Gold 3';
        case AverageRanks.Gold2:
            return 'Gold 2';
        case AverageRanks.Gold1:
            return 'Gold 1';
        case AverageRanks.Platinum4:
            return 'Platinum 4';
        case AverageRanks.Platinum3:
            return 'Platinum 3';
        case AverageRanks.Platinum2:
            return 'Platinum 2';
        case AverageRanks.Platinum1:
            return 'Platinum 1';
        case AverageRanks.Diamond4:
            return 'Diamond 4';
        case AverageRanks.Diamond3:
            return 'Diamond 3';
        case AverageRanks.Diamond2:
            return 'Diamond 2';
        case AverageRanks.Diamond1:
            return 'Diamond 1';
        case AverageRanks.Master:
            return 'Master';
        case AverageRanks.GrandMaster:
            return 'GrandMaster';
        case AverageRanks.Challenger:
            return 'Challenger';
        case AverageRanks.Unavailable:
            return 'Unavailable';
        case AverageRanks.Unranked:
            return 'Unranked';

    }
};

export const getObjectiveProgressBarColor = (focusedPlayerWon: boolean, getOpposingTeam: boolean = false) => {
    const win = getOpposingTeam ? !focusedPlayerWon : focusedPlayerWon;
    return win ? 'bg-[#4e91c7]' : 'bg-red-700';
};

export const getMatchGameModeDescription = (match: LoLMatch) => {
    switch (match.info.queueId) {
        case 65:
        case 450:
            return 'Aram';
        case 4:
        case 420:
            return 'Ranked Solo';
        case 440:
            return 'Flex 5:5 Rank';
        default:
            return match.info.gameMode;

    }
};

export interface LeagueOfLegendsState {
    latestVersion: string;
    currentMatchId: number | null;
    dataDragonChampionList: LolDataDragonChampionListResponse | null;
    dataDragonSummonerSpellList: LolDataDragonSummonerSpellListResponse | null;
    dataDragonPerks: LolDataDragonPerkResponse[];
    communityDragonPerks: LolCommunityDragonPerkResponse[];

}