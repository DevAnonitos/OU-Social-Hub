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

import { useRouter } from 'next/navigation';

import { useAuthStore } from '@/stores/useAuthStore';


const ProfileDropDown = () => {

    const { user, clearAuth } = useAuthStore();
    const router = useRouter();

    const handleSignOut = () => {
        clearAuth();
        router.replace("/sign-in");
    };

    const handleAdminSwitch = () => {
        // Redirect to admin dashboard if role is admin
        if (user?.role === 'ADMIN') {
            router.push('/dashboard');
        }
    };

    
  return (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"outline"}>
                   My Profile
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side='bottom' className="w-[350px]">
                <DropdownMenuLabel className="font-semibold text-xl">
                    {user?.username}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className='cursor-pointer'>
                    {user?.role === 'ADMIN' && (
                        <DropdownMenuItem className='py-3' onClick={handleAdminSwitch}>
                            Switch to Dashboard
                        </DropdownMenuItem>
                    )}
                    <DropdownMenuItem className='py-3'>
                        <Link href={"/"}>
                            Home
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='py-3'>
                        <Link href={"/profile"}>
                            Profile
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='py-3'>
                        <Link href={"/setting"}>
                            Settings
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='py-3'>
                        <Button className='w-full' onClick={handleSignOut}>
                            Sign Out
                        </Button>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  );
};

export default ProfileDropDown;