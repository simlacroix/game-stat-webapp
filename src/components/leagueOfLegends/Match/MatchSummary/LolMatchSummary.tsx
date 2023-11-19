import React, {useState} from 'react';
import {LoLMatch} from '../../../../types/LeagueOfLegendsTypes';
import {useAppDispatch} from '../../../../app/hooks';
import {setCurrentLoLMatchId} from '../../../../app/slices/leagueOfLegendSlice';
import LolMatchSummaryInfo from './LolMatchSummaryInfo';
import {useWindowSize} from '../../../hooks/useWindowSize';
import LolMatchSummaryPlayerInfo from './LolMatchSummaryPlayerInfo';
import chevronSvg from '../../../../assets/svgs/cheveron.svg';
import LolMatchDetails from '../MatchDetails/LolMatchDetails';

export interface MatchSummaryProps {
    match: LoLMatch;
    isSelected: boolean;
}

const LolMatchSummary = ({match, isSelected}: MatchSummaryProps) => {
    const dispatch = useAppDispatch();

    const [width] = useWindowSize();

    const [gameDetailIsDisplayed, setGameDetailIsDisplayed] = useState<boolean>(false);

    let backgroundColor = 'bg-[#0262af]';

    if (match.info.gameDuration < 225)
        backgroundColor = 'bg-[#aaa9ad]';
    else if (!match.focusedPlayer.win)
        backgroundColor = 'bg-[#8a3d36]';

    return (
        <>
            <div
                className={`flex flex-col lg:flex-row ${backgroundColor} px-1 lg:px-2 rounded-md cursor-pointer ${isSelected && width >= 1700 ? 'outline outline-fellowship-gold-button' : ''} py-2 lg:py-0 space-y-2 lg:space-y-0 lg:py-1`}
                onClick={() => {
                    if (width >= 1700) {
                        dispatch(setCurrentLoLMatchId(match.info.gameId));
                    } else {
                        setGameDetailIsDisplayed(!gameDetailIsDisplayed);
                    }
                }}>

                {width >= 1024 ? (
                    <>
                        <div className={'flex justify-between w-full'}>
                            <LolMatchSummaryInfo match={match} gameDetailIsDisplayed={gameDetailIsDisplayed}/>

                            <LolMatchSummaryPlayerInfo match={match}/>
                        </div>
                        {width < 1700 && (
                            <img className={` ${gameDetailIsDisplayed ? 'rotate-user-menu' : 'rotate-back-user-menu'}`}
                                 src={chevronSvg} alt={'chevron'}/>
                        )}
                    </>
                ) : (
                    <>
                        <LolMatchSummaryInfo match={match} gameDetailIsDisplayed={gameDetailIsDisplayed}/>
                        <div className={'flex justify-between'}>
                            <LolMatchSummaryPlayerInfo match={match}/>
                        </div>
                    </>
                )}
            </div>
            {gameDetailIsDisplayed && width < 1700 && (
                <LolMatchDetails
                    currentMatch={match}/>
            )}
        </>
    );
};

export default React.memo(LolMatchSummary);