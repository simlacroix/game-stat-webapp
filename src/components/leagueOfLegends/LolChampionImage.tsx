import React from 'react';
import {useAppSelector} from '../../app/hooks';

export interface LolChampionImageProps {
    championKey: number;
    widthClass: string;
    heightClass: string;
    roundClass?: string;
}

const LolChampionImage = ({championKey, heightClass, widthClass, roundClass}: LolChampionImageProps) => {
    const championList = useAppSelector(state => state.leagueOfLegends.dataDragonChampionList);

    if (!championList)
        return <></>;

    const champion = championList.data.find(champion => champion.key === championKey);

    if (!champion)
        return <></>;

    return (
        <img className={`${heightClass} ${widthClass} ${roundClass ? roundClass : 'rounded-full'}`}
             src={`https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/champion/${champion.image.full}`}
             alt={champion.name}/>
    );
};

export default React.memo(LolChampionImage);