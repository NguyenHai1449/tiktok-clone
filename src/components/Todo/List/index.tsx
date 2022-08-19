interface ToDoListProps {
    jobs: string[];
}

const ToDoList = ({ jobs }: ToDoListProps) => {
    return (
        <>
            {jobs && jobs.length ? (
                <ul className="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 divide-y">
                    {jobs.map((job, index) => (
                        <li key={index} className="py-2 px-4 w-full">
                            {job}
                        </li>
                    ))}
                </ul>
            ) : null}
        </>
    );
};

export default ToDoList;
