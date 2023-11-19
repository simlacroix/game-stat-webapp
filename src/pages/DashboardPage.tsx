import React from 'react';
import lolBanner2 from '../assets/games/lol-banner2.png';
import tftBanner2 from '../assets/games/tft-banner2.jpg';
import lorBanner2 from '../assets/games/lor-banner2.png';
import GameBanner from '../components/container/GameBanner';
import {useAppSelector} from '../app/hooks';
import {Game} from '../types/gameTypes';
import {Navigate} from 'react-router-dom';

export interface DashboardPageProps {

}

const DashboardPage = ({}: DashboardPageProps) => {
    const gamertags = useAppSelector(state => state.auth.gamertags);
    console.log(gamertags);

    if (gamertags.every(gamertag => !gamertag.gamertagId)) {
        return <Navigate to={'/dashboard/user'}/>;
    }

    return (
        <div className={'w-full h-full flex'}>
            <div className={'h-fit p-2 m-auto w-full'}>
                <div className={'flex flex-col justify-center sm:w-1/2 lg:w-2/5 gap-6 w-full h-full m-auto p-2'}>
                    {gamertags.find(x => x.game === Game.LeagueOfLegends && x.gamertagId !== null && x.gamertagId !== undefined) &&
                        <GameBanner gameLink={'./LeagueOfLegends'} src={lolBanner2} alt={'League of Legends'}/>
                    }

                    {gamertags.find(x => x.game === Game.TeamfightTactics && x.gamertagId !== null && x.gamertagId !== undefined) &&
                        <GameBanner gameLink={'./TeamfightTactics'} src={tftBanner2} alt={'Teamfight Tactics'}/>
                    }

                    {gamertags.find(x => x.game === Game.LegendsOfRuneterra && x.gamertagId !== null && x.gamertagId !== undefined) &&
                        <GameBanner gameLink={'./LegendsOfRuneterra'} src={lorBanner2} alt={'Legends of Runeterra'}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;