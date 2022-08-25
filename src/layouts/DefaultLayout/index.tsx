import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

const DefaultLayout: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="main-content bg-white-800 dark:bg-gray-800 transition duration-100">
                <Outlet />
            </main>
        </div>
    );
};

export default DefaultLayout;
