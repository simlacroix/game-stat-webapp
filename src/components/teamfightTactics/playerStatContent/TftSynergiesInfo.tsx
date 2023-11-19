import React from 'react';
import PlayerStatContentContainer from '../../container/leagueOfLegendsContainers/PlayerStatContentContainer';
import TftTraitImage from '../TftTraitImage';
import TftTraitText from '../TftTraitText';
import {roundToDecimal} from '../../../helper/helper';
import {TftMatch, TftMatchesFromQueueAndTagResponse} from '../../../types/TeamfightTacticsTypes';

export interface TftSynergiesInfoProps {
    matchesFromQueueAndTagResponse: TftMatchesFromQueueAndTagResponse;
}

const TftSynergiesInfo = ({matchesFromQueueAndTagResponse}: TftSynergiesInfoProps) => {
    const matchGroupedByTraits = matchesFromQueueAndTagResponse.matches.reduce((acc, game) => {

        game.focusedPlayer.Traits.forEach(trait => {
            if (trait.Tier_Current > 0) {
                if (!acc[trait.Name]) {
                    acc[trait.Name] = [];
                }

                if (!acc[trait.Name].some(traitGame => traitGame.id === game.id)) {
                    acc[trait.Name].push(game);
                }
            }
        });
        return acc;
    }, {} as { [trait: string]: TftMatch[] });

    const matchByTraitsArray = Object.entries(matchGroupedByTraits).map(([traitName, games]) => ({
        traitName,
        games,
    }));

    return (
        <PlayerStatContentContainer>
            <div className={'flex flex-col text-white'}>
                <span className={'text-left text-xl font-extrabold'}>Synergies</span>
                <table>
                    <thead>
                    <tr>
                        <th className={'text-left'}>Synergy</th>
                        <th>Matches</th>
                        <th>Avg. Place</th>
                    </tr>
                    </thead>
                    <tbody>
                    {matchByTraitsArray.sort((traitA, traitB) => traitB.games.length - traitA.games.length).map(trait => (
                        <tr key={trait.traitName}>
                            <td className={'text-left'}>
                                <div className={'flex items-center space-x-1'}>
                                    <TftTraitImage traitId={trait.traitName}/>
                                    <TftTraitText traitId={trait.traitName}/>
                                </div>
                            </td>
                            <td>{trait.games.length}</td>
                            <td>{roundToDecimal(trait.games.reduce((acc, game) => acc + game.focusedPlayer.Placement, 0) / trait.games.length, 2)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </PlayerStatContentContainer>
    );
};

export default TftSynergiesInfo;