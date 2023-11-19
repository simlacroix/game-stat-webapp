import React from 'react';
import CustomScrollBar from '../../CustomScrollBar';
import {useWindowSize} from '../../hooks/useWindowSize';
import TftProfileDisplay from './TftProfileDisplay';
import Loading from '../../loading';
import {TftMatchesFromQueueAndTagResponse, TFTSummonerResponse} from '../../../types/TeamfightTacticsTypes';

export interface PlayerStatsProps {
    fetchTftSummonerInfoIsLoading: boolean;
    summonerInfo?: TFTSummonerResponse;
    matchesFromQueueAndTagResponse?: TftMatchesFromQueueAndTagResponse;
    fetchMatchHistoryIsLoading: boolean;
    refetch: () => void;
    isFetching: boolean;
}

const TftPlayerStats = ({
                            fetchTftSummonerInfoIsLoading,
                            summonerInfo,
                            matchesFromQueueAndTagResponse,
                            fetchMatchHistoryIsLoading,
                            refetch,
                            isFetching,
                        }: PlayerStatsProps) => {
    const [width] = useWindowSize();

    return (
        <>
            {(fetchTftSummonerInfoIsLoading || fetchMatchHistoryIsLoading) && (
                <div className={'flex justify-center items-center h-full w-full'}>
                    <Loading/>
                </div>
            )}
            {summonerInfo && matchesFromQueueAndTagResponse && (
                <div className={'relative h-full w-full'}>
                    {width >= 1024 ? (
                        <CustomScrollBar>
                            <TftProfileDisplay summonerInfo={summonerInfo}
                                               matchesFromQueueAndTagResponse={matchesFromQueueAndTagResponse}
                                               refetch={refetch}
                                               isFetching={isFetching}/>
                        </CustomScrollBar>
                    ) : (
                        <TftProfileDisplay summonerInfo={summonerInfo}
                                           matchesFromQueueAndTagResponse={matchesFromQueueAndTagResponse}
                                           refetch={refetch}
                                           isFetching={isFetching}/>
                    )}
                </div>
            )}
        </>
    );
};

export default TftPlayerStats;