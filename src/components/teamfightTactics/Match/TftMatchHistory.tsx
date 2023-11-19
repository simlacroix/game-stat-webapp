import React from 'react';
import Loading from '../../loading';
import CustomScrollBar from '../../CustomScrollBar';
import {useWindowSize} from '../../hooks/useWindowSize';
import {useAppSelector} from '../../../app/hooks';
import TftMatchSummary from './MatchSummary/TftMatchSummary';
import {TftMatchesFromQueueAndTagResponse} from '../../../types/TeamfightTacticsTypes';

export interface TftMatchHistoryProps {
    fetchMatchHistoryIsLoading: boolean;
    matchesFromQueueAndTagResponse?: TftMatchesFromQueueAndTagResponse;
}

const TftMatchHistory = ({fetchMatchHistoryIsLoading, matchesFromQueueAndTagResponse}: TftMatchHistoryProps) => {
    const [width] = useWindowSize();

    const currentMatchId = useAppSelector(state => state.teamfightTactics.currentMatchId);

    return (
        <>
            {fetchMatchHistoryIsLoading && (
                <div className={'flex justify-center items-center h-full w-full'}>
                    <Loading/>
                </div>
            )}
            {matchesFromQueueAndTagResponse && (
                <div className={'relative h-full w-full'}>
                    {width >= 1024 ? (
                        <CustomScrollBar>
                            <div className={'flex flex-col space-y-2 py-2 pl-2 pr-3'}>
                                {matchesFromQueueAndTagResponse.matches.map((match, index) => (
                                    <TftMatchSummary key={index} match={match}
                                                     isSelected={!!currentMatchId && currentMatchId === match.id}/>
                                ))}
                            </div>
                        </CustomScrollBar>
                    ) : (
                        <div className={'flex flex-col space-y-2 py-2 px-2'}>
                            {matchesFromQueueAndTagResponse.matches.map((match, index) => (
                                <TftMatchSummary key={index} match={match}
                                                 isSelected={!!currentMatchId && currentMatchId === match.id}/>
                            ))}
                        </div>
                    )}
                </div>
            )}

        </>
    );
};

export default TftMatchHistory;