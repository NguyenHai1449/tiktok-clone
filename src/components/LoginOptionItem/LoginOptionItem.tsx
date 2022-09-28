interface LoginOptionProps {
    Icon: any;
    text: string;
}

const LoginOption = ({ text, Icon }: LoginOptionProps) => {
    return (
        <div className="border h-16 relative flex items-center justify-center px-4">
            <div className="absolute left-4">{Icon && <Icon />}</div>
            {text}
        </div>
    );
};

export default LoginOption;
