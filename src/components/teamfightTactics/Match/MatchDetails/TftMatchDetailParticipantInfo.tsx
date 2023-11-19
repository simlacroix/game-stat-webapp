import React from 'react';
import {TFTSummonerResponse} from '../../../../types/TeamfightTacticsTypes';
import {useAppSelector} from '../../../../app/hooks';

export interface TftMatchDetailParticipantInfoProps {
    summoner?: TFTSummonerResponse;
}

const TftMatchDetailParticipantInfo = ({summoner}: TftMatchDetailParticipantInfoProps) => {
    const latestVersion = useAppSelector(state => state.leagueOfLegends.latestVersion);

    if (!summoner)
        return <></>;

    return (
        <div className={'flex items-center gap-x-1'}>
            <img className={'w-8 h-8 rounded hidden sm:block'}
                 src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/profileicon/${summoner.profileIconId}.png`}
                 alt={'Profile icon'}/>
            <span
                className={'text-xs max-w-[75px] font-bold whitespace-nowrap text-ellipsis overflow-hidden'}>{summoner.name}</span>
        </div>
    );
};

export default TftMatchDetailParticipantInfo;