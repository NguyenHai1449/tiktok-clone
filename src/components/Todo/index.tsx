import { useState, useCallback } from 'react';
import ToDoAdd from './Add';
import ToDoList from './List';

const ToDo = () => {
    const [jobs, setJobs] = useState<string[]>([]);

    const handleAddJob = useCallback((job: string) => {
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
