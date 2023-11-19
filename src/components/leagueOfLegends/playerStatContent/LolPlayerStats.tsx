import React from 'react';
import {LoLPlayerStatResponse} from '../../../types/LeagueOfLegendsTypes';
import CustomScrollBar from '../../CustomScrollBar';
import {useWindowSize} from '../../hooks/useWindowSize';
import LolProfileDisplay from './LolProfileDisplay';

export interface PlayerStatsProps {
    summonerInfo: LoLPlayerStatResponse;
    refetchLoLPlayerStats: () => void;
    LoLPlayerStatsIsFetching: boolean;
}

const LolPlayerStats = ({summonerInfo, refetchLoLPlayerStats, LoLPlayerStatsIsFetching}: PlayerStatsProps) => {
    const [width] = useWindowSize();

    return (
        <div className={'relative h-full w-full'}>
            {width >= 1024 ? (
                <CustomScrollBar>
                    <LolProfileDisplay summonerInfo={summonerInfo} refetchLoLPlayerStats={refetchLoLPlayerStats}
                                       LoLPlayerStatsIsFetching={LoLPlayerStatsIsFetching}/>
                </CustomScrollBar>
            ) : (
                <LolProfileDisplay summonerInfo={summonerInfo} refetchLoLPlayerStats={refetchLoLPlayerStats}
                                   LoLPlayerStatsIsFetching={LoLPlayerStatsIsFetching}/>
            )}
        </div>
    );
};

export default LolPlayerStats;