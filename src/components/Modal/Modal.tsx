import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface IModelProps {
    children: ReactNode;
}
const modalRoot = document.querySelector('#modal-root') as HTMLElement;

const Modal = ({ children }: IModelProps) => {
    const el = useRef(document.createElement('div'));

    useEffect(() => {
        modalRoot!.appendChild(el.current);
        return () => void modalRoot!.removeChild(el.current);
    }, []);

    return createPortal(children, el.current);
};

export default Modal;
