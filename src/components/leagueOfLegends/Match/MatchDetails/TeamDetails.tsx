import React from 'react';
import {
    LoLParticipant,
    MatchTeamSideDescription,
    MatchVictoryStatusDescription,
} from '../../../../types/LeagueOfLegendsTypes';
import './TeamDetails.css';
import PlayerDetail from './PlayerDetail';
import {useWindowSize} from '../../../hooks/useWindowSize';

export interface TeamDetailsProps {
    teamParticipants: LoLParticipant[];
    highestTotalDamageDealtToChampion: number;
    highestTotalDamageTaken: number;
}

const TeamDetails = ({
                         teamParticipants,
                         highestTotalDamageTaken,
                         highestTotalDamageDealtToChampion,
                     }: TeamDetailsProps) => {
    const [width] = useWindowSize();

    return (
        <table className={`table-auto`}>
            <thead className={'bg-[#D1D1CF]'}>
            <tr>
                <th className={'text-left pl-2 rounded-tl'}>{MatchVictoryStatusDescription(teamParticipants[0].win)} ({MatchTeamSideDescription(teamParticipants[0].teamId)})</th>
                <th className={'text-center'}>KDA</th>
                {width >= 412 && (
                    <th className={'text-center'}>Damage</th>
                )}
                {width >= 680 && (
                    <>
                        <th className={'text-center'}>Wards</th>
                        <th className={'text-center'}>CS</th>
                    </>
                )}
                <th className={'text-center rounded-tr'}>Items</th>
            </tr>
            </thead>
            <tbody className={`${teamParticipants[0].win ? 'bg-[#0262af]' : 'bg-[#8a3d36]'} px-3`}>
            {teamParticipants.map(participant => (
                <PlayerDetail participant={participant}
                              highestTotalDamageDealtToChampion={highestTotalDamageDealtToChampion}
                              highestTotalDamageTaken={highestTotalDamageTaken}/>
            ))}
            </tbody>
        </table>
    );
};

export default TeamDetails;