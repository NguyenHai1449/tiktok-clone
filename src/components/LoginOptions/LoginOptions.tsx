import LoginOptionItem from '../LoginOptionItem/LoginOptionItem';
import { HomeIcon } from '../Icons/icons';

const LoginOptions = () => {
    return (
        <div>
            <div className="space-y-4 ">
                <LoginOptionItem Icon={HomeIcon} text="Sử dụng mã QR"></LoginOptionItem>
                <LoginOptionItem
                    Icon={HomeIcon}
                    text="Số điện thoại / Email / Tiktok ID"
                ></LoginOptionItem>
                <LoginOptionItem Icon={HomeIcon} text="Tiếp tục với Facebook"></LoginOptionItem>
                <LoginOptionItem Icon={HomeIcon} text="Tiếp tục với Google"></LoginOptionItem>
                <LoginOptionItem Icon={HomeIcon} text="Tiếp tục với Twitter"></LoginOptionItem>
                <LoginOptionItem Icon={HomeIcon} text="Tiếp tục với Instagram"></LoginOptionItem>
            </div>
        </div>
    );
};

export default LoginOptions;
