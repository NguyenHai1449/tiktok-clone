import React from 'react';
import { AiFillHome, AiOutlineUsergroupAdd, AiOutlineVideoCamera } from 'react-icons/ai';
import MenuItem from '../MenuItem/MenuItem';

const Menu: React.FC = () => {
    return (
        <nav>
            <MenuItem title="For You" Icon={AiFillHome} to="foryou" />
            <MenuItem title="Following" Icon={AiOutlineUsergroupAdd} to="following" />
            <MenuItem title="LIVE" Icon={AiOutlineVideoCamera} to="live" />
        </nav>
    );
};

export default Menu;
