import React from 'react';
import './LegendsOfRuneterra.css';
import {useAppSelector} from '../../app/hooks';
import {Game} from '../../types/gameTypes';
import {Navigate} from 'react-router-dom';
import {useGetLegendsOfRuneterraPlayerStatsQuery} from '../../app/slices/trackingFellowshipApiSlice';
import Loading from '../../components/loading';
import LorPlayerStats from '../../components/legendsOfRuneterra/playerStatContent/LorPlayerStats';
import LorMatchHistory from '../../components/legendsOfRuneterra/Match/LorMatchHistory';

export interface LegendsOfRuneterraPageProps {

}

const LegendsOfRuneterraPage = ({}: LegendsOfRuneterraPageProps) => {
    const gamertag = useAppSelector(state => state.auth.gamertags.find(x => x.game === Game.LegendsOfRuneterra));

    const {
        data: playerStats,
        isLoading: fetchLoRPlayerStatsIsLoading,
    } = useGetLegendsOfRuneterraPlayerStatsQuery();

    if (!gamertag) {
        return <Navigate to={'/dashboard/user'}/>;
    }

    return (
        <div className={'w-full h-full flex lg:px-5 py-2 lg:py-10'}>
            <div className={'w-full h-full runeterra-grid'}>
                <div className={'runeterra-player stat-section'}>
                    {fetchLoRPlayerStatsIsLoading && (
                        <div className={'flex justify-center items-center h-full w-full'}>
                            <Loading/>
                        </div>
                    )}
                    {playerStats && (
                        <LorPlayerStats basicStats={playerStats}/>
                    )}
                </div>
                <div className={'runeterra-history stat-section'}>
                    {fetchLoRPlayerStatsIsLoading && (
                        <div className={'flex justify-center items-center h-full w-full'}>
                            <Loading/>
                        </div>
                    )}
                    {playerStats && (
                        <LorMatchHistory basicStats={playerStats}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LegendsOfRuneterraPage;