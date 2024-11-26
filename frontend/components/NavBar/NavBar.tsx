"use client";

import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import SearchBar from '../SearchBar/SearchBar';
import { Button } from '../ui/button';
import ProfileDropDown from '../(User)/ProfileDropDown';
import { SettingsIcon, MoonIcon, BellIcon, SunIcon } from 'lucide-react';
import { useAuthStore } from '@/stores/useAuthStore';

const NavBar = () => {
  const { isAuthenticated, user } = useAuthStore();
  const { theme, setTheme } = useTheme();
  
  return (
    <div className='fixed top-0 left-[272px] right-0 h-[64px] flex items-center justify-between border-b-[1px] border-gray-300 bg-white dark:bg-gray-900 z-50'>
      <div className='flex items-center w-full justify-between px-8'>
        <SearchBar />
        <div className='flex items-center space-x-4'>
          <Link prefetch={true} scroll={true} href="/settings" className='bg-gray-200 dark:bg-gray-800 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer'>
            <SettingsIcon size={24} className="text-gray-700 dark:text-gray-300" />
            {/* <ProfileDropDown /> */}
          </Link>
          <div 
            className='bg-gray-200 dark:bg-gray-800 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <SunIcon className="text-gray-700 dark:text-gray-300" />
            ) : (
              <MoonIcon className="text-gray-700 dark:text-gray-300" />
            )}
          </div>
          <div className='bg-gray-200 dark:bg-gray-800 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer'>
            <BellIcon size={24} className="text-gray-700 dark:text-gray-300" />
          </div>
          <Button className='h-[40px]'>
            <Link href="/sign-in" prefetch={true} scroll={true}>
              Đăng nhập
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;