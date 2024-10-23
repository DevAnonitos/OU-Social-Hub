"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notificationTemplate, formatTimeAgo } from '@/lib/utils';
import { DropdownMenuItem } from '../ui/dropdown-menu';

const NotificationItems = ({ notification }: { notification: any }) => {

  const { createdAt } = notification;
  const message = notificationTemplate(notification);

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
            {message}
            <p className='text-sm font-normal'>
              {formatTimeAgo(new Date(createdAt))}
            </p>
          </div>
        </div>
      </Link>
    </DropdownMenuItem>
  );
};

export default NotificationItems;