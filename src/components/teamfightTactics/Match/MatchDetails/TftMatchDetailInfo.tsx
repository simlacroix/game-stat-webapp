import React from 'react';
import {getTftPlacementColor, getTftStageAndRound, TftMatch} from '../../../../types/TeamfightTacticsTypes';
import TftMatchDetailParticipantInfo from './TftMatchDetailParticipantInfo';
import {calculateGameTimeDuration} from '../../../../helper/helper';
import TftTraitImage from '../../TftTraitImage';
import TftAugmentImage from '../../TftAugmentImage';
import TftChampionsDisplay from '../TftChampionsDisplay';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoins, faSkull} from '@fortawesome/free-solid-svg-icons';
import BaseTooltip from '../../../BaseTooltip';
import SwordsSvg from '../../../../assets/svgs/swords.svg';
import {useWindowSize} from '../../../hooks/useWindowSize';

export interface TftMatchDetailInfoProps {
    currentMatch: TftMatch | undefined;
}

const TftMatchDetailInfo = ({currentMatch}: TftMatchDetailInfoProps) => {
    const [width] = useWindowSize();

    if (!currentMatch) {
        return <span
            className={'flex items-center justify-center h-full w-full text-white font-bold'}>No game selected. Click on a game to show its detail...</span>;
    }

    return (
        <div className={'w-full h-full px-0.5'}>
            <div className={'flex flex-col gap-y-0.5'}>
                <table className={'table-auto border-spacing-y-1 border-separate'}>
                    <thead className={'text-xs bg-slate-50'}>
                    <tr className={'rounded'}>
                        <th className={'pl-2 rounded-tl rounded-bl'}>#</th>
                        <th>Summoner</th>
                        <th>Stage</th>
                        <th>Synergy</th>
                        <th>Aug</th>
                        <th>Champion</th>
                        {width >= 650 && (
                            <th className={'pr-2 rounded-tr rounded-br'}>Report</th>
                        )}
                    </tr>
                    </thead>
                    <tbody>
                    {[...currentMatch.Info.Participants].sort((participantA, participantB) => participantA.Placement - participantB.Placement).map(participant => (
                        <tr key={participant.Puuid} className={'rounded'}
                            style={{backgroundColor: getTftPlacementColor(participant.Placement)}}>
                            <td className={'rounded-tl rounded-bl'}>
                                <span>{participant.Placement}</span>
                            </td>

                            <td>
                                <TftMatchDetailParticipantInfo
                                    summoner={currentMatch.summonersParticipants.find(summoner => summoner.puuid === participant.Puuid)}/>
                            </td>

                            <td>
                                <div className={'flex flex-col text-xs justify-center whitespace-nowrap'}>
                                    <span>{getTftStageAndRound(participant.Last_Round)}</span>
                                    <span>{calculateGameTimeDuration(participant.Time_Eliminated)}</span>
                                </div>
                            </td>

                            <td>
                                <div className={'flex justify-center'}>
                                    <div className={'w-12 flex flex-wrap'}>
                                        {[...participant.Traits].sort((traitA, traitB) => traitB.Style - traitA.Style).filter(trait => trait.Tier_Current > 0).map((trait) => (
                                            <div className={'w-4 h-4'} key={trait.Name}>
                                                <TftTraitImage traitId={trait.Name}/>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className={'flex flex-col items-center'}>
                                    {participant.Augments.map(augment => (
                                        <div key={augment} className={'w-3 h-3'}>
                                            <TftAugmentImage augmentId={augment}/>
                                        </div>
                                    ))}
                                </div>
                            </td>

                            <td>
                                <TftChampionsDisplay participant={participant} imageWidth={'w-8'}
                                                     imageHeight={'h-8'}
                                                     gap={'gap-x-1 gap-y-2 sm:gap-y-0'}
                                                     extraClasses={'justify-center'}
                                                     wrap={width <= 650}/>
                            </td>

                            {width >= 650 && (
                                <td className={'rounded-tr rounded-br'}>
                                    <div className={'flex flex-col text-xs'}>
                                        <BaseTooltip overlay={<div>Gold left: {participant.Gold_Left}</div>}
                                                     placement={'left'}>
                                            <div className={'flex items-center gap-x-1'}>
                                                <FontAwesomeIcon icon={faCoins} style={{color: '#b9b927'}}/>
                                                <span>{participant.Gold_Left}</span>
                                            </div>
                                        </BaseTooltip>

                                        <BaseTooltip
                                            overlay={<div>Player eliminated: {participant.Players_Eliminated}</div>}
                                            placement={'left'}>
                                            <div className={'flex items-center gap-x-1'}>
                                                <FontAwesomeIcon icon={faSkull} style={{color: '#5b6067'}}/>
                                                <span>{participant.Players_Eliminated}</span>
                                            </div>
                                        </BaseTooltip>

                                        <BaseTooltip overlay={<div>Total damage dealt to
                                            players: {participant.Total_Damage_To_Players}</div>}
                                                     placement={'left'}>
                                            <div className={'flex items-center gap-x-1'}>
                                                <img className={'w-3 h-3 red-image'} src={SwordsSvg} alt={'Swords'}/>
                                                <span>{participant.Total_Damage_To_Players}</span>
                                            </div>
                                        </BaseTooltip>
                                    </div>
                                </td>
                            )}
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default TftMatchDetailInfo;