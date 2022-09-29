import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';
import styles from './Modal.module.css';
const cx = classNames.bind(styles);

interface IModelProps {
    children: ReactNode;
}

const modalRoot = document.querySelector('#root') as HTMLElement;
const Modal = ({ children }: IModelProps) => {
    const el = useRef(document.createElement('div'));

    useEffect(() => {
        const current = el.current;
        modalRoot!.appendChild(current);
        return () => void modalRoot!.removeChild(current);
    }, []);

    return createPortal(
        <>
            <div className={cx('modal-overlay')}>
                <div className={cx('modal-box')}>{children}</div>
            </div>
        </>,
        el.current,
    );
};

export default Modal;
