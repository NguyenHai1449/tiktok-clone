import React from 'react';
import classNames from 'classnames/bind';

import styles from './SideBar.module.css';
import Menu from '../Menu/Menu';
import SuggestedAccounts from '../SuggestedAccounts/SuggestedAccounts';
const cx = classNames.bind(styles);
const SideBar: React.FC = () => {
    return (
        <aside className={cx('wrapper')}>
            <Menu />
            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
};

export default SideBar;
