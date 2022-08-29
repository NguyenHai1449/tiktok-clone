import React from 'react';

import MenuItem from '../MenuItem/MenuItem';
import {
    HomeIcon,
    UsersIcon,
    LiveIcon,
    HomeActiveIcon,
    LiveActiveIcon,
    UsersActiveIcon,
} from '../Icons/icons';
const Menu: React.FC = () => {
    return (
        <nav className="py-8">
            <MenuItem
                title="For You"
                icons={{ icon: <HomeIcon />, activeIcon: <HomeActiveIcon /> }}
                to="/"
            />
            <MenuItem
                title="Following"
                icons={{ icon: <UsersIcon />, activeIcon: <UsersActiveIcon /> }}
                to="following"
            />
            <MenuItem
                title="LIVE"
                icons={{ icon: <LiveIcon />, activeIcon: <LiveActiveIcon /> }}
                to="live"
            />
        </nav>
    );
};

export default Menu;
