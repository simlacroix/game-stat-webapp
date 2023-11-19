import React from 'react';
import {roundPercentageToNaturalNumber} from '../../../../helper/helper';
import BaseTooltip from '../../../BaseTooltip';

export interface DamageToChampionDetailProps {
    totalDamageDealtToChampions: number;
    highestTotalDamageDealtToChampion: number;
    totalDamage: number;
}

const DamageDealtDetail = ({
                               totalDamageDealtToChampions,
                               highestTotalDamageDealtToChampion,
                               totalDamage,
                           }: DamageToChampionDetailProps) => {

    return (
        <BaseTooltip overlayClassName={'w-72'}
                     overlay={
                         <div className={'text-left list-none'}>
                             <span>Total damage inflicted to champions: {totalDamageDealtToChampions.toLocaleString()}</span>
                             <br/>
                             <span>Total damage: {totalDamage.toLocaleString()}</span>
                         </div>
                     }>
            <div className={'flex flex-col'}>
                        <span
                            className={'text-center'}>{totalDamageDealtToChampions.toLocaleString()}</span>
                <div className={'h-1.5 w-10 sm:w-12 bg-white'}>
                    <div
                        className={`h-1.5 bg-red-500`}
                        style={{width: highestTotalDamageDealtToChampion === 0 ? '100%' : `${roundPercentageToNaturalNumber(totalDamageDealtToChampions / highestTotalDamageDealtToChampion)}%`}}/>
                </div>
            </div>
        </BaseTooltip>
    );
};

export default DamageDealtDetail;