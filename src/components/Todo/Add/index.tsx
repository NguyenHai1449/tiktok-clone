import React, { memo, useRef, useState } from 'react';
import { Job } from '../../../types/interface';

interface ToDoAddProps {
    onAddJob: (job: Job) => void;
}

const initJob: Job = {
    title: '',
    description: '',
};

const ToDoAdd = ({ onAddJob }: ToDoAddProps) => {
    const [job, setJob] = useState<Job>(initJob);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJob(prev => ({
            ...prev,
            title: e.target.value,
        }));
    };

    const handleChangeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJob(prev => ({
            ...prev,
            description: e.target.value,
        }));
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (job.title && job.description) {
            onAddJob(job);
            setJob(initJob);
            inputRef.current?.focus();
        }
    };

    return (
        <>
            <form onSubmit={onSubmit} autoComplete="off">
                <div className="mb-5">
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
                        value={job.title}
                        onChange={handleChangeTitle}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tên công việc"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="job"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Mô tả
                    </label>
                    <input
                        type="text"
                        id="job"
                        value={job.description}
                        onChange={handleChangeDesc}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Mô tả"
                    />
                </div>

                <button
                    type="submit"
                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 focus:outline-none dark:focus:ring-blue-800"
                >
                    Thêm công việc
                </button>
            </form>
        </>
    );
};

export default memo(ToDoAdd);
