import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.css';
const cx = classNames.bind(styles);

interface IPopperProp {
    children: ReactNode;
}
const Popper: React.FC<IPopperProp> = ({ children }) => {
    return <div className={cx('wrapper')}>{children}</div>;
};

export default Popper;
