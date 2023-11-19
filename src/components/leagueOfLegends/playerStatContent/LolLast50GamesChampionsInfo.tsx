import React from 'react';
import {LoLPlayerStatResponse} from '../../../types/LeagueOfLegendsTypes';
import PlayerStatContentContainer from '../../container/leagueOfLegendsContainers/PlayerStatContentContainer';
import LolChampionImage from '../LolChampionImage';
import {roundPercentageToNaturalNumber, roundToDecimal} from '../../../helper/helper';

export interface LolLast20GamesChampionsInfoProps {
    summonerInfo: LoLPlayerStatResponse;
}

const LolLast50GamesChampionsInfo = ({summonerInfo}: LolLast20GamesChampionsInfoProps) => {
    return (
        <PlayerStatContentContainer>
            <div className={'flex flex-col space-y-2'}>
                <span className={'font-extrabold text-white text-left'}>Recent 50 Games Played Champions</span>
                {summonerInfo.championStats.map(champion => (
                    <div key={champion.championId} className={'flex h-8 space-x-1 w-full text-xs text-white'}>
                        <LolChampionImage championKey={champion.championId} widthClass={'w-8'} heightClass={'h-8'}/>
                        <div className={'grid grid-cols-3 w-full'}>
                            <div className={'flex flex-col text-left'}>
                                <span
                                    className={'font-bold text-fellowship-gold-button-hover'}>{champion.championName}</span>
                                <span>CS {roundToDecimal(champion.CS, 1)} ({roundToDecimal(champion.CSPerMinute, 1)})</span>
                            </div>
                            <div className={'flex flex-col text-center'}>
                                <span>{roundToDecimal(champion.KDA, 2)}:1 KDA</span>
                                <span
                                    className={'text-[#aaa9ad]'}>{roundToDecimal(champion.averageKill, 1)} / {roundToDecimal(champion.averageDeath, 1)} / {roundToDecimal(champion.averageAssist, 1)}</span>
                            </div>
                            <div className={'flex flex-col text-right'}>
                                <span>{roundPercentageToNaturalNumber(champion.winRatio)}%</span>
                                <span>{champion.gamesPlayed} Played</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </PlayerStatContentContainer>
    );
};

export default LolLast50GamesChampionsInfo;