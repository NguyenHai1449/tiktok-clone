import React from 'react';
import { clsx } from 'clsx';

interface Props {
    label: string;
    type?: 'button' | 'submit';
    className?: string;
}

const Button: React.FC<Props> = ({ type = 'button', label, className }) => {
    return (
        <>
            <button type={type} className={clsx('flex items-center gap-3', className)}>
                <span>{label}</span>
            </button>
        </>
    );
};

export default Button;
