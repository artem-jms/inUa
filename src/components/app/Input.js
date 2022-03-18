import React from 'react';
import module from './module/input.module.css'
import classNames from "classnames";
const Input = ({placeholder, type, value, setValue, max, onChange, name, valid, className}) => {
    return (
        <input
            maxLength={max}
            value={value}
            onChange={(event) => {
                onChange(event.target.value, name)
                setValue(event.target.value)
            }}
            autoComplete={'off'}
            type={type}
            placeholder={placeholder}
            className={classNames(className, module.input, {[module.successful]: valid}, {[module.unValid]: valid === false})}
        />
    );
};

export default Input;