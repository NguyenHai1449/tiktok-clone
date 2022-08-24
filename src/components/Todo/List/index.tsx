import { Job } from '../../../types/interface';
import ToDoItem from '../Item';
import styles from './index.module.css';

interface ToDoListProps {
    jobs: Job[];
}

const ToDoList = ({ jobs }: ToDoListProps) => {
    return (
        <>
            {jobs && jobs.length ? (
                <div
                    className={`w-full text-sm font-medium text-gray-900 bg-white rounded-lg space-y-5 overflow-y-auto h-[500px] ${styles.scrollbar}`}
                >
                    {jobs.map((job, index) => (
                        <ToDoItem key={index} index={index} item={job} />
                    ))}
                </div>
            ) : null}
        </>
    );
};

export default ToDoList;
