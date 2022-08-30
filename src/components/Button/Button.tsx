import React from 'react';
import classNames from 'classnames';

interface Props {
    text: string;
    type?: 'button' | 'submit';
    Icon?: any;
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<Props> = ({ type = 'button', text, className, Icon, ...props }) => {
    return (
        <>
            <button
                {...props}
                type={type}
                className={classNames('flex items-center gap-3', className)}
            >
                {Icon && <Icon />}
                <span>{text}</span>
            </button>
        </>
    );
};

export default Button;
