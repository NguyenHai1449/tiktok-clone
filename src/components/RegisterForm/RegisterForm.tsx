import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IoMdArrowDropdown } from 'react-icons/io';
import * as yup from 'yup';

enum GenderEnum {
    female = 'female',
    male = 'male',
    other = 'other',
}

interface IFormInput {
    month: string;
    day: string;
    year: GenderEnum;
    age: number;
    remember: boolean;
}

const schema = yup
    .object({
        firstName: yup.string().min(12, 'Từ 12 ký tự').max(15, 'max 15'),
        LastName: yup.string().required('Vui lòng nhập last name'),
        gender: yup.string().required('Vui lòng chọn gender'),
        age: yup.number().required('Vui lòng chọn'),
        remember: yup.boolean().oneOf([true], 'Chọn check box'),
    })
    .required();

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: IFormInput) => {
        console.log(data);
    };

    return (
        <form className=" w-full" onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <div className="my-5">
                <span>Ngày sinh của bạn là ngày nào?</span>
                <div className="flex items-center justify-between">
                    <div className="select-container">
                        <div className="w-[12rem] flex items-center justify-between px-5 py-2.5 border border-gray-200">
                            <span>Tháng</span>
                            <IoMdArrowDropdown />
                        </div>
                    </div>
                    <div className="select-container">
                        <div className="w-[12rem] flex items-center justify-between px-5 py-2.5 border border-gray-200">
                            <span>Ngày</span>
                            <IoMdArrowDropdown />
                        </div>
                    </div>
                    <div className="select-container">
                        <div className="w-[12rem] flex items-center justify-between px-5 py-2.5 border border-gray-200">
                            <span>Năm</span>
                            <IoMdArrowDropdown />
                        </div>
                    </div>
                </div>
                <span>Ngày sinh của bạn sẽ không được hiển thị công khai</span>
            </div>

            <div className="my-5">
                <div>
                    <input id="remember" type="checkbox" {...register('remember')}></input>
                    <label htmlFor="remember" className="ml-2 text-md font-medium text-gray-900">
                        I agree with the{' '}
                        <span className="text-blue-600 hover:underline">terms and conditions</span>.
                    </label>
                </div>

                <span className="text-red-100">{errors.remember?.message}</span>
            </div>

            <input
                className="text-white bg-blue-700 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center cursor-pointer"
                type="submit"
                value="Tiếp"
            />
        </form>
    );
};

export default RegisterForm;
