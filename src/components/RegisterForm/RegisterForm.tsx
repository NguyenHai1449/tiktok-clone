import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface IFormInput {
    firstName: string;
    LastName: string;
    email: string;
    birthday: Date;
    password: string;
    confirmPassword: string;
    isAgree: boolean;
}

const schema = yup
    .object({
        firstName: yup.string().required('First name is a required field'),
        LastName: yup.string().required('Last name is a required field'),
        email: yup.string().required('Email is a required field'),
        password: yup.string().required('Password is a required field'),
        confirmPassword: yup.string().required('Confirm password is a required field'),
    })
    .required();

const RegisterForm = () => {
    const {
        register,
        control,
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
            <div className="grid gap-6 md:grid-cols-2 mb-6">
                <div>
                    <label htmlFor="first_name">First Name</label>
                    <input
                        id="first_name"
                        autoComplete="off"
                        className="h-14 block w-full border border-gray-200"
                        {...register('firstName')}
                    />
                    <span className="text-red-100">{errors.firstName?.message}</span>
                </div>
                <div>
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        id="last_name"
                        autoComplete="off"
                        className="h-14 block w-full border border-gray-200"
                        {...register('LastName')}
                    />
                    <span className="text-red-100">{errors.LastName?.message}</span>
                </div>
            </div>

            <div className="mb-6">
                <label htmlFor="email">Your email</label>
                <input
                    id="email"
                    autoComplete="off"
                    className="h-14 block w-full border border-gray-200"
                    {...register('email')}
                />
                <span className="text-red-100">{errors.email?.message}</span>
            </div>

            <div className="mb-6">
                <label htmlFor="birthday">Birthday</label>
                <Controller
                    name="birthday"
                    control={control}
                    render={({ field: { value, ...fieldProps } }) => (
                        <ReactDatePicker
                            {...fieldProps}
                            placeholderText="Select date"
                            selected={value}
                            autoComplete="off"
                            className="h-14 block w-full border border-gray-200"
                        />
                    )}
                />

                <span className="text-red-100">{errors.birthday?.message}</span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-6">
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        autoComplete="off"
                        className="h-14 block w-full border border-gray-200"
                        {...register('password')}
                    />
                    <span className="text-red-100">{errors.password?.message}</span>
                </div>
                <div>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        id="confirm-password"
                        autoComplete="off"
                        className="h-14 block w-full border border-gray-200"
                        {...register('confirmPassword')}
                    />
                    <span className="text-red-100">{errors.confirmPassword?.message}</span>
                </div>
            </div>

            <div className="mb-6">
                <div>
                    <input
                        id="remember"
                        type="checkbox"
                        {...register('isAgree', { required: true })}
                    ></input>
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
