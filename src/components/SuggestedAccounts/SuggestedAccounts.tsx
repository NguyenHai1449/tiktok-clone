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
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1664334000&x-signature=yZyFg0VycBpnT3usChRnNkvcKvs%3D"
            />
            <AccountItem
                name="Tiin.vn"
                nickname="tiin.vn"
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1664334000&x-signature=yZyFg0VycBpnT3usChRnNkvcKvs%3D"
            />
            <AccountItem
                name="🔥Đạt Villa🔥"
                nickname="datvilla94"
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1664334000&x-signature=yZyFg0VycBpnT3usChRnNkvcKvs%3D"
            />

            <p className={cx('more-btn')}>See All</p>
        </div>
    );
};

export default SuggestedAccounts;
