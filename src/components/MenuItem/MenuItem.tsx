import React from 'react';
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';
interface Props {
    title: string;
    to: string;
    Icon: IconType;
}
const MenuItem: React.FC<Props> = ({ title, to, Icon }) => {
    return (
        <NavLink className="flex items-center gap-3" to={to}>
            <Icon />
            <span>{title}</span>
        </NavLink>
    );
};

export default MenuItem;
