import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './MenuItem.module.css';
const cx = classNames.bind(styles);
interface Props {
    title: string;
    to: string;
    icon: React.ReactNode;
}
const MenuItem: React.FC<Props> = ({ title, to, icon }) => {
    return (
        <NavLink className={nav => cx('menu-item', { active: nav.isActive })} to={to}>
            {icon}
            <span className="ml-3">{title}</span>
        </NavLink>
    );
};

export default MenuItem;
