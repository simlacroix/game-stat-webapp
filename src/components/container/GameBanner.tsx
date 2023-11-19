import React from 'react';
import {Link} from 'react-router-dom';

export interface GameBannerProps {
    gameLink: string;
    src: string;
    alt: string;
}

const GameBanner = ({gameLink, src, alt}: GameBannerProps) => {
    return (
        <div className={'bg-[#363636] rounded-border w-full h-fit rounded-[11px]'}>
            <Link to={gameLink}>
                <img className={'rounded-[11px] w-full object-cover'} src={src} alt={alt}/>
            </Link>
        </div>
    );
};

export default GameBanner;