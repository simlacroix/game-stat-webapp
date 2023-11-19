import React from 'react';
import {LoLItem} from '../../types/LeagueOfLegendsTypes';
import {useAppSelector} from '../../app/hooks';
import BaseTooltip from '../BaseTooltip';
import {isMobile} from 'react-device-detect';

export interface LolImteImageProps {
    item: LoLItem;
    index: number;
    tooltipPlacement?: string;
}

const LolItemImage = ({item, index, tooltipPlacement}: LolImteImageProps) => {
    const latestVersion = useAppSelector(state => state.leagueOfLegends.latestVersion);

    return (
        <BaseTooltip overlayClassName={'w-[260px] sm:w-[340px]'}
                     placement={tooltipPlacement}
                     overlay={
                         <div className={'text-left list-none'}>
                             <span className={'text-fellowship-gold-button'}>{item.name}</span>
                             <br/>
                             <span dangerouslySetInnerHTML={{__html: item.description}}></span>
                             {index !== 6 && (
                                 <>
                                     <br/>
                                     <span>Cost: {item.totalCost} ({item.baseCost})</span>
                                 </>
                             )}
                         </div>}
        >
            <img
                className={`'h-[22px] w-[22px] ${index === 6 ? 'rounded-full' : 'rounded'}`}
                src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/item/${item.id}.png`}
                alt={item.name}
                onClick={(e) => {
                    if (isMobile) {
                        e.stopPropagation();
                    }
                }
                }
            />
        </BaseTooltip>
    );
};

export default React.memo(LolItemImage);