import React from 'react';
import Tooltip from 'rc-tooltip';

export interface CardDisplayProps {
    cardCode: string;
    cardCount: number;
}

const CardDisplay = ({cardCode, cardCount}: CardDisplayProps) => {
    let subset: number = Number(cardCode.substring(0, 2));
    let addressFull = `https://dd.b.pvp.net/latest/set${subset}/en_us/img/cards/${cardCode}-full.png`;
    let addressFullCde = `https://dd.b.pvp.net/latest/set${subset}cde/en_us/img/cards/${cardCode}-full.png`;
    let address = `https://dd.b.pvp.net/latest/set${subset}/en_us/img/cards/${cardCode}.png`;
    let addressCde = `https://dd.b.pvp.net/latest/set${subset}cde/en_us/img/cards/${cardCode}.png`;

    const onImageError = (e: any) => {
        e.target.src = addressCde;
    };

    const onFullImageError = (e: any) => {
        e.target.src = addressFullCde;
    };

    return (
        <div className={'relative'}>
            <Tooltip placement={'top'}
                     mouseEnterDelay={0.2}
                     mouseLeaveDelay={0}
                     overlayInnerStyle={{
                         background: 'transparent',
                         border: 'none',
                         opacity: 1,
                     }}
                     overlay={
                         <div>
                             <img className={'max-h-80'} src={address} onError={onImageError}/>
                         </div>}>
                <img className={'object-cover w-20 h-20 mr-0 rounded-full border'} src={addressFull}
                     onError={onFullImageError}/>
            </Tooltip>
            <span
                className={'text-[11px] lg:text-xs absolute flex items-center justify-center right-0 bottom-0 bg-fellowship-gold-button rounded-2xl text-white h-4 w-4 lg:h-5 lg:w-5'}>{cardCount}</span>
        </div>

    );
};

export default CardDisplay;