import React from 'react';
import {useAppSelector} from '../../app/hooks';
import './TftTraitImage.css';

export interface TftTraitImageProps {
    traitId: string;
}

const TftTraitImage = ({traitId}: TftTraitImageProps) => {
    const traits = useAppSelector(state => state.teamfightTactics.traits);

    const trait = traits.data.find(trait => trait.id === traitId);

    if (!trait)
        return <></>;

    return (
        <img
            className={'rounded-full trait-image'}
            src={`https://ddragon.leagueoflegends.com/cdn/${traits.version}/img/tft-trait/${trait.image.full}`}
            alt={trait.name}/>
    );
};

export default TftTraitImage;