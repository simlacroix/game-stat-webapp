import React from 'react';
import {getTftTraitStyleColor, TftTrait} from '../../../../types/TeamfightTacticsTypes';
import {useAppSelector} from '../../../../app/hooks';
import TftTraitImage from '../../TftTraitImage';

export interface TftMatchSummaryTraitsProps {
    trait: TftTrait;
}

const TftMatchSummaryTraitsInfo = ({trait}: TftMatchSummaryTraitsProps) => {
    const traits = useAppSelector(state => state.teamfightTactics.traits);

    const ddTrait = traits.data.find(ddtrait => ddtrait.id === trait.Name);

    if (!ddTrait)
        return <></>;

    return (
        <div className={'flex rounded-full bg-black text-[10px] lg:text-xs px-1.5 h-6 items-center gap-x-1'}
             style={{color: getTftTraitStyleColor(trait.Style)}}>
            <div className={'w-4 h-4'}>
                <TftTraitImage traitId={trait.Name}/>
            </div>
            <span>{ddTrait.name} {trait.Num_Units}</span>
        </div>
    );
};

export default TftMatchSummaryTraitsInfo;