import React from 'react';
import LoadingComponentWhiteRingNoBackgroundSvg
    from '../assets/logo/web/svg/loading-component-white-ring-no-background.svg';

export interface LoadingProps {

}

const Loading = ({}: LoadingProps) => {
    return (
        <div className={'flex justify-center items-center p-10'}>
            <img className={'w-36 h-36 spinning-logo'} src={LoadingComponentWhiteRingNoBackgroundSvg}/>
        </div>
    );
};

export default Loading;