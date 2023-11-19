import React, {useRef} from 'react';
import Scrollbars from 'react-custom-scrollbars-2';

export interface CustomScrollBarProps {
    children?: React.ReactElement;
}

const CustomScrollBar = ({children}: CustomScrollBarProps) => {
    const shadowTopStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 10,
        background: 'linear-gradient(to bottom, rgba(161, 136, 68, 0.7) 0%, rgba(0, 0, 0, 0) 100%)',
    };
    const shadowBottomStyle: React.CSSProperties = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 10,
        background: 'linear-gradient(to top, rgba(161, 136, 68, 0.7) 0%, rgba(0, 0, 0, 0) 100%)',
    };

    const shadowTop = useRef<HTMLDivElement>(null);
    const shadowBottom = useRef<HTMLDivElement>(null);

    const handleUpdate = (values: any) => {
        const {scrollTop, scrollHeight, clientHeight} = values;
        const shadowTopOpacity = 1 / 70 * Math.min(scrollTop, 70);
        const bottomScrollTop = scrollHeight - clientHeight;
        const shadowBottomOpacity = 1 / 70 * (bottomScrollTop - Math.max(scrollTop, bottomScrollTop - 70));
        if (shadowTop && shadowTop.current) {
            shadowTop.current.style.opacity = shadowTopOpacity.toString();
        }
        if (shadowBottom && shadowBottom.current) {
            shadowBottom.current.style.opacity = shadowBottomOpacity.toString();

        }
    };

    return (
        <>
            <Scrollbars onUpdate={handleUpdate} renderThumbVertical={({style, ...props}) =>
                <div {...props} style={{...style}} className={'bg-fellowship-gold-button rounded-2xl'}/>
            }>
                {children}
            </Scrollbars>
            <div
                ref={shadowTop}
                style={shadowTopStyle}/>
            <div
                ref={shadowBottom}
                style={shadowBottomStyle}/>
        </>

    );
};

export default CustomScrollBar;