import React from 'react';
import {useAppSelector} from '../../app/hooks';
import BaseTooltip from '../BaseTooltip';
import {isMobile} from 'react-device-detect';

export interface LolSummonerSpellImageProps {
    summonerSpellKey: number;
    widthClass: string;
    heightClass: string;
}

const LolSummonerSpellImage = ({summonerSpellKey, widthClass, heightClass}: LolSummonerSpellImageProps) => {
    const summonerSpellList = useAppSelector(state => state.leagueOfLegends.dataDragonSummonerSpellList);

    if (!summonerSpellList)
        return <></>;

    const summonerSpell = summonerSpellList.data.find(summonerSpell => summonerSpell.key === summonerSpellKey);

    if (!summonerSpell)
        return <></>;

    return (
        <>
            <BaseTooltip overlayClassName={'w-[260px] sm:w-[340px]'}
                         overlay={
                             <>
                                 <span className={'text-fellowship-gold-button'}>{summonerSpell.name}</span>
                                 <br/>
                                 <span dangerouslySetInnerHTML={{__html: summonerSpell.description}}></span>
                             </>
                         }
            >
                <img
                    className={`${widthClass} ${heightClass} rounded`}
                    src={`https://ddragon.leagueoflegends.com/cdn/${summonerSpellList.version}/img/spell/${summonerSpell.image.full}`}
                    alt={summonerSpell.name}
                    onClick={(e) => {
                        if (isMobile) {
                            e.stopPropagation();
                        }
                    }
                    }
                />
            </BaseTooltip>
        </>
    );
};

export default React.memo(LolSummonerSpellImage);