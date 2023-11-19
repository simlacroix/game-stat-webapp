import React from 'react';
import {LoLMatch} from '../../../../types/LeagueOfLegendsTypes';
import CustomScrollBar from '../../../CustomScrollBar';
import {useWindowSize} from '../../../hooks/useWindowSize';
import LolMatchDetailInfo from './LolMatchDetailInfo';

export interface MatchDetailsProps {
    currentMatch: LoLMatch | undefined;
}

const LolMatchDetails = ({currentMatch}: MatchDetailsProps) => {
    const [width] = useWindowSize();

    return width >= 1700 ? (
        <CustomScrollBar>
            <LolMatchDetailInfo currentMatch={currentMatch}/>
        </CustomScrollBar>
    ) : (
        <LolMatchDetailInfo currentMatch={currentMatch}/>
    );
};

export default LolMatchDetails;