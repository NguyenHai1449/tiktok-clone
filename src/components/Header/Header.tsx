import React from 'react';
import SearchInput from './SearchInput/SearchInput';
import { AiOutlinePlus } from 'react-icons/ai';
import logo from '../../assets/img/tiktok-logo.png';
import Button from '../Button/Button';

const Header: React.FC = () => {
    return (
        <div className="border-b">
            <div className="container mx-auto">
                <div className="flex items-center justify-between space-x-10 py-5">
                    <div className="flex items-center gap-10">
                        <img width={100} height={40} src={logo} alt="" />
                    </div>
                    <SearchInput />
                    <div className="flex gap-10">
                        <Button label="Tải lên" className="border py-2.5 px-5" />
                        <Button
                            label="Đăng nhập"
                            className="border py-2.5 px-5 bg-red-200 text-white rounded-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;