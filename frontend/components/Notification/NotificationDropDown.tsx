import React from 'react';
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
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationDropDown;