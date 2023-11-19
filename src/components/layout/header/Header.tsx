import React, {useEffect, useRef} from 'react';
import HandSvg from '../../../assets/logo/web/svg/logo-hand-color-no-background.svg';
import {useAppSelector} from '../../../app/hooks';
import GameMenu from './gameMenu/GameMenu';
import './Header.css';
import UserMenu from './userMenu/UserMenu';
import chevronSvg from '../../../assets/svgs/cheveron.svg';
import {isMobile} from 'react-device-detect';
import {useLocation} from 'react-router-dom';
import LoLSvg from '../../../assets/games/LoL_icon.svg';
import LorPng from '../../../assets/games/lor-logo.png';
import TFTPng from '../../../assets/games/tft-logo.png';

export interface HeaderProps {

}

const Header = ({}: HeaderProps) => {
    const auth = useAppSelector(state => state.auth);
    const location = useLocation();

    const [openGameMenu, setOpenGameMenu] = React.useState(false);
    const [openUserMenu, setOpenUserMenu] = React.useState(false);

    const gameMenuOpenerRef = useRef<HTMLImageElement>(null);
    const gameMenuRef = useRef<HTMLDivElement>(null);

    const userOpenerRef = useRef<HTMLDivElement>(null);
    const userMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const userMenuHandler = (e: MouseEvent | TouchEvent) => {
            if ((userOpenerRef.current && userOpenerRef.current.contains(e.target as Node)) || (userMenuRef.current && userMenuRef.current.contains(e.target as Node))) {
                if (e.type === 'touchstart') {
                    setOpenUserMenu(!openUserMenu);
                } else {
                    setOpenUserMenu(true);
                }
            } else {
                setOpenUserMenu(false);
            }
        };

        const gameMenuHandler = (e: MouseEvent | TouchEvent) => {
            if ((gameMenuOpenerRef.current && gameMenuOpenerRef.current.contains(e.target as Node)) || (gameMenuRef.current && gameMenuRef.current.contains(e.target as Node))) {
                if (e.type === 'touchstart') {
                    setOpenGameMenu(!openGameMenu);
                } else {
                    setOpenGameMenu(true);
                }
            } else {
                setOpenGameMenu(false);
            }
        };

        if (isMobile) {
            document.addEventListener('touchstart', userMenuHandler);
            document.addEventListener('touchstart', gameMenuHandler);
        } else {
            document.addEventListener('mouseover', userMenuHandler);
            document.addEventListener('mouseover', gameMenuHandler);
        }

        return () => {
            if (isMobile) {
                document.removeEventListener('touchstart', userMenuHandler);
                document.removeEventListener('touchstart', gameMenuHandler);
            } else {
                document.removeEventListener('mouseover', userMenuHandler);
                document.removeEventListener('mouseover', gameMenuHandler);
            }

        };
    }, []);

    let gameMenuImage = HandSvg;

    if (location.pathname === '/dashboard/LeagueOfLegends') {
        gameMenuImage = LoLSvg;
    } else if (location.pathname === '/dashboard/TeamfightTactics') {
        gameMenuImage = TFTPng;
    } else if (location.pathname === '/dashboard/LegendsOfRuneterra') {
        gameMenuImage = LorPng;
    }

    return (
        <div className={'relative'}>
            <header className={'flex h-[70px] bg-[#3A3A3A] justify-between px-2.5 sm:px-7'}>
                {auth.isAuthenticated && (
                    <>
                        <img src={gameMenuImage} className={'Menu-image'} ref={gameMenuOpenerRef}
                             alt={'Games'}/>
                        <div className={'flex items-center h-full'}>
                            <div
                                className={'bg-[#CBB26A] flex space-x-2 items-center px-5 h-9 cursor-pointer rounded-sm'}
                                ref={userOpenerRef}>
                            <span
                                className={'h-full text-2xl text-white font-extrabold'}>{auth.username}</span>
                                <img className={` ${openUserMenu ? 'rotate-user-menu' : 'rotate-back-user-menu'}`}
                                     src={chevronSvg} alt={'chevron'}/>
                            </div>
                        </div>
                    </>)}
            </header>
            {auth.isAuthenticated && (
                <>
                    <div
                        className={`absolute left-0 top-[3.25rem] mx-5 pt-10 ${openGameMenu ? 'slide-down' : 'slide-up'} z-10`}
                        ref={gameMenuRef}>
                        <div className={'flex justify-start w-fit'}>
                            <GameMenu/>
                        </div>
                    </div>
                    <div
                        className={`absolute right-0 top-[3.25rem] mx-5 pt-10 w-[280px] sm:w-80 ${openUserMenu ? 'slide-down' : 'slide-up'} z-10`}
                        ref={userMenuRef}>
                        <div
                            className={'bg-[#3A3A3A] rounded-sm'}>
                            <UserMenu/>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Header;