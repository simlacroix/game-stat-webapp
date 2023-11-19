import React from 'react';
import {LoLParticipant} from '../../types/LeagueOfLegendsTypes';
import LolChampionImage from './LolChampionImage';

export interface LolParticipantProps {
    participant: LoLParticipant;
}

const LolParticipant = ({participant}: LolParticipantProps) => {
    return (
        <div className={'flex text-[11px] text-left w-24 space-x-1 text-[#aaa9ad]'}>
            <LolChampionImage championKey={participant.championId} widthClass={'w-4'} heightClass={'h-4'}
                              roundClass={'rounded'}/>
            <span
                className={'max-w-[60px] text-ellipsis whitespace-nowrap overflow-hidden'}>{participant.summonerName}</span>
        </div>
    );
};

export default LolParticipant;