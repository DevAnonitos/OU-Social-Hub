"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from '../ui/button';
import { 
    DropdownMenu, 
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger, 
    DropdownMenuGroup
} from '../ui/dropdown-menu';

import { useAuthStore } from '@/stores/useAuthStore';


const ProfileDropDown = () => {

    const { user } = useAuthStore();
  return (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"outline"}>
                   My Profile
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side='bottom' className="w-[350px] h-[225px]">
                <DropdownMenuLabel className="font-semibold text-xl">
                    {user?.username}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href={"/"}>
                            Home
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={"/profile"}>
                            Profile
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={"/setting"}>
                            Settings
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  );
};

export default ProfileDropDown;