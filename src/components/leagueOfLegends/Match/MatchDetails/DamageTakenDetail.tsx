import React from 'react';
import {roundPercentageToNaturalNumber} from '../../../../helper/helper';
import BaseTooltip from '../../../BaseTooltip';

export interface DamageTakenDetailProps {
    highestTotalDamageTaken: number;
    totalDamageTaken: number;
}

const DamageTakenDetail = ({totalDamageTaken, highestTotalDamageTaken}: DamageTakenDetailProps) => {
    return (
        <BaseTooltip overlayClassName={'w-72'}
                     overlay={
                         <div className={'text-left list-none'}>
                             <span>Total Taken Damage: {totalDamageTaken.toLocaleString()}</span>
                         </div>
                     }>
            <div className={'flex flex-col'}>
                        <span
                            className={'text-center'}>{totalDamageTaken.toLocaleString()}</span>
                <div className={'h-1.5 w-10 sm:w-12 bg-white'}>
                    <div
                        className={`h-1.5 bg-gray-500`}
                        style={{width: highestTotalDamageTaken === 0 ? '100%' : `${roundPercentageToNaturalNumber(totalDamageTaken / highestTotalDamageTaken)}%`}}/>
                </div>
            </div>
        </BaseTooltip>
    );
};

export default DamageTakenDetail;