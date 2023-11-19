import React from 'react';
import {useAppSelector} from '../../app/hooks';

export interface TftChampionTextProps {
    championId: string;
}

const TftChampionText = ({championId}: TftChampionTextProps) => {
    const champions = useAppSelector(state => state.teamfightTactics.champions);

    const champion = champions.data.find(champion => champion.id === championId);

    if (!champion)
        return <></>;

    return (
        <div className={'flex flex-col'}>
            <span>{champion.name}</span>
        </div>
    );
};

export default TftChampionText;