import React from 'react';
import TftMatchSummaryTraitsInfo from './TftMatchSummaryTraitsInfo';
import {TftMatch, TftUnit} from '../../../../types/TeamfightTacticsTypes';
import TftAugmentImage from '../../TftAugmentImage';
import TftChampionsDisplay from '../TftChampionsDisplay';

export interface TftMatchSummaryPlayerInfoProps {
    match: TftMatch;
}

const TftMatchSummaryPlayerInfo = ({match}: TftMatchSummaryPlayerInfoProps) => {
    let units = Array.from<(undefined | TftUnit)>({length: 9}).fill(undefined);
    units.splice(0, match.focusedPlayer.Units.length, ...match.focusedPlayer.Units);
    units.sort(unit => unit ? unit.Rarity : -1);

    return (
        <div className={'flex flex-col gap-y-2 w-full'}>
            <div className={'flex justify-between'}>
                <div className={'flex justify-start gap-1 flex-wrap'}>
                    {[...match.focusedPlayer.Traits].sort((traitA, traitB) => traitB.Style - traitA.Style).filter(trait => trait.Tier_Current > 0).map((trait) => (
                        <TftMatchSummaryTraitsInfo key={trait.Name} trait={trait}/>
                    ))}
                </div>
                <div className={'flex'}>
                    {match.focusedPlayer.Augments.map(augment => (
                        <div key={augment} className={'w-6 h-6'}>
                            <TftAugmentImage augmentId={augment}/>
                        </div>
                    ))}
                </div>
            </div>

            <TftChampionsDisplay participant={match.focusedPlayer} imageWidth={'w-10 lg:w-14'}
                                 imageHeight={'h-10 lg:h-14'}
                                 wrap
                                 gap={'gap-x-1 gap-y-2'}/>
        </div>
    );
};

export default TftMatchSummaryPlayerInfo;