import React from 'react';
import {LoLItem} from '../../types/LeagueOfLegendsTypes';
import LolImteImage from './LolItemImage';

export interface LolItemProps {
    item: LoLItem;
    index: number;
    tooltipPlacement?: string;
}

const LolItem = ({item, index, tooltipPlacement}: LolItemProps) => {
    return (
        <div
            className={`bg-[#373737] h-[18px] lg:h-[22px] w-[18px] lg:w-[22px] ${index === 6 ? 'rounded-full' : 'rounded'}`}>
            {item.id && (
                <LolImteImage item={item} index={index} tooltipPlacement={tooltipPlacement}/>
            )}
        </div>
    );
};

export default LolItem;