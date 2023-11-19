import React from 'react';
import RiotProfileInfo from '../../Riot/RiotProfileInfo';
import {TftMatchesFromQueueAndTagResponse, TFTSummonerResponse} from '../../../types/TeamfightTacticsTypes';
import TftChampionsInfo from './TftChampionsInfo';
import TftSynergiesInfo from './TftSynergiesInfo';
import TftPlacementsInfo from './TftPlacementsInfo';
import TftRanksInfo from './TftRanksInfo';

export interface TftProfileDisplayProps {
    summonerInfo: TFTSummonerResponse;
    matchesFromQueueAndTagResponse: TftMatchesFromQueueAndTagResponse;
    refetch: () => void;
    isFetching: boolean;
}

const TftProfileDisplay = ({
                               summonerInfo,
                               matchesFromQueueAndTagResponse,
                               refetch,
                               isFetching,
                           }: TftProfileDisplayProps) => {
    return (
        <div className={'flex flex-col p-2 space-y-2'}>
            <RiotProfileInfo summoner={summonerInfo} refetch={refetch} isFetching={isFetching}/>

            <TftRanksInfo summonerInfo={summonerInfo}/>

            <TftPlacementsInfo matchesFromQueueAndTagResponse={matchesFromQueueAndTagResponse}/>

            <TftSynergiesInfo matchesFromQueueAndTagResponse={matchesFromQueueAndTagResponse}/>

            <TftChampionsInfo matchesFromQueueAndTagResponse={matchesFromQueueAndTagResponse}/>
        </div>
    );
};

export default TftProfileDisplay;