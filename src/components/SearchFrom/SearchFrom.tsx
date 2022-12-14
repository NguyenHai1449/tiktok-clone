import React from 'react';
import { SearchIcon } from '../Icons/icons';
const SearchFrom: React.FC = () => {
    return (
        <form className="flex items-center gap-4 rounded-full bg-gray-900 bg-opacity-5 text-black px-4">
            <input
                className="bg-transparent outline-none placeholder:text-black placeholder:text-sm py-3"
                type="text"
                placeholder="Tìm kiếm tài khoản và video"
            />
            <span className="inline-block w-[1px] h-8 bg-black bg-opacity-5"></span>
            <SearchIcon />
        </form>
    );
};

export default SearchFrom;
