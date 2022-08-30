import React from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { MoreIcon } from '../Icons/icons';
import styles from './Header.module.css';
const cx = classNames.bind(styles);

const SeeMore: React.FC = () => {
    return (
        <Tippy
            interactive
            visible
            render={attrs => (
                <div className={cx('more')} {...attrs}>
                    Content
                </div>
            )}
        >
            <button className="flex items-center">
                <MoreIcon />
            </button>
        </Tippy>
    );
};

export default SeeMore;
