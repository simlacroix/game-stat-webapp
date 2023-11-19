import React from 'react';
import UserOptionsContainer from '../components/container/UserOptionsContainer';
import ChangePassword from '../components/ChangePassword';
import ConnectedAccounts from '../components/ConnectedAccounts';

export interface UserPageProps {

}

const AccountManagementPage = ({}: UserPageProps) => {

    return (
        <div className={'w-full h-full flex'}>
            <div className={'max-w-5xl flex flex-col justify-center items-center m-auto w-full gap-6 p-2'}>
                <div
                    className={'w-full bg-[#4C4C4C] border border-[#CBB26AFF] h-16 flex justify-left pl-5 sm:pl-5 lg:pl-10 pb-1'}>
                    <span
                        className={'inline-flex self-center text-white text-2xl sm:text-3xl font-extrabold'}>Account Management</span>
                </div>
                <UserOptionsContainer
                    title={'Password'}
                    desc={['Afraid for your safety?',
                        <br key={1}/>, 'Change your password here!']}><ChangePassword></ChangePassword></UserOptionsContainer>
                <UserOptionsContainer
                    title={'Linked Accounts'}
                    desc={'Add all your game accounts here'}><ConnectedAccounts></ConnectedAccounts></UserOptionsContainer>
            </div>
        </div>
    );
};

export default AccountManagementPage;