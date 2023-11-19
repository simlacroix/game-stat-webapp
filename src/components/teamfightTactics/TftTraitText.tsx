import React from 'react';
import {useAppSelector} from '../../app/hooks';

export interface TftTraitTextProps {
    traitId: string;
}

const TftTraitText = ({traitId}: TftTraitTextProps) => {
    const traits = useAppSelector(state => state.teamfightTactics.traits);

    const trait = traits.data.find(trait => trait.id === traitId);

    if (!trait)
        return <></>;
    return (
        <div className={'flex flex-col'}>
            <span>{trait.name}</span>
        </div>
    );
};

export default TftTraitText;