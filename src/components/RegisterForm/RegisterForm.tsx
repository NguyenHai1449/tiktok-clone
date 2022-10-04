import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import Input from '../base-ui/Input/Input';
import Select from '../base-ui/Select/Select';
import DatePicker from '../base-ui/DatePicker/DatePicker';
import { ageOptions } from '../../constants/common';

export interface IOption {
    value: string;
    label: string;
}

export interface IFormValues {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    birthday: Date;
    password: string;
    confirmPassword: string;
    isAgree: boolean;
}

const schema = yup
    .object({
        firstName: yup.string().required('Please enter your first name'),
        lastName: yup.string().required('Please enter your last name'),
        email: yup.string().email().required('Please enter your email'),
        age: yup.number().required('Please enter your age'),

        password: yup
            .string()
            .required('Please enter your password')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                'Password must contain at least 8 characters, one uppercase, one number and one special case character',
            ),
        confirmPassword: yup
            .string()
            .required('Please confirm your password')
            .oneOf([yup.ref('password'), null], "Passwords don't match."),
        isAgree: yup.boolean().isTrue('Please agree to the terms and conditions'),
    })
    .required();

const RegisterForm = () => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormValues>({
        mode: 'all',
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: IFormValues) => {
        console.log(data);
    };

    return (
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6 md:grid-cols-2 mb-6">
                <div>
                    <Input
                        label="First Name"
                        field="firstName"
                        register={register}
                        errorMessage={errors.firstName?.message}
                    />
                </div>
                <div>
                    <Input
                        label="Last Name"
                        field="lastName"
                        register={register}
                        errorMessage={errors.lastName?.message}
                    />
                </div>
            </div>

            <div className="mb-6">
                <Input
                    label="Email"
                    field="email"
                    register={register}
                    errorMessage={errors.email?.message}
                />
            </div>

            <div className="mb-6">
                <Select
                    label="Age"
                    name="age"
                    control={control}
                    options={ageOptions}
                    errorMessage={errors.age?.message}
                />
            </div>

            <div className="mb-6">
                <DatePicker
                    label="Birthday"
                    name="birthday"
                    control={control}
                    errorMessage={errors.birthday?.message}
                />
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-6">
                <div>
                    <Input
                        label="Password"
                        field="password"
                        register={register}
                        errorMessage={errors.password?.message}
                    />
                </div>
                <div>
                    <Input
                        label="Confirm Password"
                        field="confirmPassword"
                        register={register}
                        errorMessage={errors.confirmPassword?.message}
                    />
                </div>
            </div>

            <div className="mb-6">
                <div>
                    <input id="remember" type="checkbox" {...register('isAgree')}></input>
                    <label htmlFor="remember" className="ml-2 text-md font-medium text-gray-900">
                        I agree to the{' '}
                        <span className="text-blue-600 hover:underline">Terms and Conditions</span>.
                    </label>
                </div>
                <span className="text-red-100">{errors.isAgree?.message}</span>
            </div>

            <input
                className="text-white bg-blue-700 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center"
                type="submit"
                value="Register"
            />
        </form>
    );
};

export default RegisterForm;
