"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { BellIcon } from "@radix-ui/react-icons";
import { 
  DropdownMenu, 
  DropdownMenuContent,  
  DropdownMenuTrigger, 
} from '../ui/dropdown-menu';
import NotificationItems from './NotificationItems';
import { useGetNotifications } from '@/lib/react-query/queries';
import { useNotification } from '@/hooks/useNotification';

const NotificationDropDown = ({ userId }: { userId: string }) => {

  useNotification(userId);

  const { data: notifications=[], isLoading, error } = useGetNotifications(userId);

  if(isLoading) return <p>Loading Notification...</p>

  if (error) return <p>Error Loading Notification...</p>

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <BellIcon 
          width={25} 
          height={25} 
          className='mx-4 cursor-pointer' 
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' side='bottom' className='w-[455px] max-h-72 overflow-y-auto'>
        {notifications.map((notification: any) => (
          <NotificationItems key={notification.id} notification={notification} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationDropDown;