import React from 'react';
import styles from './SideBar.module.css';
import classNames from 'classnames/bind';
import Menu from '../Menu/Menu';
const cx = classNames.bind(styles);
const SideBar: React.FC = () => {
    return (
        <aside className={cx('wrapper')}>
            <Menu />
        </aside>
    );
};

export default SideBar;
