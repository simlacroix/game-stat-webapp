import React from 'react';

export interface UserOptionsContainerProps {
    children?: React.ReactNode;
    title: string;
    desc: (JSX.Element | string)[] | JSX.Element | string;
}

const UserOptionsContainer = ({children, title, desc}: UserOptionsContainerProps) => {
    return (
        <div className={'text-left w-full flex flex-col sm:flex-row'}>
            <div className={'w-full sm:w-1/3 bg-[#4C4C4C] p-2 pl-5 sm:pl-5 lg:pl-10'}>
                <span className={'text-white font-extrabold sm:text-[25px] text-[20px]'}>{title}</span>
                <br/>
                <span className={'hidden sm:block text-white sm:text-[16px] text-[12px]'}>{desc}</span>
            </div>
            <div className={'w-full sm:w-2/3 bg-[#323130] p-2'}>{children}</div>
        </div>
    );
};

export default UserOptionsContainer;