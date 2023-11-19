import {BaseQueryArg, BaseQueryError, BaseQueryMeta} from '@reduxjs/toolkit/dist/query/baseQueryTypes';

const ErrorResolver = (response: BaseQueryError<any>, meta: BaseQueryMeta<any>, arg: BaseQueryArg<any>) => {

    if (response.status === 'FETCH_ERROR') {
        return 'Couldn\'t complete the request. Try again later.';
    } else if (response.originalStatus === 500) {
        return 'Something went wrong. Please try again later.';
    } else if (response.data) {
        return response.data;
    }

    return 'Something went wrong. Please try again later.';
};

export default ErrorResolver;