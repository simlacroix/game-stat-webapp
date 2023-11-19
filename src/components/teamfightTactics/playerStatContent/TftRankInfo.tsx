import React from 'react';
import {TfTLeagueEntry, TFTQueueTypeDescription} from '../../../types/TeamfightTacticsTypes';
import PlayerStatContentContainer from '../../container/leagueOfLegendsContainers/PlayerStatContentContainer';
import {GetEmblemImage, LolRankDescription, LoLTierDescription} from '../../../types/LeagueOfLegendsTypes';

export interface TftRankInfoProps {
    leagueEntry: TfTLeagueEntry;

}

const TftRankInfo = ({leagueEntry}: TftRankInfoProps) => {
    return (
        <PlayerStatContentContainer>
            <div className={'flex flex-col justify-between items-center lg:items-start'}>
                <span
                    className={'font-bold lg:font-extrabold text-white'}>Ranked {TFTQueueTypeDescription(leagueEntry.queueType)}</span>
                <div className={'flex flex-col lg:flex-row justify-between w-full items-center lg:items-start'}>
                    <div className={'flex flex-col lg:flex-row items-center lg:items-start'}>
                        <img className={'w-10 lg:w-20 h-8 lg:h-16'} src={GetEmblemImage(leagueEntry.tier)}
                             alt={'gold'}/>
                        <div
                            className={'flex flex-col text-left text-white justify-between py-2 items-center lg:items-start'}>
                            <span>{LoLTierDescription(leagueEntry.tier)} {LolRankDescription(leagueEntry.rank)}</span>
                            <span>{leagueEntry.leaguePoints} LP</span>
                        </div>
                    </div>
                    <div className={'flex lg:flex-col text-right text-white justify-between lg:py-2'}>
                        <span className={'flex lg:justify-end'}>{leagueEntry.wins}W {leagueEntry.losses}L<span
                            className={'block lg:hidden'}>&nbsp;</span></span>
                        <span className={'flex'}>
                            <span
                                className={'hidden lg:block'}>Win Rate&nbsp;</span> {Math.round(leagueEntry.wins / (leagueEntry.wins + leagueEntry.losses) * 100)}%
                        </span>
                    </div>
                </div>
            </div>
        </PlayerStatContentContainer>
    );
};

export default TftRankInfo;