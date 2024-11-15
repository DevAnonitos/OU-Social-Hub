"use client";

import React from 'react';
import CollectionEvents from '@/components/Shared/CollectionEvents';
import SearchEvent from '@/components/SearchBar/SearchEvent';
import CategoryFilter from '@/components/Shared/CategoryFilter';

const Search = () => {
  return (
    <div className='col-span-12 flex flex-grow overflow-y-auto max-w-screen mx-auto w-full h-full min-h-screen'>
      <div className='space-y-8 w-full h-full py-6'>
        <div className='flex items-center justify-between'>
          <SearchEvent />
          <CategoryFilter />
        </div>
      </div>
    </div>
  );
};

export default Search;