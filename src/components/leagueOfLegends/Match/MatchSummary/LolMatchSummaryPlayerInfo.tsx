import React from 'react';
import LolChampionImage from '../../LolChampionImage';
import LolSummonerSpellImage from '../../LolSummonerSpellImage';
import LolRuneImage from '../../LolRuneImage';
import LolPerkStyleImage from '../../LolPerkStyleImage';
import LolMatchSummaryPlayerStat from './LolMatchSummaryPlayerStat';
import PlayerItemDetails from '../MatchDetails/PlayerItemDetails';
import {roundPercentageToNaturalNumber, roundToDecimal} from '../../../../helper/helper';
import LolMatchSummaryParticipants from './LolMatchSummaryParticipants';
import {LoLMatch} from '../../../../types/LeagueOfLegendsTypes';
import {useWindowSize} from '../../../hooks/useWindowSize';

export interface MatchSummaryPlayerInfoProps {
    match: LoLMatch;

}

const LolMatchSummaryPlayerInfo = ({match}: MatchSummaryPlayerInfoProps) => {
    const [width] = useWindowSize();

    return (
        <>
            <div className={'flex flex-col justify-center space-y-1 items-start'}>
                <div className={'flex space-x-1'}>
                    <div className={'relative'}>
                        <LolChampionImage championKey={match.focusedPlayer.championId} widthClass={'w-10 lg:w-12'}
                                          heightClass={'h-10 lg:h-12'}/>
                        <span
                            className={'text-[11px] lg:text-xs absolute flex items-center justify-center right-0 bottom-0 bg-fellowship-gold-button rounded-2xl text-white h-4 w-4 lg:h-5 lg:w-5'}>{match.focusedPlayer.champLevel}</span>
                    </div>

                    <div className={'flex flex-col space-y-1'}>
                        <LolSummonerSpellImage widthClass={'w-[18px] lg:w-[22px]'}
                                               heightClass={'h-[18px] lg:h-[22px]'}
                                               summonerSpellKey={match.focusedPlayer.summoner1Id}/>
                        <LolSummonerSpellImage widthClass={'w-[18px] lg:w-[22px]'}
                                               heightClass={'h-[18px] lg:h-[22px]'}
                                               summonerSpellKey={match.focusedPlayer.summoner2Id}/>
                    </div>

                    <div className={'flex flex-col space-y-1'}>
                        <LolRuneImage perkId={match.focusedPlayer.perks.styles[0].style}
                                      runeId={match.focusedPlayer.perks.styles[0].selections[0].perk}
                                      heightClass={'h-[18px] lg:h-[22px]'}
                                      widthClass={'w-[18px] lg:w-[22px]'}
                                      primary/>
                        <LolPerkStyleImage perkId={match.focusedPlayer.perks.styles[1].style}
                                           heightClass={'h-[18px] lg:h-[22px]'}
                                           widthClass={'w-[18px] lg:w-[22px]'}/>
                    </div>

                    {width >= 1024 && (
                        <LolMatchSummaryPlayerStat match={match}/>
                    )}


                </div>
                {width >= 640 && (
                    <PlayerItemDetails items={match.focusedPlayer.items} tooltipPlacement={'topLeft'}/>
                )}
            </div>

            {width < 1024 && (
                <LolMatchSummaryPlayerStat match={match}/>
            )}


            <div className={'flex flex-col text-[11px] lg:text-sm justify-center items-start text-left'}>
                <span>P/Kill {roundPercentageToNaturalNumber(match.focusedPlayer.killParticipation)}%</span>
                <span>Control ward {match.focusedPlayer.detectorWardsPlaced}</span>
                <span>CS {match.focusedPlayer.cs} ({roundToDecimal(match.focusedPlayer.cSperMinute, 1)})</span>
            </div>

            {width >= 412 && width < 640 && (
                <PlayerItemDetails items={match.focusedPlayer.items} tooltipPlacement={'topRight'}/>
            )}

            {width >= 640 && (
                <LolMatchSummaryParticipants match={match}/>
            )}
        </>
    );
};

export default LolMatchSummaryPlayerInfo;