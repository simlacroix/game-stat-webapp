import React from 'react';
import AuthContainer from '../components/container/AuthContainer';
import Textbox from '../components/Textbox';
import {Link, useNavigate} from 'react-router-dom';
import {SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import {registerSchema} from '../validations/authValidations/RegisterValidations';
import {RegisterFormValues} from '../types/authTypes';
import Button from '../components/Button';
import {useAppDispatch} from '../app/hooks';
import {loginUser} from '../app/slices/authSlice';
import ErrorBox from '../components/ErrorBox';
import {useRegisterMutation} from '../app/slices/trackingFellowshipApiSlice';

export interface RegisterPageProps {

}

const RegisterPage = ({}: RegisterPageProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {register: registerInput, handleSubmit, formState: {errors}} = useForm<RegisterFormValues>({
        resolver: yupResolver(registerSchema),
    });

    const submitRegister: SubmitHandler<RegisterFormValues> = async (registerValues) => {
        const authenticateResponse = await register(registerValues).unwrap();
        dispatch(loginUser(authenticateResponse));
        navigate('/dashboard');
    };

    const [register, {isLoading: registerIsLoading, error: registerError}] = useRegisterMutation();

    return (
        <AuthContainer>
            <form className={'w-full flex justify-center'} onSubmit={handleSubmit(submitRegister)}>
                <div className={'flex flex-col w-full max-w-[450px] space-y-5'}>
                    <div>
                        <>
                            {registerError && (
                                <ErrorBox>
                                    <>{registerError}</>
                                </ErrorBox>
                            )}
                        </>
                        <Textbox type="text" label="Username" name="username" register={registerInput('username')}
                                 error={errors.username}></Textbox>
                        <Textbox type="email" label="Email" name="emtail" register={registerInput('email')}
                                 error={errors.email}></Textbox>
                        <Textbox type="email" label="Confirm Email" name="emailConfirm"
                                 register={registerInput('emailConfirm')} error={errors.emailConfirm}></Textbox>
                        <Textbox type="password" label="Password" name="password"
                                 register={registerInput('password')} error={errors.password}></Textbox>
                        <Textbox type="password" label="Confirm Password" name="passwordConfirm"
                                 register={registerInput('passwordConfirm')} error={errors.passwordConfirm}></Textbox>
                    </div>
                    <div className={'flex justify-between items-center space-x-1'}>
                        <span
                            className={'text-white text-left text-[12px] sm:text-[16px]'}>Already have an account? <Link
                            to={'/login'}
                            className={'underline text-[#CBB26AFF]'}>Log&nbsp;in</Link></span>
                        <Button type={'submit'}
                                className={'w-36 h-8 rounded-md bg-fellowship-gold-button text-[12px] sm:text-[16px] text-white font-extrabold hover:bg-fellowship-gold-button-hover'}
                                isLoading={registerIsLoading}>
                            Register
                        </Button>
                    </div>
                    <div>

                    </div>
                </div>
            </form>
        </AuthContainer>
    );
};

export default RegisterPage;