import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {logoutUser} from '../../../../app/slices/authSlice';
import {useAppDispatch} from '../../../../app/hooks';
import cogSvg from '../../../../assets/svgs/cog.svg';
import leavingSvg from '../../../../assets/svgs/leaving.svg';
import houseSvg from '../../../../assets/svgs/house.svg';

export interface UserMenuProps {

}

const UserMenu = ({}: UserMenuProps) => {
    const dispatch = useAppDispatch();
    const location = useLocation();

    return (
        <div className={'flex flex-col justify-center py-9 space-y-1'}>
            {location.pathname !== '/dashboard/user' &&
                <Link to={'dashboard/user'} className={'User-menu-item space-x-7'}>
                    <img src={cogSvg} className={'h-6 w-6'}/>
                    <span className={'h-full inline-flex self-center'}>Settings</span>
                </Link>}
            {location.pathname !== '/dashboard' &&
                <Link to={'/'} className={'User-menu-item space-x-7'}>
                    <img src={houseSvg} className={'h-6 w-6'}/>
                    <span className={'h-full inline-flex self-center'}>Dashboard</span>
                </Link>}
            <Link to={'login'} className={'User-menu-item space-x-7'}
                  onClick={() => dispatch(logoutUser())}>
                <img src={leavingSvg} className={'h-6 w-6'}/>
                <span className={'h-full inline-flex self-center'}>Sign out</span>
            </Link>
        </div>
    );
};

export default UserMenu;