import React from 'react';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.css';
import AccountItem from '../AccountItem/AccountItem';
const cx = classNames.bind(styles);

interface Props {
    label: string;
}
const SuggestedAccounts: React.FC<Props> = ({ label }) => {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <AccountItem
                name="Theanh28 entertainment"
                nickname="theanh28entertainment"
                src="https://picsum.photos/200/300"
            />
            <AccountItem name="Tiin.vn" nickname="tiin.vn" src="https://picsum.photos/200/300" />
            <AccountItem
                name="🔥Đạt Villa🔥"
                nickname="datvilla94"
                src="https://picsum.photos/200/300"
            />

            <p className={cx('more-btn')}>See All</p>
        </div>
    );
};

export default SuggestedAccounts;
