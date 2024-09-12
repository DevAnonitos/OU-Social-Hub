"use client";
import React from 'react'
import { Input } from '../ui/input';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchEvent = () => {
  return (
    <div className='flex items-center min-h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2'>
      <Image 
        src="/assets/icons/search.svg" 
        alt="search" 
        width={24} 
        height={24} 
        priority
        quality={85}
      />
      <Input 
        type="text"
        placeholder={"Search..."}
        className="border-0 bg-grey-50 outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  )
}

export default SearchEvent