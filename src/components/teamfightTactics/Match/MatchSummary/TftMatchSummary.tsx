import React, {useState} from 'react';
import {getTftPlacementColor, TftMatch} from '../../../../types/TeamfightTacticsTypes';
import {useAppDispatch} from '../../../../app/hooks';
import {useWindowSize} from '../../../hooks/useWindowSize';
import {setCurrentTFTMatchId} from '../../../../app/slices/teamfightTacticsSlice';
import TftMatchSummaryGameInfo from './TftMatchSummaryGameInfo';
import TftMatchSummaryPlayerInfo from './TftMatchSummaryPlayerInfo';
import TftMatchDetails from '../MatchDetails/TftMatchDetails';
import chevronSvg from '../../../../assets/svgs/cheveron.svg';

export interface TftMatchSummaryProps {
    match: TftMatch;
    isSelected: boolean;
}

const TftMatchSummary = ({match, isSelected}: TftMatchSummaryProps) => {
    const dispatch = useAppDispatch();

    const [width] = useWindowSize();

    const [gameDetailIsDisplayed, setGameDetailIsDisplayed] = useState<boolean>(false);

    return (
        <>
            <div
                style={{backgroundColor: getTftPlacementColor(match.focusedPlayer.Placement)}}
                className={`flex flex-col lg-flex-row px-1 lg:px-2 rounded-md cursor-pointer ${isSelected && width >= 1700 ? 'outline outline-fellowship-gold-button' : ''} pt-0 pb-4 space-y-0 lg:py-4`}
                onClick={() => {
                    if (width >= 1700) {
                        dispatch(setCurrentTFTMatchId(match.id));
                    } else {
                        setGameDetailIsDisplayed(!gameDetailIsDisplayed);
                    }
                }}>
                {width >= 1024 ? (
                    <>
                        <div className={'flex gap-x-3 w-full'}>
                            <TftMatchSummaryGameInfo match={match}/>

                            <TftMatchSummaryPlayerInfo match={match}/>

                            {width < 1700 && (
                                <img
                                    className={` ${gameDetailIsDisplayed ? 'rotate-user-menu' : 'rotate-back-user-menu'}`}
                                    src={chevronSvg} alt={'chevron'}/>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <TftMatchSummaryGameInfo match={match}/>

                        <TftMatchSummaryPlayerInfo match={match}/>
                    </>
                )}

            </div>
            {gameDetailIsDisplayed && width < 1700 && (
                <TftMatchDetails currentMatch={match}/>
            )}
        </>
    );
};

export default TftMatchSummary;