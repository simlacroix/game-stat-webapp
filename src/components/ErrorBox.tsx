import React from 'react';

export interface ErrorBoxProps {
    children?: React.ReactNode;
}

const ErrorBox = ({children}: ErrorBoxProps) => {
    return (
        <>
            <div className={'bg-red-600 mt-2.5 rounded-sm text-white font-bold p-2'}>
                {children}
            </div>
        </>
    );
};

export default ErrorBox;