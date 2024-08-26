"use-client";

import React from 'react';
import { Input } from '../ui/input';

const SearchBar = () => {
  return (
    <div className='hidden flex-center rounded-full min-h-[54px] px-4 py-2 lg:flex'>
      <Input
        placeholder='Search your favorite Event ...' 
        className='searchbar-input placeholder:text-grey-500 focus:border-[1px] focus-visible:ring-0 focus-visible:ring-offset-0'
      />
    </div>
  );
};

export default SearchBar;