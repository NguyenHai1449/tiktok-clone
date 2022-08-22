import React from 'react';
import { Link } from 'react-router-dom';
import { publicRoutes } from '../../routes';

const Header: React.FC = () => {
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center space-x-10">
                <div className="w-auto logo">logo</div>
                <div className="w-auto  space-x-10">
                    {publicRoutes.map((link, index) => {
                        return (
                            <Link key={index} to={link.path}>
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
                <div className="w-auto search">Search</div>
                <div className="w-auto cart">Cart</div>
            </div>
        </div>
    );
};

export default Header;
