import React from 'react';
import BaseTooltip from '../BaseTooltip';
import {useAppSelector} from '../../app/hooks';

export interface LolPerkStatModImageProps {
    id: number;
    widthClass: string;
    heightClass: string;
    selected?: boolean;
    statStyle: string;
}

const LolPerkStatModImage = ({id, widthClass, heightClass, selected, statStyle}: LolPerkStatModImageProps) => {
    const communityPerks = useAppSelector(state => state.leagueOfLegends.communityDragonPerks);

    const stat = communityPerks.find(perk => perk.id === id);

    if (!stat)
        return <></>;

    return (

        <BaseTooltip overlayClassName={'w-[340px]'}
                     overlay={
                         <div className={'text-left list-none'}>
                             <span className={'text-fellowship-gold-button'}>{statStyle}</span>
                             <br/>
                             <span dangerouslySetInnerHTML={{__html: stat.longDesc}}></span>
                         </div>
                     }>
            <img
                style={{
                    opacity: selected !== undefined ? (selected ? 1 : 0.15) : 1,
                }}
                className={`${heightClass} ${widthClass} rounded-full bg-black`}
                src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/statmods/${stat.iconPath.replace('/lol-game-data/assets/v1/perk-images/StatMods/', '').toLowerCase()}`}
                alt={stat.name}
            />
        </BaseTooltip>
    );
};

export default LolPerkStatModImage;