import React from 'react';
import {LoRPlayerStatResponse} from '../../../types/LegendsOfRuneterraTypes';
import CustomScrollBar from '../../CustomScrollBar';
import {useWindowSize} from '../../hooks/useWindowSize';
import LorMatchSummary from './LorMatchSummary';

export interface LorMatchHistoryProps {
    basicStats: LoRPlayerStatResponse;
}

const LorMatchHistory = ({basicStats}: LorMatchHistoryProps) => {
    const [width] = useWindowSize();

    return (
        <div className={'relative h-full w-full'}>
            {width >= 1024 ? (
                <CustomScrollBar>
                    <div className={'flex flex-col space-y-2 py-2 pl-2 pr-3'}>
                        {basicStats.matchHistory.map((match, index) => (
                            <LorMatchSummary key={index} match={match}/>
                        ))}
                    </div>
                </CustomScrollBar>
            ) : (
                <div className={'flex flex-col space-y-2 py-2 px-2'}>
                    {basicStats.matchHistory.map((match, index) => (
                        <LorMatchSummary key={index} match={match}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LorMatchHistory;