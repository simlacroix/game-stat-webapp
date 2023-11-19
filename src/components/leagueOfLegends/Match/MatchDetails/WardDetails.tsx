import React from 'react';
import BaseTooltip from '../../../BaseTooltip';

export interface WardDetailsProps {
    detectorWardsPlaced: number;
    wardsPlaced: number;
    wardsKilled: number;
}

const WardDetails = ({wardsPlaced, wardsKilled, detectorWardsPlaced}: WardDetailsProps) => {
    return (
        <BaseTooltip overlay={
            <div className={'flex flex-col'}>
                <span>Control Ward: {detectorWardsPlaced}</span>
                <span>Wards Placed: {wardsPlaced}</span>
                <span>Ward Killed: {wardsKilled}</span>
            </div>}>
            <div className={'flex flex-col text-sm'}>
                <span>{detectorWardsPlaced}</span>
                <span>{wardsPlaced} / {wardsKilled}</span>
            </div>
        </BaseTooltip>
    );
};

export default WardDetails;