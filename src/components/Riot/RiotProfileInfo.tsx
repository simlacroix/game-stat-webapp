import React from 'react';
import {RiotSummoner} from '../../types/RiotTypes';
import {useAppSelector} from '../../app/hooks';
import PlayerStatContentContainer from '../container/leagueOfLegendsContainers/PlayerStatContentContainer';
import Button from '../Button';

export interface RiotProfileInfoProps {
    summoner: RiotSummoner;
    refetch: () => void;
    isFetching: boolean;
}

const RiotProfileInfo = ({summoner, refetch, isFetching}: RiotProfileInfoProps) => {
    const latestVersion = useAppSelector(state => state.leagueOfLegends.latestVersion);

    return (
        <PlayerStatContentContainer>
            <div className={'flex space-x-2 pb-2'}>
                <div className={'relative'}>
                    <img className={'w-16 h-16 lg:w-24 lg:h-24 rounded-2xl'}
                         src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/profileicon/${summoner.profileIconId}.png`}
                         alt={'Profile icon'}/>
                    <div className={'absolute w-16 lg:w-24 left-0 mt-[-13px]'}>
                        <span
                            className={'bg-fellowship-gold-button rounded-2xl px-2 text-white text-center'}>{summoner.summonerLevel}</span>
                    </div>
                </div>
                <div className={'flex flex-col justify-between w-fit'}>
                    <h1 className={'text-xl lg:text-2xl text-white font-bold text-left'}>{summoner.name}</h1>
                    <Button
                        onClick={refetch}
                        isLoading={isFetching}
                        className={' w-20 h-10 rounded-md place-self-start bg-fellowship-gold-button hover:bg-fellowship-gold-button-hover text-white font-extrabold'}>Update</Button>
                </div>
            </div>
        </PlayerStatContentContainer>
    );
};

export default RiotProfileInfo;