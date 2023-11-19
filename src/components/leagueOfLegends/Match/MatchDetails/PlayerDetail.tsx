import React from 'react';
import {LoLParticipant} from '../../../../types/LeagueOfLegendsTypes';
import {roundPercentageToNaturalNumber, roundToDecimal} from '../../../../helper/helper';
import DamageDealtDetail from './DamageDealtDetail';
import LolChampionImage from '../../LolChampionImage';
import LolSummonerSpellImage from '../../LolSummonerSpellImage';
import LolRuneImage from '../../LolRuneImage';
import LolPerkStyleImage from '../../LolPerkStyleImage';
import DamageTakenDetail from './DamageTakenDetail';
import WardDetails from './WardDetails';
import CsDetails from './CsDetails';
import PlayerItemDetails from './PlayerItemDetails';
import {useWindowSize} from '../../../hooks/useWindowSize';

export interface PlayerDetailProps {
    participant: LoLParticipant;
    highestTotalDamageDealtToChampion: number;
    highestTotalDamageTaken: number;
}

const PlayerDetail = ({participant, highestTotalDamageTaken, highestTotalDamageDealtToChampion}: PlayerDetailProps) => {
    const [width] = useWindowSize();

    return (
        <tr>
            <td className={'pl-2'}>
                <div className={'flex space-x-1'}>
                    <div className={'relative'}>
                        <LolChampionImage championKey={participant.championId} heightClass={'h-8'} widthClass={'w-8'}/>
                        <span
                            className={'text-xs absolute flex items-center justify-center left-[-3px] bottom-[-3px] bg-fellowship-gold-button rounded-2xl text-white h-3.5 w-3.5'}>{participant.champLevel}</span>
                    </div>

                    <div className={'flex flex-col space-y-0.5'}>
                        <LolSummonerSpellImage summonerSpellKey={participant.summoner1Id} widthClass={'w-4'}
                                               heightClass={'h-4'}/>
                        <LolSummonerSpellImage summonerSpellKey={participant.summoner2Id} widthClass={'w-4'}
                                               heightClass={'h-4'}/>
                    </div>

                    <div className={'flex flex-col space-y-0.5'}>
                        <LolRuneImage perkId={participant.perks.styles[0].style}
                                      runeId={participant.perks.styles[0].selections[0].perk}
                                      widthClass={'w-4'}
                                      heightClass={'h-4'}
                                      primary/>
                        <LolPerkStyleImage perkId={participant.perks.styles[1].style}
                                           widthClass={'w-4'}
                                           heightClass={'h-4'}/>
                    </div>

                    <div className={'flex items-center'}>
                    <span
                        className={'max-w-[50px] lg:max-w-[6rem] text-ellipsis whitespace-nowrap overflow-hidden'}>{participant.summonerName}</span>
                    </div>
                </div>
            </td>

            <td>
                <div className={'flex flex-col text-center ml-1'}>
                        <span>
                            <span>{participant.kills}</span>/<span>{participant.deaths}</span>/<span>{participant.assists} {width >= 412 ? `(${roundPercentageToNaturalNumber(participant.killParticipation)}%)` : ''}</span>
                        </span>
                    <span>
                        {participant.kda === -1 ? 'Perfect' : `${roundToDecimal(participant.kda, 2)}:1`}
                    </span>
                </div>
            </td>

            {width >= 412 && (
                <td>
                    <div className={'flex space-x-1 items-center justify-center'}>
                        <DamageDealtDetail totalDamageDealtToChampions={participant.totalDamageDealtToChampions}
                                           highestTotalDamageDealtToChampion={highestTotalDamageDealtToChampion}
                                           totalDamage={participant.totalDamageDealt}/>

                        <DamageTakenDetail highestTotalDamageTaken={highestTotalDamageTaken}
                                           totalDamageTaken={participant.totalDamageTaken}/>
                    </div>
                </td>
            )}

            {width >= 680 && (
                <>
                    <td>
                        <WardDetails detectorWardsPlaced={participant.detectorWardsPlaced}
                                     wardsPlaced={participant.wardsPlaced}
                                     wardsKilled={participant.wardsKilled}/>
                    </td>

                    <td>
                        <CsDetails cs={participant.cs} csPerMinute={participant.cSperMinute}/>
                    </td>
                </>
            )}


            <td>
                <PlayerItemDetails items={participant.items} tooltipPlacement={'topRight'}/>
            </td>
        </tr>
    );
};

export default PlayerDetail;