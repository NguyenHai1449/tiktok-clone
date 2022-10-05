import React, { useState } from 'react';
import classNames from 'classnames/bind';
import SearchFrom from '../SearchFrom/SearchFrom';
import logo from '../../assets/img/tiktok-logo.png';
import Button from '../Base-ui/Button/Button';
import SeeMore from '../SeeMore/SeeMore';
import styles from './Header.module.css';
import Modal from '../Modal/Modal';
import { PlusIcon } from '../Icons/icons';
import { loginOptions, registerOptions } from '../../constants/common';
import LoginOptions from '../LoginOptions/LoginOptions';
import RegisterOptions from '../RegisterOptions/RegisterOptions';
import RegisterForm from '../RegisterForm/RegisterForm';
const cx = classNames.bind(styles);

const Header: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalHook, setShowModalHook] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    const handleAuthenticated = () => {
        setIsLogin(true);
        setShowModal(true);
    };

    const handleAuthenticated1 = () => {
        setShowModalHook(true);
    };

    //props button
    const props = { id: 'button1', onClick: handleAuthenticated };
    const props1 = { id: 'button2', onClick: handleAuthenticated1 };

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

                        <Button
                            {...props1}
                            text="Test Hook form"
                            className="border py-2.5 px-5 bg-gray-200 rounded-md"
                        />

                        {showModalHook && (
                            <Modal>
                                <div className="modal-header flex items-center justify-end pt-4 pr-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowModalHook(false)}
                                        className="w-14 h-14 text-warmGray-800 bg-warmGray-300 text-2xl rounded-full"
                                    >
                                        &times;
                                    </button>
                                </div>

                                <div className="modal-body px-5">
                                    <div className="flex items-center justify-center text-3xl py-7 font-bold">
                                        Đăng ký
                                    </div>
                                    <div className="w-[38rem] m-auto space-y-4">
                                        <RegisterForm></RegisterForm>
                                    </div>
                                </div>
                            </Modal>
                        )}

                        {showModal && (
                            <Modal>
                                {
                                    <>
                                        <div className="modal-header flex items-center justify-end pt-4 pr-4">
                                            <button
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                                className="w-14 h-14 text-warmGray-800 bg-warmGray-300 text-2xl rounded-full"
                                            >
                                                &times;
                                            </button>
                                        </div>

                                        <div className="modal-body">
                                            {isLogin ? (
                                                <LoginOptions
                                                    onClick={() => setIsLogin(false)}
                                                    options={loginOptions}
                                                />
                                            ) : (
                                                <RegisterOptions
                                                    onClick={() => setIsLogin(true)}
                                                    options={registerOptions}
                                                />
                                            )}
                                        </div>
                                    </>
                                }
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
