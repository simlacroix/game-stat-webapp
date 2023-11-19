import React from 'react';
import {calculateElapsedTime, calculateGameTimeDuration} from '../../../../helper/helper';
import {
    getMatchGameModeDescription,
    LoLMatch,
    MatchVictoryStatusDescription,
} from '../../../../types/LeagueOfLegendsTypes';
import {useWindowSize} from '../../../hooks/useWindowSize';
import chevronSvg from '../../../../assets/svgs/cheveron.svg';

export interface MatchSummaryInfoProps {
    match: LoLMatch;
    gameDetailIsDisplayed: boolean;
}

const LolMatchSummaryInfo = ({match, gameDetailIsDisplayed}: MatchSummaryInfoProps) => {
    const [width] = useWindowSize();

    return width >= 1024 ? (
        <>
            <div className={'flex flex-col text-left text-sm justify-center min-w-[5.2rem]'}>
                <span>{getMatchGameModeDescription(match)}</span>
                <span>{calculateElapsedTime(match.info.gameEndTimestamp)}</span>
                <span>{MatchVictoryStatusDescription(match.focusedPlayer.win)}</span>
                <span>{calculateGameTimeDuration(match.info.gameDuration)}</span>
            </div>
        </>
    ) : (
        <div className={'flex text-left text-sm justify-between'}>
            <div className={'flex space-x-1'}>
                <span>{MatchVictoryStatusDescription(match.focusedPlayer.win)}</span>
                <span>{calculateGameTimeDuration(match.info.gameDuration)}</span>
            </div>
            <div className={'flex space-x-2'}>
                <span>{getMatchGameModeDescription(match)}</span>
                <span>{calculateElapsedTime(match.info.gameEndTimestamp)}</span>
                <img className={` ${gameDetailIsDisplayed ? 'rotate-user-menu' : 'rotate-back-user-menu'}`}
                     src={chevronSvg} alt={'chevron'}/>
            </div>
        </div>
    );
};

export default LolMatchSummaryInfo;