import React from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { HomeIcon, MoreIcon } from '../Icons/icons';
import styles from './SeeMore.module.css';
import 'tippy.js/dist/tippy.css'; // optional

const cx = classNames.bind(styles);

const SeeMore: React.FC = () => {
    return (
        <Tippy
            content={
                <ul className={cx('wrapper')}>
                    <li className={cx('item')}>
                        <HomeIcon />
                        <span>English</span>
                    </li>
                    <li className={cx('item')}>
                        <HomeIcon />
                        <span>Feedback and help</span>
                    </li>
                    <li className={cx('item')}>
                        <HomeIcon />
                        <span>Keyboard shortcuts</span>
                    </li>
                </ul>
            }
        >
            <button className="flex items-center">
                <MoreIcon />
            </button>
        </Tippy>
    );
};

export default SeeMore;
