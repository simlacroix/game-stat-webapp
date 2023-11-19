import React from 'react';
import TftRankInfo from './TftRankInfo';
import {TFTSummonerResponse} from '../../../types/TeamfightTacticsTypes';

export interface TftRanksInfoProps {
    summonerInfo: TFTSummonerResponse;
}

const TftRanksInfo = ({summonerInfo}: TftRanksInfoProps) => {
    return (
        <div className={'flex lg:flex-col space-x-1 lg:space-x-0 lg:space-y-2'}>
            {summonerInfo.leagueEntry.map(x => (
                <TftRankInfo key={x.leagueId} leagueEntry={x}/>
            ))}
        </div>
    );
};

export default TftRanksInfo;