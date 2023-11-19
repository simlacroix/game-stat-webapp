import React from 'react';

export interface PlayerStatContentContainerProps {
    children?: React.ReactNode[] | React.ReactNode;
}

const PlayerStatContentContainer = ({children}: PlayerStatContentContainerProps) => {
    return (
        <div className={'p-2 w-full bg-[#202020]'}>
            {children}
        </div>
    );
};

export default PlayerStatContentContainer;