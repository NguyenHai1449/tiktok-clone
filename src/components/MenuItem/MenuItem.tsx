import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './MenuItem.module.css';
const cx = classNames.bind(styles);

interface ICons {
    icon: React.ReactNode;
    activeIcon: React.ReactNode;
}
interface Props {
    title: string;
    to: string;
    icons: ICons;
}
const MenuItem: React.FC<Props> = ({ title, to, icons }) => {
    const handleActive = (nav: { isActive: boolean }) => {
        return cx('menu-item', { active: nav.isActive });
    };

    return (
        <NavLink className={nav => handleActive(nav)} to={to}>
            <span className={cx('icon')}>{icons.icon}</span>
            <span className={cx('active-icon')}>{icons.activeIcon}</span>
            <span className="ml-3">{title}</span>
        </NavLink>
    );
};

export default MenuItem;
