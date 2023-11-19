import React from 'react';
import {roundToDecimal} from '../../../../helper/helper';
import {LoLMatch} from '../../../../types/LeagueOfLegendsTypes';

export interface MatchSummaryPlayerStatProps {
    match: LoLMatch;
}

const LolMatchSummaryPlayerStat = ({match}: MatchSummaryPlayerStatProps) => {
    return (
        <div className={'flex flex-col text-left text-[11px] lg:text-sm justify-center'}>
                            <span>
                                <span className={'font-bold'}>{match.focusedPlayer.kills}</span> / <span
                                className={'font-bold text-red-400'}>{match.focusedPlayer.deaths}</span> / <span
                                className={'font-bold'}>{match.focusedPlayer.assists}</span>
                            </span>
            <span className={'text-sm'}>
                                {match.focusedPlayer.kda === -1 ? 'Perfect' : `${roundToDecimal(match.focusedPlayer.kda, 2)}:1`} KDA
                            </span>
        </div>
    );
};

export default LolMatchSummaryPlayerStat;