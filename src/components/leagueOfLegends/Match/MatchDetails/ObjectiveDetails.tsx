import React from 'react';
import {getObjectiveProgressBarColor, LoLMatch} from '../../../../types/LeagueOfLegendsTypes';
import {roundPercentageToNaturalNumber} from '../../../../helper/helper';
import baronMinimapIconPng from '../../../../assets/leagueOfLegendsAssets/baron_minimap_icon.png';
import dragonMinimapIconPng from '../../../../assets/leagueOfLegendsAssets/dragon_minimap_icon.png';
import iconUiTowerMinimapPng from '../../../../assets/leagueOfLegendsAssets/icon_ui_tower_minimap.png';
import BaseTooltip from '../../../BaseTooltip';

export interface ObjectiveDetailsProps {
    match: LoLMatch;
}

const ObjectiveDetails = ({match}: ObjectiveDetailsProps) => {
    const totalKills = match.teammates.totalKills + match.opponents.totalKills;
    const teammatesKillPercentage = totalKills === 0 ? 50 : match.teammates.totalKills / totalKills;
    const opponentsKillPercentage = totalKills === 0 ? 50 : match.opponents.totalKills / totalKills;

    const totalGold = match.teammates.totalGoldEarned;
    const teammatesGoldPercentage = totalGold === 0 ? 50 : match.teammates.totalGoldEarned / totalGold;
    const opponentsGoldPercentage = totalGold === 0 ? 50 : match.opponents.totalGoldEarned / totalGold;

    return (
        <div
            className={'flex w-full h-14 sm:space-x-5 items-center justify-between bg-[#FBFCF8] px-0.5 sm:px-4'}>
            <div className={'flex justify-between sm:space-x-2 sm:justify-start flex-wrap'}>
                <BaseTooltip overlay={'Baron'}>
                    <div className={'flex space-x-0.5 items-center'}>
                        <img className={'w-4 h-4'} src={baronMinimapIconPng} alt={'baron'}/>
                        <span>{match.teammates.totalBaronKills}</span>
                    </div>
                </BaseTooltip>

                <BaseTooltip overlay={'Dragon'}>
                    <div className={'flex space-x-0.5 items-center'}>
                        <img className={'w-4 h-4'} src={dragonMinimapIconPng} alt={'dragon'}/>
                        <span>{match.teammates.totalDragonKills}</span>
                    </div>
                </BaseTooltip>

                <BaseTooltip overlay={'Tower'}>
                    <div className={'flex space-x-0.5 items-center'}>
                        <img className={'w-4 h-4'} src={iconUiTowerMinimapPng} alt={'tower'}/>
                        <span>{match.teammates.totalTurretKills}</span>
                    </div>
                </BaseTooltip>
            </div>
            <div className={'flex w-4/6 sm:w-1/2 flex-col items-center justify-center space-y-1'}>
                <div className={'relative flex w-full items-center'}>
                    <div
                        style={{width: `${roundPercentageToNaturalNumber(teammatesKillPercentage)}%`}}
                        className={`h-4 ${getObjectiveProgressBarColor(match.focusedPlayer.win)}`}></div>
                    <div
                        style={{width: `${roundPercentageToNaturalNumber(opponentsKillPercentage)}%`}}
                        className={`h-4 ${getObjectiveProgressBarColor(match.focusedPlayer.win, true)}`}></div>
                    <div className={'absolute left-0 ml-2'}>{match.teammates.totalKills}</div>
                    <div className={'absolute w-full flex justify-center'}>Total Kill</div>
                    <div className={'absolute right-0 mr-2'}>{match.opponents.totalKills}</div>
                </div>

                <div className={'relative flex w-full items-center'}>
                    <div
                        style={{width: `${roundPercentageToNaturalNumber(teammatesGoldPercentage)}%`}}
                        className={`h-4 ${getObjectiveProgressBarColor(match.focusedPlayer.win)}`}></div>
                    <div
                        style={{width: `${roundPercentageToNaturalNumber(opponentsGoldPercentage)}%`}}
                        className={`h-4 ${getObjectiveProgressBarColor(match.focusedPlayer.win, true)}`}></div>
                    <div className={'absolute left-0 ml-2'}>{match.teammates.totalGoldEarned.toLocaleString()}</div>
                    <div className={'absolute w-full flex justify-center'}>Total Gold</div>
                    <div className={'absolute right-0 mr-2'}>{match.opponents.totalGoldEarned.toLocaleString()}</div>
                </div>
            </div>
            <div className={'flex justify-between sm:space-x-2 sm:justify-end flex-wrap'}>
                <BaseTooltip overlay={'Baron'}>
                    <div className={'flex space-x-0.5 items-center'}>
                        <img className={'w-4 h-4'} src={baronMinimapIconPng} alt={'baron'}/>
                        <span>{match.opponents.totalBaronKills}</span>
                    </div>
                </BaseTooltip>

                <BaseTooltip overlay={'Dragon'}>
                    <div className={'flex space-x-0.5 items-center'}>
                        <img className={'w-4 h-4'} src={dragonMinimapIconPng} alt={'dragon'}/>
                        <span>{match.opponents.totalDragonKills}</span>
                    </div>
                </BaseTooltip>

                <BaseTooltip overlay={'Tower'}>
                    <div className={'flex space-x-0.5 items-center'}>
                        <img className={'w-4 h-4'} src={iconUiTowerMinimapPng} alt={'tower'}/>
                        <span>{match.opponents.totalTurretKills}</span>
                    </div>
                </BaseTooltip>
            </div>
        </div>
    );
};

export default ObjectiveDetails;