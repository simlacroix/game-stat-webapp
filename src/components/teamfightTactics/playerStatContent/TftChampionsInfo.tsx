import React from 'react';
import PlayerStatContentContainer from '../../container/leagueOfLegendsContainers/PlayerStatContentContainer';
import TftChampionImageProfile from '../TftChampionImageProfile';
import TftChampionText from '../TftChampionText';
import {roundToDecimal} from '../../../helper/helper';
import {TftMatch, TftMatchesFromQueueAndTagResponse} from '../../../types/TeamfightTacticsTypes';

export interface TftChampionsInfoProps {
    matchesFromQueueAndTagResponse: TftMatchesFromQueueAndTagResponse;
}

const TftChampionsInfo = ({matchesFromQueueAndTagResponse}: TftChampionsInfoProps) => {
    const matchGroupedByUnit = matchesFromQueueAndTagResponse.matches.reduce((acc, game) => {
        game.focusedPlayer.Units.forEach(unit => {
            if (!acc[unit.Character_Id]) {
                acc[unit.Character_Id] = [];
            }

            if (!acc[unit.Character_Id].some(unitGame => unitGame.id === game.id)) {
                acc[unit.Character_Id].push(game);
            }
        });
        return acc;
    }, {} as { [unit: string]: TftMatch[] });

    const matchByUnitArray = Object.entries(matchGroupedByUnit).map(([Character_Id, games]) => ({
        Character_Id,
        games,
    }));

    return (
        <PlayerStatContentContainer>
            <div className={'flex flex-col text-white'}>
                <span className={'text-left text-xl font-extrabold'}>Champions</span>
                <table>
                    <thead>
                    <tr>
                        <th className={'text-left'}>Champion</th>
                        <th>Matches</th>
                        <th>Avg. Place</th>
                    </tr>
                    </thead>
                    <tbody>
                    {matchByUnitArray.sort((championA, championB) => championB.games.length - championA.games.length).map(champion => (
                        <tr key={champion.Character_Id}>
                            <td className={'text-left'}>
                                <div className={'flex items-center space-x-1'}>
                                    <TftChampionImageProfile championId={champion.Character_Id}/>
                                    <TftChampionText championId={champion.Character_Id}/>
                                </div>
                            </td>
                            <td>{champion.games.length}</td>
                            <td>{roundToDecimal(champion.games.reduce((acc, game) => acc + game.focusedPlayer.Placement, 0) / champion.games.length, 2)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </PlayerStatContentContainer>
    );
};

export default TftChampionsInfo;