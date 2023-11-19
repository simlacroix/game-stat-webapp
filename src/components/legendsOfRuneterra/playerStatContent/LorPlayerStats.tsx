import React from 'react';
import {LoRPlayerStatResponse} from '../../../types/LegendsOfRuneterraTypes';
import PlayerStatContentContainer from '../../container/leagueOfLegendsContainers/PlayerStatContentContainer';

export interface LorPlayerStatsProps {
    basicStats: LoRPlayerStatResponse;
}

const LorPlayerStats = ({basicStats}: LorPlayerStatsProps) => {
    return (
        <div className={'relative h-full w-full'}>
            <div className={'flex flex-col p-2 space-y-2'}>
                <PlayerStatContentContainer>
                    <div className={'flex lg:flex-col space-x-1 lg:space-x-0 lg:space-y-2'}>
                        <h1 className={'text-xl lg:text-2xl text-white font-bold text-left'}>{basicStats.playerName}</h1>
                    </div>
                </PlayerStatContentContainer>
                {(basicStats.rank != null || basicStats.points != null) && <PlayerStatContentContainer>
                    <div className={'flex lg:flex-col text-white text-left space-x-1 lg:space-x-0 lg:space-y-2'}>
                        {basicStats.rank != null && <div>
                            <span>Rank: {basicStats.rank + 1}</span>
                        </div>}
                        {basicStats.points != null && <div>
                            <span>Points: {basicStats.points}</span>
                        </div>}
                    </div>
                </PlayerStatContentContainer>}
                <PlayerStatContentContainer>
                    <div className={'flex lg:flex-col space-x-1 lg:space-x-0 lg:space-y-2'}>
                        <div className={'flex lg:flex-col text-right text-white justify-between lg:py-2'}>
                            <span>
                                {basicStats.totalMatches} games
                            </span>
                            <span className={'flex lg:text-3xl mx-3'}>
                                Win Rate {Math.round(basicStats.winRatio * 100)}%
                            </span>
                            <span className={'flex lg:justify-end'}>{basicStats.wins}W {basicStats.losses}L</span>
                        </div>
                    </div>
                </PlayerStatContentContainer>
            </div>
        </div>
    );
};

export default LorPlayerStats;