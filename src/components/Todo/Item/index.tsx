import React from 'react';
import { Job } from '../../../types/interface';

interface ItemProps {
    index: number;
    item: Job;
}
const ToDoItem: React.FC<ItemProps> = ({ index, item }) => {
    return (
        <div>
            <a
                href="#"
                className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    #{index}. {item.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
            </a>
        </div>
    );
};

export default ToDoItem;
