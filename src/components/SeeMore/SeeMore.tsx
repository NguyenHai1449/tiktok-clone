import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { HomeIcon, MoreIcon } from '../Icons/icons';
import styles from './SeeMore.module.css';
import 'tippy.js/dist/tippy.css'; // optional
import Popper from '../Popper/Popper';

const cx = classNames.bind(styles);

const SeeMore: React.FC = () => {
    const [visibleTippy, setVisibleTippy] = useState<boolean>(false);

    return (
        <Tippy
            interactive
            visible={visibleTippy}
            render={attrs => (
                <div className={cx('see-more')} tabIndex={-1} {...attrs}>
                    <Popper>
                        <div>
                            <div className={cx('item')}>
                                <HomeIcon />
                                <span>English</span>
                            </div>
                            <div className={cx('item')}>
                                <HomeIcon />
                                <span>Feedback and help</span>
                            </div>
                            <div className={cx('item')}>
                                <HomeIcon />
                                <span>Keyboard shortcuts</span>
                            </div>
                        </div>
                    </Popper>
                </div>
            )}
        >
            <button className="flex items-center" onClick={() => setVisibleTippy(!visibleTippy)}>
                <MoreIcon />
            </button>
        </Tippy>
    );
};

export default SeeMore;
