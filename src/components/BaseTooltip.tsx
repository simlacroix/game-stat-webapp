import React from 'react';
import Tooltip from 'rc-tooltip';

export interface BaseTooltipProps {
    children?: React.ReactElement;
    overlay: React.ReactNode | (() => React.ReactNode);
    overlayClassName?: string;
    placement?: string;
}

const BaseTooltip = ({overlay, children, overlayClassName, placement}: BaseTooltipProps) => {
    return (
        <Tooltip overlayClassName={`z-10 ${overlayClassName}`}
                 placement={placement ? placement : 'top'}
                 showArrow={false}
                 overlay={overlay}
                 mouseEnterDelay={0.2}
                 mouseLeaveDelay={0}
                 overlayInnerStyle={{
                     background: 'black',
                     opacity: 1,
                     color: 'white',
                 }}>
            {children}
        </Tooltip>
    );
};

export default BaseTooltip;