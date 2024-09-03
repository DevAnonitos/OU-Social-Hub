import React from 'react';
import CollectionEvents from '@/components/Shared/CollectionEvents';
import SearchEvent from '@/components/SearchBar/SearchEvent';
import CategoryFilter from '@/components/Shared/CategoryFilter';

const Search = () => {
  return (
    <div className='flex flex-col max-w-screen mx-auto w-full h-full min-h-screen'>
      <div className='p-6 space-y-6 w-full h-full flex flex-col wrapper'>
        <h2 className="h2-bold">Trust by <br /> Thousands of Events</h2>
        <div className='flex w-full flex-col gap-5 md:flex-row'>
          <SearchEvent />
          <CategoryFilter />
        </div>
        <CollectionEvents />
      </div>
    </div>
  );
};

export default Search;