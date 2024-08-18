import React from 'react';
import { Input } from '../ui/input';

const SearchBar = () => {
  return (
    <div className='flex items-center'>
      <Input
        placeholder='Search your favorite Event...' 
        className='border-[1px] border-slate-300 rounded-md w-full h-10'
      />
    </div>
  );
};

export default SearchBar;