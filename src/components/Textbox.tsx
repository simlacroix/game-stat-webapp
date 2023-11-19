import React from 'react';
import {FieldError, UseFormRegisterReturn} from 'react-hook-form';

export interface TextboxProps {
    label?: string;
    name?: string;
    type: string;
    value?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
    placeHolder?: string;
    register?: UseFormRegisterReturn<string>;
    error?: FieldError;
    defaultValue?: string;
}

const Textbox = ({label, name, type, value, setValue, placeHolder, register, error, defaultValue}: TextboxProps) => {
    return (
        <div className="flex flex-col">
            {label &&
                <label
                    className={'text-[#CBB26AFF] font-extrabold text-left text-[12px] sm:text-[20px] mt-[10px]'}>{label}</label>}
            <input
                defaultValue={defaultValue}
                type={type}
                name={name}
                value={value}
                onChange={(e) => {
                    if (setValue) {
                        setValue(e.target.value);
                    }
                }}
                className={`rounded-sm bg-[#D9D9D9FF] text-[12px] sm:text-[16px] h-5 sm:h-9 pl-2 focus:outline-none focus:ring-[#CBB26AFF] focus:ring-2 ${error ? 'ring-red-400 ring-2' : ''}`}
                placeholder={placeHolder}
                {...register}/>
            {error && <span className={'text-left text-red-400'}>{error.message}</span>}
        </div>
    );
};

export default Textbox;