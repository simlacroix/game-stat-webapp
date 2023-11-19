import React from 'react';
import {useAppSelector} from '../../app/hooks';
import {getTftTierColor} from '../../types/TeamfightTacticsTypes';

export interface TftChampionImageProfileProps {
    championId: string;
}

const TftChampionImageProfile = ({championId}: TftChampionImageProfileProps) => {
    const champions = useAppSelector(state => state.teamfightTactics.champions);

    const champion = champions.data.find(champion => champion.id === championId);

    if (!champion)
        return <></>;

    return (
        <div className={'relative'}>
            <img
                style={{border: `1px solid ${getTftTierColor(champion.tier)}`}}
                className={'rounded-full w-8 h-8 object-cover object-right-top'}
                src={`https://ddragon.leagueoflegends.com/cdn/${champions.version}/img/tft-champion/${champion.image.full}`}
                alt={champion.name}/>
            <span
                style={{backgroundColor: getTftTierColor(champion.tier)}}
                className={`text-xs flex items-center justify-center absolute bottom-0 right-0 rounded-2xl h-4 w-4`}>${champion.tier}</span>
        </div>

    );
};

export default TftChampionImageProfile;