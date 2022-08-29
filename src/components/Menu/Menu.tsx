import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { HomeIcon, UsersIcon, LiveIcon } from '../Icons/icons';
const Menu: React.FC = () => {
    return (
        <nav className="py-8 pl-3">
            <MenuItem title="For You" icon={<HomeIcon />} to="/" />
            <MenuItem title="Following" icon={<UsersIcon />} to="following" />
            <MenuItem title="LIVE" icon={<LiveIcon />} to="live" />
        </nav>
    );
};

export default Menu;
