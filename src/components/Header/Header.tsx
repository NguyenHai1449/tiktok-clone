import React from 'react';
import classNames from 'classnames/bind';

import SearchFrom from '../SearchFrom/SearchFrom';
import logo from '../../assets/img/tiktok-logo.png';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import styles from './Header.module.css';
import { PlusIcon } from '../Icons/icons';
const cx = classNames.bind(styles);

const Header: React.FC = () => {
    //props
    const props = { id: 'button1' };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className="flex items-center justify-between space-x-10 py-5">
                    <div className="flex items-center gap-10">
                        <img width={100} height={40} src={logo} alt="" />
                    </div>
                    <SearchFrom />
                    <div className="flex gap-10">
                        <Button
                            Icon={PlusIcon}
                            text="Tải lên"
                            className="border py-2.5 px-5 rounded-md"
                        />
                        <Button
                            {...props}
                            text="Đăng nhập"
                            className="border py-2.5 px-5 bg-red-200 text-white rounded-md"
                        />

                        <Dropdown />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
