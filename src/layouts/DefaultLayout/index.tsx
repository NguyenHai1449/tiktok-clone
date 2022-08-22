import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const DefaultLayout: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="main-content bg-white-800 dark:bg-gray-800 transition duration-100">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
