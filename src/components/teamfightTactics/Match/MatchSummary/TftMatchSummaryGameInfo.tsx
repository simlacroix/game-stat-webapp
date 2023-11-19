import React from 'react';
import {
    getPlacementAbbreviation,
    getTftQueueTypeName,
    getTftStageAndRound,
    TftMatch,
} from '../../../../types/TeamfightTacticsTypes';
import {calculateElapsedTime, calculateGameTimeDuration} from '../../../../helper/helper';

export interface TftMatchSummaryGameInfoProps {
    match: TftMatch;
}

const TftMatchSummaryGameInfo = ({match}: TftMatchSummaryGameInfoProps) => {
    return (
        <div
            className={'flex flex-row lg:flex-col text-left min-w-fit justify-between lg:justify-center items-center lg:items-start'}>
            <div
                className={'flex flex-row lg:flex-col justify-between items-center space-x-2 lg:space-x-0 lg:items-start'}>
                <span
                    className={'lg:text-xl font-bold w-6'}>{getPlacementAbbreviation(match.focusedPlayer.Placement)}</span>
                <span className={'text-xs font-bold'}>{getTftQueueTypeName(match.Info.Queue_Id)}</span>
                <span className={'text-xs'}>{calculateElapsedTime(match.Info.Game_Datetime)}</span>
            </div>
            <div className={'flex flex-row lg:flex-col text-xs items-center lg:items-start gap-x-1 lg:gap-x-0'}>
                <span>Stage {getTftStageAndRound(match.focusedPlayer.Last_Round)}</span>
                <span>{calculateGameTimeDuration(match.Info.Game_Length)}</span>
            </div>
        </div>
    );
};

export default TftMatchSummaryGameInfo;