import React from 'react';
import PlayerStatContentContainer from '../../container/leagueOfLegendsContainers/PlayerStatContentContainer';
import {
    getPlacementAbbreviation,
    getTftPlacementColor,
    TftMatch,
    TftMatchesFromQueueAndTagResponse,
} from '../../../types/TeamfightTacticsTypes';

export interface TftPlacementsInfoProps {
    matchesFromQueueAndTagResponse: TftMatchesFromQueueAndTagResponse;
}

const TftPlacementsInfo = ({matchesFromQueueAndTagResponse}: TftPlacementsInfoProps) => {
    const placements = [1, 2, 3, 4, 5, 6, 7, 8];
    const matchGroupedByPlacement: { [placement: number]: TftMatch[]; } = matchesFromQueueAndTagResponse.matches.reduce(function (groups: { [placement: number]: TftMatch[]; }, game) {
        const placement = game.focusedPlayer.Placement;
        if (!groups[placement]) {
            groups[placement] = [];
        }
        groups[placement].push(game);
        return groups;
    }, {});

    const averagePlacement = Math.round(matchesFromQueueAndTagResponse.averagePlacement);

    return (
        <PlayerStatContentContainer>
            <div className={'flex flex-col'}>
                <div className={'flex text-left text-white'}>
                    <div className={'flex flex-col w-1/2'}>
                        <span>Recent Games</span>
                        <span>{matchesFromQueueAndTagResponse.matches.length} Matches</span>
                    </div>
                    <div className={'flex flex-col w-1/2'}>
                        <span>Avg. Place</span>
                        <span>{getPlacementAbbreviation(averagePlacement)} / 8</span>
                    </div>
                </div>
                <div className={'flex flex-wrap text-white justify-between items-center h-14'}>
                    {placements.map(placement =>
                        <div key={placement}
                             style={{backgroundColor: getTftPlacementColor(placement)}}
                             className={'flex h-6 w-[calc(25%_-_5px)] justify-between rounded-sm px-2 text-left'}>
                            <span>#{placement}</span>
                            <span>{matchGroupedByPlacement[placement]?.length ?? 0}</span>
                        </div>)}
                </div>
            </div>

        </PlayerStatContentContainer>
    );
};

export default TftPlacementsInfo;