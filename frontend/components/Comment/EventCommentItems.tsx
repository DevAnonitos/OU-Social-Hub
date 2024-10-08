import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatDateTime } from '@/lib/utils';

const EventCommentItems = ({ comment }: { comment: any }) => {
  return (
    <div className='flex items-start w-full space-x-2'>
      <Image 
        src={"/assets/images/dtdb.jpg"}
        alt="hero image"
        width={44}
        height={44}
        loading='lazy'
        quality={85}
        className="object-cover rounded-full"
      />
      <div className='flex w-full'>
        <div className='flex flex-col w-full space-y-2'>
          <div className='flex flex-row items-center w-full space-x-2'>
            <h3 className='text-lg font-semibold'>
              {comment?.user?.username}  -
            </h3>
            <p className='text-md font-normal text-gray-500'>
              {formatDateTime(comment?.createdAt).timeOnly}
            </p>
          </div>
          <div className='flex items-center w-full border-[1px] border-slate-400 px-4 py-6 rounded-lg'>
            <p>
              {comment?.content} 
            </p>
          </div>
          <div className='flex items-center justify-end space-x-2'>
            <p className='text-sm text-gray-700 font-medium cursor-pointer'>
              Like
            </p>
            <p className='text-sm text-gray-700 font-medium cursor-pointer'>
              Reply
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCommentItems;