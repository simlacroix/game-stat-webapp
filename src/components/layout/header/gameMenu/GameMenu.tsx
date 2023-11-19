import React from 'react';
import LoL from '../../../../assets/games/LoL_icon.svg';
import LoR from '../../../../assets/games/lor-logo.png';
import TFT from '../../../../assets/games/tft-logo.png';
import './GameMenu.css';
import {useLocation, useNavigate} from 'react-router-dom';
import HandSvg from '../../../../assets/logo/web/svg/logo-hand-color-no-background.svg';
import {useAppSelector} from '../../../../app/hooks';
import {Game} from '../../../../types/gameTypes';

export interface GameMenuProps {
}

const GameMenu = ({}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleGameClick = (gameUrl: string) => {
        navigate(gameUrl);
    };

    const handleLeagueOfLegendsClick = () => {
        handleGameClick('dashboard/LeagueOfLegends');
    };
    const handleTFTClick = () => {
        handleGameClick('dashboard/TeamfightTactics');
    };
    const handleLegendsOfRuneterraClick = () => {
        handleGameClick('dashboard/LegendsOfRuneterra');
    };
    const handleLogoClick = () => {
        handleGameClick('dashboard');
    };

    const gamertags = useAppSelector(state => state.auth.gamertags);

    return (
        <>
            {location.pathname !== '/dashboard/LeagueOfLegends' && gamertags.find(x => x.game === Game.LeagueOfLegends && x.gamertagId !== null && x.gamertagId !== undefined) && (
                <img src={LoL} className={'Game-image'} onClick={handleLeagueOfLegendsClick} alt={'Lol'}/>
            )}
            {location.pathname !== '/dashboard/LegendsOfRuneterra' && gamertags.find(x => x.game === Game.LegendsOfRuneterra && x.gamertagId !== null && x.gamertagId !== undefined) && (
                <img src={LoR} className={'Game-image'} onClick={handleLegendsOfRuneterraClick} alt={'Lor'}/>
            )}
            {location.pathname !== '/dashboard/TeamfightTactics' && gamertags.find(x => x.game === Game.TeamfightTactics && x.gamertagId !== null && x.gamertagId !== undefined) && (
                <img src={TFT} className={'Game-image'} onClick={handleTFTClick} alt={'TFT'}/>
            )}
            {(location.pathname === '/dashboard/LeagueOfLegends' || location.pathname === '/dashboard/LegendsOfRuneterra' || location.pathname === '/dashboard/TeamfightTactics') && (
                <img src={HandSvg} className={'Game-image'} onClick={handleLogoClick} alt={'dashboard'}/>
            )}
        </>
    );
};

export default GameMenu;