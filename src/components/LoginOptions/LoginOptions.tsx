import LoginOptionItem from '../LoginOptionItem/LoginOptionItem';
import { LoginOption } from '../../types/interface';

interface IProps {
    options: LoginOption[];
    onClick: () => void;
}

const LoginOptions = ({ options, onClick }: IProps) => {
    return (
        <>
            <div className="flex items-center justify-center text-3xl py-7 font-bold">
                Đăng nhập vào TikTok
            </div>
            <div className="w-[36rem] m-auto space-y-4">
                {options &&
                    options.map((option, index) => (
                        <LoginOptionItem
                            key={index}
                            Icon={option.Icon}
                            text={option.text}
                        ></LoginOptionItem>
                    ))}
            </div>
            <div className="flex items-center justify-center mt-5 border-t border-gray-200">
                <h3>Bạn không có tài khoản? </h3>
                <span className="cursor-pointer text-red-200 hover:underline" onClick={onClick}>
                    Đăng ký
                </span>
            </div>
        </>
    );
};

export default LoginOptions;
