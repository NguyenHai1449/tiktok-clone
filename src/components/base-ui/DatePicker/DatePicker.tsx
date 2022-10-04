import { Path, Controller, Control } from 'react-hook-form';
import { IFormValues } from '../../RegisterForm/RegisterForm';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
    label: string;
    name: Path<IFormValues>;
    control: Control<IFormValues, any>;
    className?: string;
    placeholder?: string;
    errorMessage?: string;
}

const DatePicker = ({ name, label, control, errorMessage, className }: DatePickerProps) => {
    return (
        <div className={className}>
            <label htmlFor={name}>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field: { value, ...fieldProps } }) => {
                    return (
                        <ReactDatePicker
                            id={name}
                            {...fieldProps}
                            selected={value as Date}
                            placeholderText="Select date"
                            className="border w-full border-gray-200 p-2.5"
                        />
                    );
                }}
            />
            <span className="text-red-100">{errorMessage}</span>
        </div>
    );
};

export default DatePicker;
