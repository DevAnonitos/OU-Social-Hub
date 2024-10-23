"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { DropdownMenuItem } from '../ui/dropdown-menu';

const NotificationItems = ({ notification }: { notification: any }) => {

  const { entityNotification, createdAt } = notification;

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
            {entityNotification?.entityContent}
            <p className='text-sm font-normal'>
              {new Date(createdAt).toLocaleTimeString()} ago
            </p>
          </div>
        </div>
      </Link>
    </DropdownMenuItem>
  );
};

export default NotificationItems;