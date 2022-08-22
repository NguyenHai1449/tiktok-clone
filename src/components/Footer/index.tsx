import React from 'react';

import gov from '../../assets/img/bo-cong-thuong.png';
import { publicRoutes } from '../../routes';
import { infos, policys } from './dummy';
const Footer = () => {
    return (
        <footer className="p-4 bg-gray text-white sm:p-6 dark:bg-gray-900">
            <div className="container mx-auto">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="" className="flex items-center">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                ShopDunk
                            </span>
                        </a>
                    </div>
                    <div className="grid grid-cols-4 gap-8">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">
                                Sản phẩm
                            </h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                {publicRoutes.map((link, index) => {
                                    return <li key={index}>{link.name}</li>;
                                })}
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">
                                Thông tin
                            </h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                {infos.map((info, index) => {
                                    return (
                                        <li key={index}>
                                            <a href="" className="hover:underline">
                                                {info.name}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">
                                Chính sách
                            </h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                {policys.map((policy, index) => {
                                    return (
                                        <li key={index}>
                                            <a href="" className="hover:underline">
                                                {policy.name}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">
                                Địa chỉ
                            </h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li>
                                    <a href="" className="hover:underline">
                                        Tìm Store trên Google Map
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="" className="hover:underline">
                                        Hệ thống cửa hàng
                                    </a>
                                </li>
                            </ul>

                            <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">
                                Liên hệ
                            </h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li>Mua hàng: 0900.900.900</li>
                                <li>Khiếu nại: 0900.900.900</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2022 HenryNguyen. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <img src={gov} alt="" width={120} height={40} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
