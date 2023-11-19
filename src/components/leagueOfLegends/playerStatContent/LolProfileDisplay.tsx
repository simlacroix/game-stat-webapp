import React from 'react';
import LolRankInfo from './LolRankInfo';
import LolLast50GamesChampionsInfo from './LolLast50GamesChampionsInfo';
import {LoLPlayerStatResponse} from '../../../types/LeagueOfLegendsTypes';
import RiotProfileInfo from '../../Riot/RiotProfileInfo';

export interface LolProfileDisplayProps {
    summonerInfo: LoLPlayerStatResponse;
    refetchLoLPlayerStats: () => void;
    LoLPlayerStatsIsFetching: boolean;
}

const LolProfileDisplay = ({summonerInfo, refetchLoLPlayerStats, LoLPlayerStatsIsFetching}: LolProfileDisplayProps) => {
    return (
        <div className={'flex flex-col p-2 space-y-2'}>

            <RiotProfileInfo summoner={summonerInfo.summoner} refetch={refetchLoLPlayerStats}
                             isFetching={LoLPlayerStatsIsFetching}/>
            <div className={'flex lg:flex-col space-x-1 lg:space-x-0 lg:space-y-2'}>
                {summonerInfo.leagueEntry.map(x => (
                    <LolRankInfo key={x.leagueId} leagueEntry={x}/>
                ))}
            </div>
            <LolLast50GamesChampionsInfo summonerInfo={summonerInfo}/>
        </div>
    );
};

export default LolProfileDisplay;