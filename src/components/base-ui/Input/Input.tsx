import { HTMLInputTypeAttribute } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../../RegisterForm/RegisterForm';

interface InputProps {
    label: string;
    field: Path<IFormValues>;
    register: UseFormRegister<IFormValues>;
    placeholder?: string;
    errorMessage?: string;
    type?: HTMLInputTypeAttribute;
}

const Input = ({ field, label, placeholder, register, errorMessage, ...props }: InputProps) => {
    return (
        <>
            <label htmlFor={field}>{label}</label>
            <input
                id={field}
                {...props}
                autoComplete="off"
                placeholder={placeholder}
                {...register(field)}
                className="block w-full border border-gray-200 p-2.5"
            />
            <span className="text-red-100">{errorMessage}</span>
        </>
    );
};

export default Input;
