"use client";
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Button } from '../ui/button';
import Link from 'next/link';
import { SettingsIcon, MoonIcon, BellIcon } from 'lucide-react';
import { useAuthStore } from '@/stores/useAuthStore';

const NavBar = () => {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <div className='fixed top-0 left-[272px] right-0 h-[64px] flex items-center justify-between border-b-[1px] border-gray-300 bg-white z-50'>
      <div className='flex items-center w-full justify-between px-8'>
        <SearchBar />
        <div className='flex items-center space-x-4'>
          <div className='bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer'>
            <SettingsIcon size={24} />
          </div>
          <div className='bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer'>
            <MoonIcon />
          </div>
          <div className='bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer'>
            <BellIcon />
          </div>
          <Button className='h-[40px]'>
            <Link href="/sign-in" prefetch={true}>
              Đăng nhập
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;