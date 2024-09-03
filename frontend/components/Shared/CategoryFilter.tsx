"use client";

import React from 'react';
import {
  Select, 
  SelectContent,   
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '../ui/select';

const CategoryFilter = () => {
  return (
    <Select>
      <SelectTrigger className='w-full bg-grey-50 h-[54px] placeholder:text-grey-500 rounded-full p-regular-16 px-5 py-3 border-none focus-visible:ring-transparent focus:ring-transparent'>
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All" className="py-3 cursor-pointer  focus:bg-grey-50 p-regular-14">
          All
        </SelectItem>
        <SelectItem value="Dev" className="py-3 cursor-pointer  focus:bg-grey-50 p-regular-14">
          Dev
        </SelectItem>
        <SelectItem value="Media" className="py-3 cursor-pointer  focus:bg-grey-50 p-regular-14">
          Media
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CategoryFilter;