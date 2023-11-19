import React from 'react';
import {roundToDecimal} from '../../../../helper/helper';

export interface CsDetailsProps {
    cs: number;
    csPerMinute: number;
}

const CsDetails = ({cs, csPerMinute}: CsDetailsProps) => {
    return (
        <div className={'flex flex-col text-sm'}>
            <span>{cs}</span>
            <span>{roundToDecimal(csPerMinute, 1)}/m</span>
        </div>
    );
};

export default CsDetails;