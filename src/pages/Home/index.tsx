import React from 'react';
import ToDo from '../../components/Todo';

const Home = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl uppercase">Home page</h1>
            <ToDo />
        </div>
    );
};

export default Home;
