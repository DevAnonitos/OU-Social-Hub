"use client";

import React from 'react';
import CollectionEvents from '@/components/Shared/CollectionEvents';
import SearchEvent from '@/components/SearchBar/SearchEvent';
import CategoryFilter from '@/components/Shared/CategoryFilter';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Bookmark, HeartIcon } from 'lucide-react';
import CustomPagination from '@/components/Shared/CustomPagination';

const SearchPage = () => {

  const tags = [
    "Phát Triển Bản Thân",
    "Là Gì",
    "Tình Yêu",
    "Chăm Sóc Sức Khỏe",
    "Sức Khỏe Tâm Lý",
    "Tâm Lý",
    "Giáo dục",
    "Công việc",
    "Sức khỏe",
    "Hôn nhân",
  ];

  return (
    <div className='col-span-12 flex flex-grow overflow-y-auto max-w-screen mx-auto w-full h-full min-h-screen'>
      <div className='space-y-8 w-full h-full py-6'>
        <div className='flex items-center gap-6 w-full'>
          <div className="flex-grow">
            <SearchEvent />
          </div>
          <div className="w-1/2">
            <CategoryFilter />
          </div>
        </div>
        {/* ListTags Here */}
        <div className='flex items-center gap-x-5 overflow-x-auto pb-2'>
          <Button>
            Tất cả
          </Button>
          {tags.map((tag, index) => (
            <Button variant="outline" key={index} className='text-gray-800 font-medium whitespace-nowrap text-md border-[1px] border-gray-300'>
              #{tag}
            </Button>
          ))}
        </div>
        {/* <div className='flex items-center'>
          <h4 className='text-lg font-semibold'>
            Tìm kiếm: 200 kết quả
          </h4>
        </div> */}
        <section className='flex flex-col space-y-6'>


  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
    {Array(12).fill(0).map((_, idx) => (
      <div
        key={idx}
        className='bg-white rounded-lg shadow-md border border-gray-300 overflow-hidden'
      >
        {/* Hình ảnh */}
        <div className='relative h-[188px] w-full flex items-center justify-center'>
          {/* Overlay text or logo */}
          <div className='absolute inset-0 bg-black/40 flex justify-end items-start p-4'>
            <Image
              src={"/assets/images/ĐTĐB.png"}
              alt='Demo'
              layout='fill'    
              objectFit='cover' 
              className=''
            />
            <button className='absolute top-4 right-3 p-1 rounded-full bg-white/70 hover:bg-white'>
              <Bookmark className='text-gray-700' />
            </button>
          </div>
        </div>


        <div className='p-4 space-y-4 w-full border-t-[1px] border-gray-300'>
          <h3 className='font-semibold text-lg mb-1 w-full line-clamp-2'>
            Trải nghiệm bóc "túi mù", nhưng là với một bộ phim chiếu rạp
          </h3>
          <div className='flex items-center w-full text-sm text-gray-500'>
            <Image
              src='/assets/images/ĐTĐB.png'
              width={40}
              height={40}
              alt='Avatar'
              className='rounded-full border-[2px] mr-2'
            />
            <div className='flex flex-row w-full justify-between items-center'>
              <div className='flex flex-col items-start'>
                <span className='font-semibold text-md'>Quỳnh Anh</span>
                <span className='text-xs'>5 giờ trước</span>
              </div>
              <div className=''>
                <HeartIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
      <CustomPagination />
      </div>
    </div>
  );
};

export default SearchPage;