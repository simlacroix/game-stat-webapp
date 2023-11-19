import React from 'react';
import LolParticipant from '../../LolParticipant';
import {LoLMatch} from '../../../../types/LeagueOfLegendsTypes';

export interface MatchSummaryParticipantsProps {
    match: LoLMatch;
}

const LolMatchSummaryParticipants = ({match}: MatchSummaryParticipantsProps) => {
    return (
        <div className={'flex items-center'}>
            <div className={'flex flex-col space-y-0.5'}>
                {match.teammates.teammates.map(participant => (
                    <LolParticipant key={participant.participantId} participant={participant}/>
                ))}
            </div>
            <div className={'flex flex-col space-y-0.5'}>
                {match.opponents.teammates.map((participant) => (
                    <LolParticipant key={participant.participantId} participant={participant}/>
                ))}
            </div>
        </div>
    );
};

export default LolMatchSummaryParticipants;