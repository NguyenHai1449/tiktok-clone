import React, { useState } from 'react';
import classNames from 'classnames/bind';

import SearchFrom from '../SearchFrom/SearchFrom';
import logo from '../../assets/img/tiktok-logo.png';
import Button from '../Button/Button';
import SeeMore from '../SeeMore/SeeMore';
import styles from './Header.module.css';
import { PlusIcon } from '../Icons/icons';
import Modal from '../Modal/Modal';
import LoginOptions from '../LoginOptions/LoginOptions';
const cx = classNames.bind(styles);

const Header: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    const handleShowModal = () => {
        setIsLogin(true);
        setShowModal(true);
    };
    //props
    const props = { id: 'button1', onClick: handleShowModal };

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

                        {showModal && (
                            <Modal>
                                {isLogin ? (
                                    <>
                                        <div className="flex items-center justify-end">
                                            <button
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                                className="w-12 h-12 text-warmGray-800 bg-warmGray-300 text-2xl rounded-full flex items-center justify-center"
                                            >
                                                &times;
                                            </button>
                                        </div>
                                        <div className="flex items-center justify-center text-3xl py-7 font-bold">
                                            Đăng nhập vào TikTok
                                        </div>

                                        <LoginOptions></LoginOptions>

                                        <div className="flex items-center justify-center">
                                            <h3>Bạn không có tài khoản? </h3>
                                            <span
                                                className="cursor-pointer text-red-200 hover:underline"
                                                onClick={() => setIsLogin(false)}
                                            >
                                                Đăng ký
                                            </span>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex items-center justify-end">
                                            <button
                                                onClick={() => setShowModal(false)}
                                                type="button"
                                                className="w-12 h-12 text-warmGray-800 bg-warmGray-300 text-2xl rounded-full flex items-center justify-center"
                                            >
                                                &times;
                                            </button>
                                        </div>
                                        <div className="flex items-center justify-center text-3xl py-7 font-bold">
                                            Đăng ký TikTok
                                        </div>

                                        <LoginOptions></LoginOptions>

                                        <div className="flex items-center justify-center">
                                            <h3>Bạn đã có tài khoản? </h3>
                                            <span
                                                className="cursor-pointer text-red-200 hover:underline"
                                                onClick={() => setIsLogin(true)}
                                            >
                                                Đăng nhập
                                            </span>
                                        </div>
                                    </>
                                )}
                            </Modal>
                        )}

                        <SeeMore />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
