"use-client";

import React from 'react';
import { Input } from '../ui/input';

const SearchBar = () => {
  return (
    <div className='flex item-center justify-between rounded-full'>
      <Input
        placeholder='Tìm nội dung trên OUHUB...' 
        className='w-[446px] border-[1px] border-gray-300 min-h-[40px] px-8 py-2 rounded-full placeholder:text-grey-500 focus:border-[1px] focus-visible:ring-0 focus-visible:ring-offset-0'
      />
    </div>
  );
};

export default SearchBar;