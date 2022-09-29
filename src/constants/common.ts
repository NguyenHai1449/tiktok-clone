import { LoginOption } from '../types/interface';
import { HomeIcon } from '../components/Icons/icons';

export const loginOptions: LoginOption[] = [
    {
        text: 'Sử dụng mã QR',
        Icon: HomeIcon,
    },
    {
        text: 'Số điện thoại / Email / Tiktok ID',
        Icon: HomeIcon,
    },
    {
        text: 'Tiếp tục với Facebook',
        Icon: HomeIcon,
    },
    {
        text: 'Tiếp tục với Google',
        Icon: HomeIcon,
    },
    {
        text: 'Tiếp tục với Twitter',
        Icon: HomeIcon,
    },
    {
        text: 'Tiếp tục với Instagram',
        Icon: HomeIcon,
    },
];

export const registerOptions: LoginOption[] = [
    {
        text: 'Sử dụng số điện thoại hoặc email',
        Icon: HomeIcon,
    },
    {
        text: 'Tiếp tục với Facebook',
        Icon: HomeIcon,
    },
    {
        text: 'Tiếp tục với Google',
        Icon: HomeIcon,
    },
];
