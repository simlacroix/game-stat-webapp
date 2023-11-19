import React from 'react';
import './LeaugeOfLegends.css';
import '../Stat/Stat.css';
import LolMatchHistory from '../../components/leagueOfLegends/Match/LolMatchHistory';
import LolMatchDetails from '../../components/leagueOfLegends/Match/MatchDetails/LolMatchDetails';
import {useAppSelector} from '../../app/hooks';
import {Game} from '../../types/gameTypes';
import {Navigate} from 'react-router-dom';
import Loading from '../../components/loading';
import LolPlayerStats from '../../components/leagueOfLegends/playerStatContent/LolPlayerStats';
import {
    useGetChampionJsonQuery,
    useGetLatestVersionQuery,
    useGetRunesQuery,
    useGetSummonerSpellsQuery,
} from '../../app/slices/dataDragonApiSlice';
import {useGetLeagueOfLegendsPlayerStatsQuery} from '../../app/slices/trackingFellowshipApiSlice';
import {useGetCommunityRunesQuery} from '../../app/slices/communityDragonApiSlice';
import {useWindowSize} from '../../components/hooks/useWindowSize';

export interface LeagueOfLegendsPageProps {

}

const LeagueOfLegendsPage = ({}: LeagueOfLegendsPageProps) => {
    const [width] = useWindowSize();

    const {data: latestVersion = ''} = useGetLatestVersionQuery();
    useGetChampionJsonQuery(latestVersion, {
        skip: latestVersion === '',
    });
    useGetSummonerSpellsQuery(latestVersion, {
        skip: latestVersion === '',
    });
    useGetRunesQuery(latestVersion, {
        skip: latestVersion === '',
    });

    useGetCommunityRunesQuery();

    const gamertag = useAppSelector(state => state.auth.gamertags.find(x => x.game === Game.LeagueOfLegends));
    const currentMatchId = useAppSelector(state => state.leagueOfLegends.currentMatchId);

    const {
        data: summonerInfo,
        isLoading: fetchLoLPlayerStatsIsLoading,
        refetch: refetchLoLPlayerStats,
        isFetching: LoLPlayerStatsIsFetching,
    } = useGetLeagueOfLegendsPlayerStatsQuery();

    if (!gamertag) {
        return <Navigate to={'/dashboard/user'}/>;
    }

    return (
        <div className={'w-full h-full flex lg:px-5 py-2 lg:py-10'}>
            <div className={'w-full h-full league-grid'}>
                <div className={'league-player stat-section'}>
                    {fetchLoLPlayerStatsIsLoading && (
                        <div className={'flex justify-center items-center h-full w-full'}>
                            <Loading/>
                        </div>
                    )}
                    {summonerInfo && (
                        <LolPlayerStats summonerInfo={summonerInfo} refetchLoLPlayerStats={refetchLoLPlayerStats}
                                        LoLPlayerStatsIsFetching={LoLPlayerStatsIsFetching}/>
                    )}
                </div>
                <div className={'league-history stat-section'}>
                    {fetchLoLPlayerStatsIsLoading && (
                        <div className={'flex justify-center items-center h-full w-full'}>
                            <Loading/>
                        </div>
                    )}
                    {summonerInfo && (
                        <LolMatchHistory summonerInfo={summonerInfo}/>
                    )}
                </div>
                {width >= 1700 && (
                    <div className={'league-match-detail stat-section'}>
                        <LolMatchDetails
                            currentMatch={summonerInfo?.matchHistory.find(match => match.info.gameId === currentMatchId)}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LeagueOfLegendsPage;