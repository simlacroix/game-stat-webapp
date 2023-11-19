import React from 'react';
import Textbox from './Textbox';
import Button from './Button';
import {useFetchGamerTagsQuery, useUpdateGamerTagsMutation} from '../app/slices/trackingFellowshipApiSlice';
import {SubmitHandler, useFieldArray, useForm} from 'react-hook-form';
import {ChangeGamertagsFormValues} from '../types/accountManagementTypes';
import ErrorBox from './ErrorBox';
import Loading from './loading';
import {toast, ToastContainer} from 'react-toast';
import {useAppSelector} from '../app/hooks';

export interface ConnectedAccountsProps {

}

const ConnectedAccounts = ({}: ConnectedAccountsProps) => {
    const notifyUpdateGamertagsSuccess = () => toast.success('Gamertags updated successfully.');
    const gamertags = useAppSelector(state => state.auth.gamertags);
    const {
        isFetching: fetchingGamerTags,
        error: connectedAccountFetchError,
    } = useFetchGamerTagsQuery(null, {refetchOnMountOrArgChange: true});

    const [updateGamerTags, {
        isLoading: updateGamerTagsIsLoading,
        error: updateGamerTagsError,
    }] = useUpdateGamerTagsMutation();

    const {register, handleSubmit, control} = useForm<ChangeGamertagsFormValues>({
        values: {
            gamertagRequests: gamertags,
        },
        defaultValues: {
            gamertagRequests: gamertags,
        },
    });

    const {fields} = useFieldArray({
        name: 'gamertagRequests',
        control,
    });

    const submitUpdateGamerTags: SubmitHandler<ChangeGamertagsFormValues> = async (gamertagsFormValues) => {
        gamertagsFormValues.gamertagRequests = gamertagsFormValues.gamertagRequests.filter(gamertag => {
            return gamertags.some((oldGamerTag) => {
                return oldGamerTag.gamertagId === gamertag.gamertagId && oldGamerTag.tag !== gamertag.tag;
            });
        });

        if (gamertagsFormValues.gamertagRequests.length > 0) {
            await updateGamerTags(gamertagsFormValues).unwrap();
            notifyUpdateGamertagsSuccess();
        }
    };

    if (fetchingGamerTags) {
        return (<Loading/>);
    } else if (connectedAccountFetchError) {
        return (
            <div className={'w-full flex justify-center'}>
                <div className={'flex flex-col w-full max-w-[450px] space-y-5'}>
                    <div>
                        <ErrorBox>
                            <>{connectedAccountFetchError}</>
                        </ErrorBox>
                    </div>
                </div>
            </div>);

    } else {
        return (
            <>
                <ToastContainer position={'top-center'} delay={5000}/>
                <form className={'w-full flex justify-center'} onSubmit={handleSubmit(submitUpdateGamerTags)}>
                    <div className={'flex flex-col w-full max-w-[450px] space-y-5'}>
                        <div>
                            <>
                                {(updateGamerTagsError) && (
                                    <ErrorBox>
                                        <>{updateGamerTagsError}</>
                                    </ErrorBox>
                                )}
                                {fields.map((field, index) => (
                                    <section key={field.id}>
                                        <Textbox
                                            type={'text'}
                                            label={`Change ${field.gameName} Username`}
                                            register={register(`gamertagRequests.${index}.tag`)}/>
                                    </section>
                                ))}
                            </>
                        </div>
                        <div className={'flex justify-end items-center pb-2 pt-5'}>
                            <Button type={'submit'}
                                    className={'w-40 h-8 rounded-md bg-fellowship-gold-button text-[12px] sm:text-[16px] text-white font-extrabold hover:bg-fellowship-gold-button-hover'}
                                    isLoading={updateGamerTagsIsLoading}>
                                Submit Changes
                            </Button>
                        </div>
                    </div>
                </form>
            </>
        );
    }
};

export default ConnectedAccounts;