import { useState, useCallback } from 'react';
import { Jobs } from '../../data/dummyJobs';
import { Job } from '../../types/interface';
import ToDoAdd from './Add';
import ToDoList from './List';

const ToDo = () => {
    const [jobs, setJobs] = useState<Job[]>(Jobs);

    const handleAddJob = useCallback((job: Job) => {
        setJobs(prevJobs => [...prevJobs, job]);
    }, []);

    return (
        <>
            <h1 className="text-3xl">To do app</h1>
            <div className="mt-10">
                <ToDoAdd onAddJob={handleAddJob} />
            </div>

            <div className="mt-20">
                <ToDoList jobs={jobs} />
            </div>
        </>
    );
};
export default ToDo;
