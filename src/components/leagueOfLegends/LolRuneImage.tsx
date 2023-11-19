import React from 'react';
import {useAppSelector} from '../../app/hooks';
import BaseTooltip from '../BaseTooltip';
import {isMobile} from 'react-device-detect';

export interface LolRuneImageProps {
    perkId: number;
    runeId: number;
    widthClass: string;
    heightClass: string;
    primary?: boolean;
    selected?: boolean;
}

const LolRuneImage = ({perkId, runeId, heightClass, widthClass, primary = false, selected}: LolRuneImageProps) => {
    const perks = useAppSelector(state => state.leagueOfLegends.dataDragonPerks);

    const perk = perks.find(perk => perk.id === perkId);

    if (!perk)
        return <></>;

    const runes = perk.slots.flatMap(slot => slot.runes);
    const rune = runes.find(rune => rune.id === runeId);

    if (!rune)
        return <></>;

    return (
        <BaseTooltip overlayClassName={'w-[260px] sm:w-[340px]'}
                     overlay={
                         <div className={'text-left list-none'}>
                             <span className={'text-fellowship-gold-button'}>{rune.name}</span>
                             <br/>
                             <span dangerouslySetInnerHTML={{__html: rune.longDesc}}></span>
                         </div>
                     }>
            <img
                style={{
                    opacity: selected !== undefined ? (selected ? 1 : 0.15) : 1,
                }}
                className={`${heightClass} ${widthClass} rounded-full ${primary ? 'bg-black' : ''}`}
                src={`https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`}
                alt={rune.name}
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

export default React.memo(LolRuneImage);