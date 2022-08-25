import React from 'react';
import { BsSearch } from 'react-icons/bs';
const SearchInput: React.FC = () => {
    return (
        <div className="flex items-center gap-4 rounded-full bg-gray-900 bg-opacity-5 text-black px-4">
            <input
                className="bg-transparent outline-none placeholder:text-black placeholder:text-sm py-3"
                type="text"
                placeholder="Tìm kiếm tài khoản và video"
            />
            <span className="inline-block w-[1px] h-8 bg-black bg-opacity-5"></span>
            <BsSearch />
        </div>
    );
};

export default SearchInput;
