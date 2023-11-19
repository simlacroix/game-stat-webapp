import React from 'react';
import {LoRMatchResponse} from '../../../types/LegendsOfRuneterraTypes';
import {calculateElapsedTime} from '../../../helper/helper';
import {getDeckFromCode} from 'lor-deckcodes-ts';
import CardDisplay from './CardDisplay';

export interface LorMatchSummaryProps {
    match: LoRMatchResponse;
}

const LorMatchSummary = ({match}: LorMatchSummaryProps) => {

    let backgroundColor = 'bg-[#0262af]';
    if (!match.focus_player_win)
        backgroundColor = 'bg-[#8a3d36]';

    const startTime = new Date(match.info.game_start_time_utc);
    const decodedDeck = match.focus_player_deck_code != '' ? getDeckFromCode(match.focus_player_deck_code) : null;
    return (
        <div
            className={`flex flex-col lg:flex-row ${backgroundColor} px-1 lg:px-2 rounded-md py-2 lg:py-0 space-y-2 lg:space-y-0 lg:py-1`}>
            <div className={'grid grid-cols-6 gap-2 text-white text-center w-full justify-center'}>
                <div className={'col-span-2'}>
                    <p className={'lg:text-lg text-sm'}>{calculateElapsedTime(startTime.getTime())}</p>
                    <p className={'lg:text-lg text-sm'}>Vs {match.opponent_name}</p>
                    <p className={'lg:text-sm text-xs'}>{match.info.total_turn_count} rounds</p>
                    {match.focus_player_win ? <p className={'lg:text-sm text-xs'}>Victory</p> :
                        <p className={'lg:text-sm text-xs'}>Defeat</p>}
                </div>
                <div className={'col-span-4 flex flex-wrap items-start'}>
                    {decodedDeck ? decodedDeck.map((card) => (
                        <CardDisplay cardCode={card.cardCode} cardCount={card.count}/>
                    )) : <span className={'text-xl font-extrabold'}>Deck Unavailable</span>}
                </div>

            </div>
        </div>
    );
};

export default LorMatchSummary;