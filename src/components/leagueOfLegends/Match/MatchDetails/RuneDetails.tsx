import React from 'react';
import {LoLParticipant} from '../../../../types/LeagueOfLegendsTypes';
import {useAppSelector} from '../../../../app/hooks';
import LolPerkStyleImage from '../../LolPerkStyleImage';
import LolRuneImage from '../../LolRuneImage';
import LolPerkStatModImage from '../../LolPerkStatModImage';

export interface RuneDetailsProps {
    focusedPlayer: LoLParticipant;
}

const RuneDetails = ({focusedPlayer}: RuneDetailsProps) => {
    const perks = useAppSelector(state => state.leagueOfLegends.dataDragonPerks);

    const primaryPerk = perks.find(perk => perk.id === focusedPlayer.perks.styles[0].style);
    const secondaryPerk = perks.find(perk => perk.id === focusedPlayer.perks.styles[1].style);

    if (!primaryPerk || !secondaryPerk)
        return <></>;

    return (
        <div className={'flex space-x-5 text-sm justify-center text-white'}>
            <div className={'flex flex-col w-36 items-center justify-end space-y-1'}>
                <LolPerkStyleImage perkId={primaryPerk.id} heightClass={'h-7'} widthClass={'w-7'}/>
                {primaryPerk.slots.map(slot => (
                    <div className={'flex w-full justify-between'}>
                        {slot.runes.map(rune => (
                            <LolRuneImage perkId={primaryPerk.id} runeId={rune.id} heightClass={'h-7'}
                                          widthClass={'w-7'}
                                          selected={focusedPlayer.perks.styles[0].selections.some(selection => selection.perk === rune.id)}
                                          primary/>
                        ))}
                    </div>
                ))}
                <span>{primaryPerk.name}</span>
            </div>

            <div className={'flex flex-col w-36 items-center justify-end space-y-1'}>
                <LolPerkStyleImage perkId={secondaryPerk.id} heightClass={'h-7'} widthClass={'w-7'}/>
                {secondaryPerk.slots.slice(1).map(slot => (
                    <div className={'flex w-full justify-between'}>
                        {slot.runes.map(rune => (
                            <LolRuneImage perkId={secondaryPerk.id} runeId={rune.id} heightClass={'h-7'}
                                          widthClass={'w-7'}
                                          selected={focusedPlayer.perks.styles[1].selections.some(selection => selection.perk === rune.id)}/>
                        ))}
                    </div>
                ))}
                <span>{secondaryPerk.name}</span>
            </div>

            <div className={'flex flex-col w-24 items-center justify-end space-y-1'}>
                <div className={'flex w-full justify-between'}>
                    <LolPerkStatModImage id={5008} widthClass={'w-7'} heightClass={'h-7'}
                                         selected={focusedPlayer.perks.statPerks.offense === 5008}
                                         statStyle={'Offense'}/>
                    <LolPerkStatModImage id={5005} widthClass={'w-7'} heightClass={'h-7'}
                                         selected={focusedPlayer.perks.statPerks.offense === 5005}
                                         statStyle={'Offense'}/>
                    <LolPerkStatModImage id={5007} widthClass={'w-7'} heightClass={'h-7'}
                                         selected={focusedPlayer.perks.statPerks.offense === 5007}
                                         statStyle={'Offense'}/>
                </div>
                <div className={'flex w-full justify-between'}>
                    <LolPerkStatModImage id={5008} widthClass={'w-7'} heightClass={'h-7'}
                                         selected={focusedPlayer.perks.statPerks.flex === 5008} statStyle={'Flex'}/>
                    <LolPerkStatModImage id={5002} widthClass={'w-7'} heightClass={'h-7'}
                                         selected={focusedPlayer.perks.statPerks.flex === 5002} statStyle={'Flex'}/>
                    <LolPerkStatModImage id={5003} widthClass={'w-7'} heightClass={'h-7'}
                                         selected={focusedPlayer.perks.statPerks.flex === 5003} statStyle={'Flex'}/>
                </div>
                <div className={'flex w-full justify-between'}>
                    <LolPerkStatModImage id={5001} widthClass={'w-7'} heightClass={'h-7'}
                                         selected={focusedPlayer.perks.statPerks.defense === 5001}
                                         statStyle={'Defense'}/>
                    <LolPerkStatModImage id={5002} widthClass={'w-7'} heightClass={'h-7'}
                                         selected={focusedPlayer.perks.statPerks.defense === 5002}
                                         statStyle={'Defense'}/>
                    <LolPerkStatModImage id={5003} widthClass={'w-7'} heightClass={'h-7'}
                                         selected={focusedPlayer.perks.statPerks.defense === 5003}
                                         statStyle={'Defense'}/>
                </div>
                <span>Rune Stats</span>
            </div>
        </div>

    );
};

export default RuneDetails;