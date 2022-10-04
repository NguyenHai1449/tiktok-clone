import { LoginOption } from '../types/interface';
import { HomeIcon } from '../components/Icons/icons';
import { IOption } from '../components/RegisterForm/RegisterForm';

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

export const ageOptions: IOption[] = [
    { value: '18', label: '18' },
    { value: '25', label: '25' },
    { value: '30', label: '30' },
    { value: '40', label: '40' },
    { value: '50', label: '50' },
];
