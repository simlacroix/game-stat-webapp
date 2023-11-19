import React from 'react';

export interface GradientBorderContainerProps {
    children?: React.ReactNode;
}

const GradientBorderContainer = ({children}: GradientBorderContainerProps) => {
    return (
        <div className={"flex w-full h-full rounded-border"}>
            <div className={"flex p-5 bg-[#363636] w-full h-full rounded-[6px]"}>
                {children}
            </div>
        </div>
    );
}

export default GradientBorderContainer;