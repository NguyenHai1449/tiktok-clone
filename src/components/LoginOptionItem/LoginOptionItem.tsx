import { LoginOption } from '../../types/interface';

const LoginOptionItem = ({ text, Icon }: LoginOption) => {
    return (
        <div className="cursor-pointer border border-gray-200 h-16 text-base relative flex items-center justify-center px-4">
            <div className="absolute left-4">{Icon && <Icon />}</div>
            {text}
        </div>
    );
};

export default LoginOptionItem;
