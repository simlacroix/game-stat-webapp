import React from 'react';
import Textbox from './Textbox';
import Button from './Button';
import {SubmitHandler, useForm} from 'react-hook-form';
import {ChangePasswordFormValues} from '../types/accountManagementTypes';
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import {passwordChangeSchema} from '../validations/accountManagementValidations/ChangePasswordValidations';
import {useUpdatePasswordMutation} from '../app/slices/trackingFellowshipApiSlice';
import ErrorBox from './ErrorBox';

export interface ChangePasswordProps {

}

const ChangePassword = ({}: ChangePasswordProps) => {

    const {
        register: registerInput,
        handleSubmit,
        formState: {errors},
        reset: resetUpdatePasswordFields,
    } = useForm<ChangePasswordFormValues>({
        resolver: yupResolver(passwordChangeSchema),
    });

    const submitChangePassword: SubmitHandler<ChangePasswordFormValues> = async (changePasswordValues) => {
        await updatePassword({
            OldPassword: changePasswordValues.currentPassword,
            NewPassword: changePasswordValues.newPassword,
        });
        resetUpdatePasswordFields();
    };

    const [updatePassword, {
        isLoading: updatePasswordIsLoading,
        error: updatePasswordError,
    }] = useUpdatePasswordMutation();

    return (
        <form className={'w-full flex justify-center'} onSubmit={handleSubmit(submitChangePassword)}>
            <div className={'flex flex-col w-full max-w-[450px] space-y-5'}>
                <div className={'space-y-7'}>
                    <>
                        {updatePasswordError && (
                            <ErrorBox>
                                <>{updatePasswordError}</>
                            </ErrorBox>
                        )}
                        <Textbox type="password" label="Current Password" name="currentPassword"
                                 register={registerInput('currentPassword')}
                                 error={errors.currentPassword}></Textbox>
                        <div>
                            <Textbox type="password" label="New Password" name="newPassword"
                                     register={registerInput('newPassword')}
                                     error={errors.newPassword}></Textbox>
                            <Textbox type="password" label="Confirm New Password" name="newPasswordConfirm"
                                     register={registerInput('newPasswordConfirm')}
                                     error={errors.newPasswordConfirm}></Textbox>
                        </div>
                    </>
                </div>
                <div className={'flex justify-end items-center pb-2'}>
                    <Button type={'submit'}
                            className={'w-40 h-8 rounded-md bg-fellowship-gold-button text-[12px] sm:text-[16px] text-white font-extrabold hover:bg-fellowship-gold-button-hover'}
                            isLoading={updatePasswordIsLoading}>
                        Change password
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default ChangePassword;