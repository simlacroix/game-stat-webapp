import React from 'react';
import TeamDetails from './TeamDetails';
import ObjectiveDetails from './ObjectiveDetails';
import RuneDetails from './RuneDetails';
import {LoLMatch} from '../../../../types/LeagueOfLegendsTypes';
import {useWindowSize} from '../../../hooks/useWindowSize';

export interface MatchDetailInfoProps {
    currentMatch: LoLMatch | undefined;
}

const LolMatchDetailInfo = ({currentMatch}: MatchDetailInfoProps) => {
    const [width] = useWindowSize();

    if (!currentMatch) {
        return <span
            className={'flex items-center justify-center h-full w-full text-white font-bold'}>No game selected. Click on a game to show its detail...</span>;
    }

    const participants = currentMatch.teammates.teammates.concat(currentMatch.opponents.teammates);
    const highestTotalDamageDealtToChampion = participants.reduce((prev, current) => (prev.totalDamageDealtToChampions > current.totalDamageDealtToChampions) ? prev : current).totalDamageDealtToChampions;
    const highestTotalDamageTaken = participants.reduce((prev, current) => (prev.totalDamageTaken > current.totalDamageTaken) ? prev : current).totalDamageTaken;

    return (
        <div className={`flex flex-col ${width >= 1700 ? 'p-2' : ''} space-y-2 text-xs xl:text-sm`}>
            <TeamDetails teamParticipants={currentMatch.teammates.teammates}
                         highestTotalDamageDealtToChampion={highestTotalDamageDealtToChampion}
                         highestTotalDamageTaken={highestTotalDamageTaken}/>
            <ObjectiveDetails match={currentMatch}/>
            <TeamDetails teamParticipants={currentMatch.opponents.teammates}
                         highestTotalDamageDealtToChampion={highestTotalDamageDealtToChampion}
                         highestTotalDamageTaken={highestTotalDamageTaken}/>
            {width >= 1700 && (
                <RuneDetails focusedPlayer={currentMatch.focusedPlayer}/>
            )}
        </div>
    );
};

export default LolMatchDetailInfo;