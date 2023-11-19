import React from 'react';
import LolItem from '../../LolItem';
import {LoLItem} from '../../../../types/LeagueOfLegendsTypes';

export interface PlayerItemDetailsProps {
    items: LoLItem[];
    tooltipPlacement?: string;
}

const PlayerItemDetails = ({items, tooltipPlacement}: PlayerItemDetailsProps) => {
    return (
        <div className={'flex items-start justify-end'}>
            <div className={'flex w-16 sm:w-fit flex-wrap h-9 sm:h-fit gap-0.5 justify-center'}>
                {items.slice(0, -1).map((item, index) => (
                    <LolItem key={index} item={item} index={index} tooltipPlacement={tooltipPlacement}/>
                ))}
            </div>
            <div className={'self-start'}>
                <LolItem item={items[items.length - 1]} index={items.length - 1} tooltipPlacement={tooltipPlacement}/>
            </div>
        </div>

    );
};

export default PlayerItemDetails;