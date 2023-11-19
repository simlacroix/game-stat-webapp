import React from 'react';
import AuthContainer from '../components/container/AuthContainer';
import Textbox from '../components/Textbox';
import {Link, useNavigate} from 'react-router-dom';
import {loginSchema} from '../validations/authValidations/LoginValidations';
import {SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {LoginFormValues} from '../types/authTypes';
import Button from '../components/Button';
import ErrorBox from '../components/ErrorBox';
import {useAppDispatch} from '../app/hooks';
import {loginUser} from '../app/slices/authSlice';
import {useAuthenticateMutation} from '../app/slices/trackingFellowshipApiSlice';

export interface LoginPageProps {

}

const LoginPage = ({}: LoginPageProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm<LoginFormValues>({
        resolver: yupResolver(loginSchema),
    });

    const submitLogin: SubmitHandler<LoginFormValues> = async (loginValues) => {
        const authenticationResponse = await login(loginValues).unwrap();
        dispatch(loginUser(authenticationResponse));
        navigate('/dashboard');
    };

    const [login, {isLoading: loginIsLoading, error: LoginError}] = useAuthenticateMutation();

    return (
        <AuthContainer>
            <form className={'w-full flex justify-center'} onSubmit={handleSubmit(submitLogin)}>
                <div className={'flex flex-col w-full max-w-[450px] space-y-10'}>
                    <div>
                        <>
                            {LoginError && (
                                <ErrorBox>
                                    <>{LoginError}</>
                                </ErrorBox>
                            )}
                            <Textbox name={'username'} type={'text'} label={'Username'} register={register('username')}
                                     error={errors.username}/>
                            <Textbox name={'password'} type={'password'} label={'Password'}
                                     register={register('password')} error={errors.password}/>
                        </>
                    </div>
                    <div className={'flex justify-between items-center space-x-1'}>
                        <span className={'text-white text-left align-middle text-[12px] sm:text-[16px]'}>Don't have an account yet? <Link
                            to={'/register'}
                            className={'underline text-[#CBB26AFF]'}>Create&nbsp;one</Link></span>
                        <Button type={'submit'}
                                className={'w-36 h-8 rounded-md bg-fellowship-gold-button text-[12px] sm:text-[16px] text-white font-extrabold hover:bg-fellowship-gold-button-hover'}
                                isLoading={loginIsLoading}>Log
                            in
                        </Button>
                    </div>
                </div>
            </form>
        </AuthContainer>
    );
};

export default LoginPage;