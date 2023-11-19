import React from 'react';
import {useAppSelector} from '../app/hooks';
import {Navigate, Route, Routes} from 'react-router-dom';
import AccountManagementPage from '../pages/AccountManagementPage';
import DashboardPage from '../pages/DashboardPage';
import LeagueOfLegendsPage from '../pages/LeagueOfLegends/LeagueOfLegendsPage';
import TeamfightTacticsPage from '../pages/TeamfightTactics/TeamfightTacticsPage';
import LegendsOfRuneterraPage from '../pages/LegendsOfRuneterra/LegendsOfRuneterraPage';

export interface DashboardPrivateRoutesProps {

}

const DashboardPrivateRoutes = ({}: DashboardPrivateRoutesProps) => {
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate replace to={'/login'}/>;
    }

    return (
        <Routes>
            <Route path={''} element={<DashboardPage/>}/>
            <Route path={'user'} element={<AccountManagementPage/>}/>
            <Route path={'LeagueOfLegends'} element={<LeagueOfLegendsPage/>}/>
            <Route path={'TeamfightTactics'} element={<TeamfightTacticsPage/>}/>
            <Route path={'LegendsOfRuneterra'} element={<LegendsOfRuneterraPage/>}/>
        </Routes>
    );
};

export default DashboardPrivateRoutes;