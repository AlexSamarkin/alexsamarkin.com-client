import React from 'react';

export interface InputProps {
    type: string;
    name: string;
    id: string;
    value?: string;
    placeholder: string;
    required: boolean;
    onChange: (e: React.ChangeEvent) => void;
    isError?: boolean;
}

export const Input: React.FC<InputProps> = ({ type, name, id, placeholder, required, value, onChange }) => {
    return type === 'textarea' ? (
        <textarea
            onChange={onChange}
            value={value}
            id={id}
            name={name}
            placeholder={placeholder}
            required={required}
            className={'textarea form-control'}
        />
    ) : (
        <input
            onChange={onChange}
            value={value}
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            required={required}
            className={'input input__icon form-control'}
        />
    );
};

export default Input;
