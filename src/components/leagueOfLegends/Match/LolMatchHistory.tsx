import React from 'react';
import {LoLPlayerStatResponse} from '../../../types/LeagueOfLegendsTypes';
import LolMatchSummary from './MatchSummary/LolMatchSummary';
import {useAppSelector} from '../../../app/hooks';
import CustomScrollBar from '../../CustomScrollBar';
import {useWindowSize} from '../../hooks/useWindowSize';

export interface PlayerHistoryProps {
    summonerInfo: LoLPlayerStatResponse;
}

const LolMatchHistory = ({summonerInfo}: PlayerHistoryProps) => {
    const [width] = useWindowSize();

    const currentMatchId = useAppSelector(state => state.leagueOfLegends.currentMatchId);

    return (
        <>
            <div className={'relative h-full w-full'}>
                {width >= 1024 ? (
                    <CustomScrollBar>
                        <div className={'flex flex-col space-y-2 py-2 pl-2 pr-3'}>
                            {summonerInfo.matchHistory.map((match, index) => (
                                <LolMatchSummary key={index} match={match}
                                                 isSelected={!!currentMatchId && currentMatchId === match.info.gameId}/>
                            ))}
                        </div>
                    </CustomScrollBar>
                ) : (
                    <div className={'flex flex-col space-y-2 py-2 px-2'}>
                        {summonerInfo.matchHistory.map((match, index) => (
                            <LolMatchSummary key={index} match={match}
                                             isSelected={!!currentMatchId && currentMatchId === match.info.gameId}/>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default LolMatchHistory;