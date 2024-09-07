import React from 'react'
import { Skeleton } from '../ui/skeleton'

const LoadingSkeleton = () => {
  return (
    <div className='group relative flex min-h-[250px] w-full flex-col overflow-hidden rounded-xl bg-white shadow-sm md:min-h-[345px] border border-slate-400 cursor-pointer'>
      {/* Skeleton for Image */}
      <Skeleton className='flex-center flex-grow bg-gray-300 h-[155px]' />

      {/* Skeleton for Dots Icon */}
      <div className='absolute right-2 top-2 flex flex-col rounded-xl bg-white p-3 shadow-sm'>
        <Skeleton className='w-5 h-5 bg-gray-300' />
      </div>

      <div className='flex min-h-[155px] flex-col gap-3 p-5 md:gap-4'>
        {/* Skeleton for Category Badges */}
        <div className='flex gap-2'>
          <Skeleton className='w-16 h-6 rounded-full bg-gray-300' />
          <Skeleton className='w-16 h-6 rounded-full bg-gray-300' />
        </div>

        {/* Skeleton for DateTime */}
        <Skeleton className='w-32 h-5 bg-gray-300' />

        {/* Skeleton for Title */}
        <Skeleton className='w-full h-6 bg-gray-300' />
        <Skeleton className='w-3/4 h-6 bg-gray-300' />

        {/* Skeleton for Footer Content */}
        <div className='flex justify-between flex-row w-full'>
          <Skeleton className='w-24 h-4 bg-gray-300' />
          <Skeleton className='w-16 h-4 bg-gray-300' />
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;