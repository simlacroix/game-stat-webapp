import React from 'react';
import {TftParticipant, TftUnit} from '../../../types/TeamfightTacticsTypes';
import TftChampionImage from '../TftChampionImage';

export interface TftChampionsDisplayProps {
    participant: TftParticipant;
    imageWidth: string;
    imageHeight: string;
    gap?: string;
    wrap?: boolean;
    extraClasses?: string;
}

const TftChampionsDisplay = ({
                                 participant,
                                 imageWidth,
                                 imageHeight,
                                 gap,
                                 wrap,
                                 extraClasses,
                             }: TftChampionsDisplayProps) => {
    let units = Array.from<(undefined | TftUnit)>({length: 9}).fill(undefined);
    units.splice(0, participant.Units.length, ...participant.Units);
    units.sort(unit => unit ? unit.Rarity : -1);

    return (
        <div className={`flex ${gap} ${wrap ? 'flex-wrap' : ''} ${extraClasses}`}>
            {units.map((unit, index) => (
                <div key={index} className={`${imageWidth} ${imageHeight}`}>
                    <TftChampionImage champion={unit}/>
                </div>
            ))}
        </div>
    );
};

export default TftChampionsDisplay;