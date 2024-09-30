"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { DropdownMenuItem } from '../ui/dropdown-menu';

const NotificationItems = () => {
  return (
    <DropdownMenuItem className='w-full p-3'>
      <Link href="#">
        <div className='flex flex-row items-center justify-between space-x-2'>
          <div>
            <Image
              src={"/assets/images/dtdb.jpg"}
              alt='Avatar'
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className='grow text-md font-semibold  w-[26rem]'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa consectetur iusto reiciendis, iste ratione nesciunt quidem! 
            <p className='text-sm font-normal'>
              1h ago
            </p>
          </div>
        </div>
      </Link>
    </DropdownMenuItem>
  );
};

export default NotificationItems;