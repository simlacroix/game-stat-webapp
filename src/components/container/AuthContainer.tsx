import React from 'react';
import GradientBorderContainer from "../container/GradientBorderContainer";
import ColorLogoNoBackgroundSvg from "../../assets/logo/web/svg/color-logo-no-background.svg";

export interface AuthContainerProps {
    children?: React.ReactNode;
}

const AuthContainer = ({children}: AuthContainerProps) => {
    return (
        <div className={"w-full h-full flex"}>
            <div className={"h-fit p-2 m-auto w-full max-w-[570px]"}>
                <GradientBorderContainer>
                    <div className={"flex flex-col w-full"}>
                        <div className={"flex justify-center items-start"}>
                            <img className={"max-w-64 max-h-64"} src={ColorLogoNoBackgroundSvg}/>
                        </div>
                        <div>
                            {children}
                        </div>
                    </div>
                </GradientBorderContainer>
            </div>

        </div>
    );
}

export default AuthContainer;