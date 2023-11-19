import React from 'react';
import {TftMatch} from '../../../../types/TeamfightTacticsTypes';
import TftMatchDetailInfo from './TftMatchDetailInfo';

export interface TftMatchDetailsProps {
    currentMatch: TftMatch | undefined;
}

const TftMatchDetails = ({currentMatch}: TftMatchDetailsProps) => {
    return (
        <TftMatchDetailInfo currentMatch={currentMatch}/>
    );
};

export default TftMatchDetails;