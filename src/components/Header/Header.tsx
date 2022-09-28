import React, { useState } from 'react';
import classNames from 'classnames/bind';

import SearchFrom from '../SearchFrom/SearchFrom';
import logo from '../../assets/img/tiktok-logo.png';
import Button from '../Button/Button';
import SeeMore from '../SeeMore/SeeMore';
import styles from './Header.module.css';
import { PlusIcon } from '../Icons/icons';
import Modal from '../Modal/Modal';
const cx = classNames.bind(styles);

const Header: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
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
                                <div
                                    style={{
                                        height: '200px',
                                        width: '200px',
                                        background: 'rgba(0,0,0,0.1)',
                                        zIndex: 999,
                                    }}
                                >
                                    I'm a modal!{' '}
                                    <button
                                        style={{ background: 'papyawhip' }}
                                        onClick={() => setShowModal(false)}
                                    >
                                        close
                                    </button>
                                </div>
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
