import React from 'react';
import {useAppSelector} from '../../app/hooks';

export interface TftItemImageProps {
    itemId: string;
}

const TftItemImage = ({itemId}: TftItemImageProps) => {
    const items = useAppSelector(state => state.teamfightTactics.items);

    const item = items.data.find(item => item.id === itemId);

    if (!item) {
        return <></>;
    }

    return (
        <img className={'rounded'}
             src={`https://ddragon.leagueoflegends.com/cdn/${items.version}/img/tft-item/${item.image.full}`}
             alt={item.name}/>
    );
};

export default TftItemImage;