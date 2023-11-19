import React from 'react';
import {getTftTierColor, TftUnit} from '../../types/TeamfightTacticsTypes';
import {useAppSelector} from '../../app/hooks';
import starSvg from '../../assets/svgs/star.svg';
import './TftChampionImage.css';
import TftItemImage from './TftItemImage';

export interface TftChampionImageProps {
    champion?: TftUnit;
}

const TftChampionImage = ({champion}: TftChampionImageProps) => {
    const champions = useAppSelector(state => state.teamfightTactics.champions);

    const ddChampion = champions.data.find(ddChampion => ddChampion.id === champion?.Character_Id);

    if (!ddChampion) {
        return <div className={'h-full w-full border border-gray-500 rounded-full'}></div>;
    }

    let stars = Array.from(Array(champion?.Tier).keys());

    return (
        <div className={'relative w-full h-full'}>
            <img
                style={{border: `1px solid ${getTftTierColor(ddChampion.tier)}`}}
                className={'w-full h-full rounded-full object-cover object-right-top'}
                src={`https://ddragon.leagueoflegends.com/cdn/${champions.version}/img/tft-champion/${ddChampion.image.full}`}
                alt={ddChampion.name}/>
            <div className={'flex absolute top-[-10%] w-full justify-center'}>
                {stars.map(star => (
                    <img key={star} className={`w-[30%] image-tier-${ddChampion.tier}`} src={starSvg} alt={'star'}/>
                ))}
            </div>
            <div className={'flex absolute bottom-[-15%] w-full justify-center space-x-0.5'}>
                {champion?.ItemNames.map((item, index) => (
                    <div key={index} className={'rounded w-1/3'}>
                        <TftItemImage itemId={item}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TftChampionImage;