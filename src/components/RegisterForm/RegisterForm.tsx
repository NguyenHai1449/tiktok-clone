import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

enum GenderEnum {
    female = 'female',
    male = 'male',
    other = 'other',
}

interface IFormInput {
    firstName: string;
    LastName: string;
    gender: GenderEnum;
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
                <label htmlFor="first_name" className="mb-2 text-sm font-medium text-gray-900">
                    First Name
                </label>
                <input
                    id="first_name"
                    className="block w-full py-2 border rounded-md"
                    {...register('firstName')}
                />

                {/* errors will return when field validation fails  */}
                <span className="text-red-100">{errors.firstName?.message}</span>
            </div>

            <div className="my-5">
                <label htmlFor="last_name" className="mb-2 text-sm font-medium text-gray-900">
                    Last Name
                </label>
                <input
                    id="last_name"
                    className="block w-full py-2 border rounded-md"
                    {...register('LastName')}
                />

                {/* errors will return when field validation fails  */}
                <span className="text-red-100">{errors.LastName?.message}</span>
            </div>

            {/* include validation with required or other standard HTML validation rules */}
            <div className="my-5">
                <label htmlFor="gender">Gender</label>
                <select
                    id="gender"
                    className="block w-full py-3 border rounded-md"
                    {...register('gender')}
                >
                    <option value="female">{GenderEnum.female}</option>
                    <option value="male">{GenderEnum.male}</option>
                    <option value="other">{GenderEnum.other}</option>
                </select>

                {/* errors will return when field validation fails  */}
                <span className="text-red-100">{errors.gender?.message}</span>
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
