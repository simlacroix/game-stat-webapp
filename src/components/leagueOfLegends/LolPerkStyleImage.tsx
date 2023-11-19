import React from 'react';
import {useAppSelector} from '../../app/hooks';
import {generateUniqueID} from 'web-vitals/dist/modules/lib/generateUniqueID';

export interface LolPerkStyleImageProps {
    perkId: number;
    widthClass: string;
    heightClass: string;
}

const LolPerkStyleImage = ({perkId, heightClass, widthClass}: LolPerkStyleImageProps) => {
    const perks = useAppSelector(state => state.leagueOfLegends.dataDragonPerks);

    const perk = perks.find(perk => perk.id === perkId);

    if (!perk)
        return <></>;

    const id = generateUniqueID();

    return (
        <img
            data-tooltip-id={id}
            data-tooltip-place="top"
            className={`${heightClass} ${widthClass} rounded-full`}
            src={`https://ddragon.leagueoflegends.com/cdn/img/${perk.icon}`}
            alt={perk.name}
        />
    );
};

export default React.memo(LolPerkStyleImage);