import React from 'react';
import { Skeleton } from '../ui/skeleton';

const PostLoadingSkeleton = () => {
  return (
    <div className='bg-white rounded-lg shadow-md border border-gray-300 overflow-hidden'>
      {/* Skeleton for Image */}
      <div className='relative h-[188px] w-full flex items-center justify-center'>
        <Skeleton className='absolute inset-0 h-full w-full' />
        <div className='absolute inset-0 flex justify-end items-start p-4'>
          <Skeleton className='h-10 w-10 rounded-full bg-white/70' />
        </div>
      </div>

      <div className='p-4 space-y-4 w-full border-t-[1px] border-gray-300'>
        {/* Skeleton for Title */}
        <Skeleton className='h-6 w-3/4 rounded-md' />

        {/* Skeleton for User Info */}
        <div className='flex items-center justify-between w-full space-x-3'>
          {/* Skeleton for Avatar */}
          <Skeleton className='h-10 w-10 rounded-full' />
          <div className='flex flex-col space-y-1'>
            {/* Skeleton for Name */}
            <Skeleton className='h-4 w-24 rounded-md' />
            {/* Skeleton for Timestamp */}
            <Skeleton className='h-3 w-16 rounded-md' />
          </div>
          <Skeleton className='h-6 w-6 rounded-md' />
        </div>
      </div>
    </div>
  );
};

export default PostLoadingSkeleton;
