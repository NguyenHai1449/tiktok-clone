import ReactSelect from 'react-select';
import { Path, Controller, Control } from 'react-hook-form';
import { IFormValues, IOption } from '../../RegisterForm/RegisterForm';

interface SelectProps {
    label: string;
    name: Path<IFormValues>;
    control: Control<IFormValues, any>;
    options: IOption[];
    placeholder?: string;
    errorMessage?: string;
}

const Select = ({ name, label, control, errorMessage, options }: SelectProps) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field: { value, ...fieldProps } }) => (
                    <ReactSelect {...fieldProps} id={name} isClearable options={options} />
                )}
            />
            <span className="text-red-100">{errorMessage}</span>
        </>
    );
};

export default Select;
