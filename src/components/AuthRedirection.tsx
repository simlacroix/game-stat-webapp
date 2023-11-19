import React from 'react';
import {useAppSelector} from "../app/hooks";
import {Navigate} from "react-router-dom";

const AuthRedirection = () => {
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

    if (isAuthenticated) {
        return <Navigate replace to={"/dashboard"}/>
    }

    return <Navigate replace to={'/login'}/>
}

export default AuthRedirection;