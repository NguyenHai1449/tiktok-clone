import React, { memo, useRef, useState } from 'react';

interface ToDoAddProps {
    onAddJob: (job: string) => void;
}

const ToDoAdd = ({ onAddJob }: ToDoAddProps) => {
    const [job, setJob] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJob(e.target.value);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (job) {
            onAddJob(job);
            setJob('');
            inputRef.current?.focus();
        }
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <label
                    htmlFor="job"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Tên công việc
                </label>
                <input
                    type="text"
                    id="job"
                    ref={inputRef}
                    value={job}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Tên công việc"
                />

                <button
                    type="submit"
                    className="mt-6 text-white bg-blue-700 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center"
                >
                    Thêm công việc
                </button>
            </form>
        </>
    );
};

export default memo(ToDoAdd);
