"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '../ui/card';
import { motion } from "framer-motion"
import { DotsVerticalIcon, BookmarkFilledIcon } from '@radix-ui/react-icons';


const EventCard = () => {
  return (
    <Card 
      className='group relative flex min-h-[250px] w-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md md:min-h-[345px] border border-slate-400 cursor-pointer'
    >

      <Link href={"/events"} 
        className='flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500' 
        style={{ backgroundImage: `url(/assets/images/dtdb.jpg)` }}
      />
      

      <div className='absolute right-2 top-2 flex flex-col rounded-xl bg-white p-3 shadow-sm transition-all'>
        <DotsVerticalIcon className='w-5 h-5' />
      </div>

      <div className='flex min-h-[155px] flex-col gap-3 p-5 md:gap-4'>
        {/* Category */}
        <div className='flex gap-2'>
          {/* <span className="text-[14px] font-semibold leading-[20px] rounded-full bg-green-100 px-4 py-1 text-green-600">
            Free
          </span>
          <p className='text-[14px] font-semibold leading-[20px] rounded-full bg-grey-500/10 px-4 py-1 text-grey-500'>
            Dev
          </p> */}
        </div>

        {/* Format Datetime */}
        <p className='text-gray-500 text-[16px] font-medium leading-[24px]'>
          Fri, Dec 15, 8:30AM
        </p>
        {/* Title Event */}
        <p className='text-[20px] font-medium leading-[30px] line-clamp-2 flex-1 text-black'>
          DẠ NGUYỆT 2024 - GÓC GÂY QUỸ
        </p>
        <div className='flex justify-between flex-row w-full'>
          <p className='p-medium-14 md:p-medium-16 text-grey-600'>
            Đào tạo đặc biệt
          </p>
          <p className='p-medium-14 md:p-medium-16 text-grey-600 flex items-center'>
            10,5k 
            <BookmarkFilledIcon className='ml-2 w-5 h-5' />
          </p>
        </div>
      </div>
    </Card>
  );
};

export default EventCard;