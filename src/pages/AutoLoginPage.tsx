import React, {useEffect} from 'react';
import {useAuthenticateMutation} from '../app/slices/trackingFellowshipApiSlice';
import {useAppDispatch} from '../app/hooks';
import {loginUser} from '../app/slices/authSlice';
import {useNavigate} from 'react-router-dom';

export interface AutoLoginPageProps {

}

const AutoLoginPage = ({}: AutoLoginPageProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [login, {isLoading: loginIsLoading, error: LoginError}] = useAuthenticateMutation();

    useEffect(() => {
        const authenticationResponse = login({
            password: 'Qwerty123!',
            username: 'demo',
        }).unwrap().then(authenticationResponse => {
            dispatch(loginUser(authenticationResponse));
            navigate('/dashboard');
        });

    }, []);

    return (
        <></>
    );
};

export default AutoLoginPage;