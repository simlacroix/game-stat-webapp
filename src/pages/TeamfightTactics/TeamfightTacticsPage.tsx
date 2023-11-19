import React from 'react';
import {useAppSelector} from '../../app/hooks';
import {Game} from '../../types/gameTypes';
import {Navigate} from 'react-router-dom';
import './TeamfightTactics.css';
import TftPlayerStats from '../../components/teamfightTactics/playerStatContent/TftPlayerStats';
import TftMatchHistory from '../../components/teamfightTactics/Match/TftMatchHistory';
import {useWindowSize} from '../../components/hooks/useWindowSize';
import {
    useGetLatestVersionQuery,
    useGetTftAugmentsQuery,
    useGetTftChampionsQuery,
    useGetTftHeroAugmentsQuery,
    useGetTftItemsQuery,
    useGetTftTraitsQuery,
} from '../../app/slices/dataDragonApiSlice';
import {useGetTftMatchHistoryQuery, useGetTftSummonerInfoQuery} from '../../app/slices/trackingFellowshipApiSlice';
import TftMatchDetails from '../../components/teamfightTactics/Match/MatchDetails/TftMatchDetails';

export interface TeamfightTacticsPageProps {

}

const TeamfightTacticsPage = ({}: TeamfightTacticsPageProps) => {
    const [width] = useWindowSize();

    const {data: latestVersion = ''} = useGetLatestVersionQuery();
    const currentMatchId = useAppSelector(state => state.teamfightTactics.currentMatchId);

    useGetTftTraitsQuery(latestVersion, {
        skip: latestVersion === '',
    });

    useGetTftChampionsQuery(latestVersion, {
        skip: latestVersion === '',
    });

    useGetTftItemsQuery(latestVersion, {
        skip: latestVersion === '',
    });

    useGetTftAugmentsQuery(latestVersion, {
        skip: latestVersion === '',
    });

    useGetTftHeroAugmentsQuery(latestVersion, {
        skip: latestVersion === '',
    });

    const gamertag = useAppSelector(state => state.auth.gamertags.find(x => x.game === Game.TeamfightTactics));

    const {
        data: summonerInfo,
        isLoading: fetchTftSummonerInfoIsLoading,
        refetch: refetchTftSummonerInfo,
        isFetching: tftSummonerInfoIsFetching,
    } = useGetTftSummonerInfoQuery();

    const {
        data: matchesFromQueueAndTagResponse,
        isLoading: fetchMatchHistoryIsLoading,
        refetch: refetchMatchHistory,
        isFetching: matchHistoryIsFetching,
    } = useGetTftMatchHistoryQuery();

    const refetch = () => {
        refetchTftSummonerInfo();
        refetchMatchHistory();
    };

    if (!gamertag) {
        return <Navigate to={'/dashboard/user'}/>;
    }

    return (
        <div className={'w-full h-full flex lg:px-5 py-2 lg:py-10'}>
            <div className={'w-full h-full tft-grid'}>
                <div className={'tft-player stat-section'}>
                    <TftPlayerStats fetchTftSummonerInfoIsLoading={fetchTftSummonerInfoIsLoading}
                                    summonerInfo={summonerInfo}
                                    matchesFromQueueAndTagResponse={matchesFromQueueAndTagResponse}
                                    fetchMatchHistoryIsLoading={fetchMatchHistoryIsLoading}
                                    refetch={refetch}
                                    isFetching={matchHistoryIsFetching || tftSummonerInfoIsFetching}/>
                </div>
                <div className={'tft-history stat-section'}>
                    <TftMatchHistory fetchMatchHistoryIsLoading={fetchMatchHistoryIsLoading}
                                     matchesFromQueueAndTagResponse={matchesFromQueueAndTagResponse}/>
                </div>
                {width >= 1700 && (
                    <div className={'tft-match-detail stat-section'}>
                        <TftMatchDetails
                            currentMatch={matchesFromQueueAndTagResponse?.matches.find(match => match.id === currentMatchId)}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeamfightTacticsPage;