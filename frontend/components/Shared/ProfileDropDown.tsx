"use client";

import React from 'react';
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
import { usePathname, useRouter } from 'next/navigation';

const ProfileDropDown = () => {

    const { user, clearAuth } = useAuthStore();
    const router = useRouter();
    const pathName = usePathname();

    const handleSignOut = () => {
        clearAuth();
        router.replace("/sign-in");
    };

    const handleAdminSwitch = () => {
        if (user?.role === 'ADMIN') {
            if (pathName === '/dashboard') {
                router.push('/'); 
            } else {
                router.push('/dashboard');
            }
        }
    };
    
  return (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger asChild    >
                <Button variant={"outline"}>
                    My Profile
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' side='bottom' className="absolute right-0 w-[305px] bg-white shadow-lg rounded-md mt-2 overflow-hidden">
                <DropdownMenuLabel className="font-semibold text-xl">
                    {user?.username}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className='cursor-pointer'>
                    {user?.role === 'ADMIN' && (
                        <DropdownMenuItem className='py-3' onClick={handleAdminSwitch}>
                            {pathName === '/dashboard' ? 'Switch to Home' : 'Switch to Dashboard'}
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