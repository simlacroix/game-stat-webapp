import React from 'react';
import {useAppSelector} from '../../app/hooks';

export interface TftAugmentImageProps {
    augmentId: string;
}

const TftAugmentImage = ({augmentId}: TftAugmentImageProps) => {
    const augments = useAppSelector(state => state.teamfightTactics.augments);
    const heroAugments = useAppSelector(state => state.teamfightTactics.heroAugments);

    const augment = augments.data.find(augment => augment.id === augmentId);
    const heroAugment = heroAugments.data.find(heroAugment => heroAugment.id === augmentId);

    if (!augment && !heroAugment)
        return <></>;

    return (
        <>
            {augment && (
                <img
                    className={'rounded-full'}
                    src={`https://ddragon.leagueoflegends.com/cdn/${augments.version}/img/tft-augment/${augment.image.full}`}
                    alt={augment.name}/>)}
            {heroAugment && (
                <img
                    className={'rounded-full'}
                    src={`https://ddragon.leagueoflegends.com/cdn/${augments.version}/img/tft-hero-augment/${heroAugment.image.full}`}
                    alt={heroAugment.name}/>
            )}
        </>

    );
};

export default TftAugmentImage;