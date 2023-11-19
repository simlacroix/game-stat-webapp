import React from 'react';
import WhiteRingNoBackgroundSvg from '../assets/logo/web/svg/button-loading-white-ring-no-background.svg';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    isLoading?: boolean;
}

const Button = ({isLoading, ...rest}: ButtonProps) => {
    return (
        <button {...rest}>
            {isLoading ? (
                <>
                    <img className={'w-full h-3/4 spinning-logo'} src={WhiteRingNoBackgroundSvg}/>
                </>
            ) : (
                <>
                    {rest.children}
                </>
            )}
        </button>
    );
};

export default Button;