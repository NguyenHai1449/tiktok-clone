import React from 'react';
import { clsx } from 'clsx';

interface Props {
    label: string;
    type?: 'button' | 'submit';
    icon?: string;
    className?: string;
}

const Button: React.FC<Props> = ({ type = 'button', label, className, icon, ...props }) => {
    return (
        <>
            <button {...props} type={type} className={clsx('flex items-center gap-3', className)}>
                <span>{label}</span>
                <span></span>
            </button>
        </>
    );
};

export default Button;
