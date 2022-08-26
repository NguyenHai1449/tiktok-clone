import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './DefaultLayout.module.css';
import SideBar from '../../components/SideBar/SideBar';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const DefaultLayout: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <main className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DefaultLayout;
