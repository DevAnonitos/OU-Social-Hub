"use client";

import React from 'react';
import {
  Select, 
  SelectContent,   
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '../ui/select';
import { useSearchParams, useRouter } from 'next/navigation';
import { useGetAllCategories } from '@/lib/react-query/queries';
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils'; // Import hook

const CategoryFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data: categories=[], isLoading, error } = useGetAllCategories();

  const onSelectCategory = (category: string) => {
    let newUrl = '';

    if (category && category !== 'All') {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'category',
        value: category,
      });
    } else {
      newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ['category'],
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <Select onValueChange={(value: string) => onSelectCategory(value)}>
      <SelectTrigger className='w-full bg-grey-50 h-[54px] placeholder:text-grey-500 rounded-full p-regular-16 px-5 py-3 border-none focus-visible:ring-transparent focus:ring-transparent'>
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All" className="py-3 cursor-pointer  focus:bg-grey-50 p-regular-14">
          All
        </SelectItem>

        {categories?.map((category: any) => (
          <SelectItem
            value={category.categoryName}
            key={category._id}
            className="py-3 cursor-pointer  focus:bg-grey-50 p-regular-14"
          >
            {category.categoryName}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CategoryFilter;
