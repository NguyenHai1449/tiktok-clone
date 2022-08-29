import React from 'react';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.css';
import { CheckIcon } from '../Icons/icons';
const cx = classNames.bind(styles);
interface Props {
    src: string;
    nickname: string;
    name: string;
}
const AccountItem: React.FC<Props> = ({ src, nickname, name }) => {
    return (
        <div className={cx('account-item')}>
            <div className={cx('avatar')}>
                <img src={src} alt="" />
            </div>
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>{nickname}</strong>
                    <CheckIcon />
                </p>
                <p className={cx('name')}>{name}</p>
            </div>
        </div>
    );
};

export default AccountItem;
