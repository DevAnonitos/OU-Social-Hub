import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { HeartIcon, Bookmark } from 'lucide-react';
import { PostCardProps } from '@/types';

const PostCard = ({ idx, imageSrc, title, author, date, onBookmarkClick } : PostCardProps) => {
  return (
    <div
      key={idx}
      className='bg-white rounded-lg shadow-md border border-gray-300 overflow-hidden'
    >
      {/* Hình ảnh */}
      <div
        className='relative h-[192px] w-full flex items-center justify-center'
      >
        {/* Overlay text or logo */}
        <div 
          className='absolute inset-0 bg-black/40 flex justify-end items-start p-4'
        >
          <Image
            src={imageSrc}
            alt='Demo'
            layout='fill'
            loading="eager"
            objectFit='cover'
            className='object-cover'
            decoding='async'
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 188px"
          />
          <button 
            className='absolute top-4 right-3 p-1 rounded-full bg-white/70 hover:bg-white'
            onClick={onBookmarkClick}
          >
            <Bookmark className='text-gray-700' />
          </button>
        </div>
      </div>

      <div className='p-4 space-y-4 w-full border-t-[1px] border-gray-300'>
        <h3 className='font-semibold text-lg mb-1 w-full line-clamp-2'>
          {title}
        </h3>
        <div className='flex items-center w-full text-sm'>
          <Image
            src='/assets/images/ĐTĐB.png'
            width={40}
            height={40}
            alt='Avatar'
            priority
            className='rounded-full border-[2px] mr-2'
          />
          <div className='flex flex-row w-full justify-between items-center'>
            <div className='flex flex-col items-start space-y-1'>
              <span className='font-semibold text-md'>{author}</span>
              <span className='text-xs font-normal'>{date}</span>
            </div>
            <div className='cursor-pointer'>
              <HeartIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;