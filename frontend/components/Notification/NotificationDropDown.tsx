"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { BellIcon } from "@radix-ui/react-icons";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuGroup, 
  DropdownMenuTrigger, 
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '../ui/dropdown-menu';

import NotificationItems from './NotificationItems';

const NotificationDropDown = () => {
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
        <NotificationItems />
        <NotificationItems />
        <NotificationItems />
        <NotificationItems />
        <NotificationItems />
        <NotificationItems />
        <NotificationItems />
        <NotificationItems />
        <NotificationItems />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationDropDown;