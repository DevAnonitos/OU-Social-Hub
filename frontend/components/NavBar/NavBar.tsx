"use client";

import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Button } from '../ui/button';
import Link from 'next/link';
import { SettingsIcon } from 'lucide-react';
import { MoonIcon } from 'lucide-react';
import { BellIcon } from 'lucide-react';

import { useAuthStore } from '@/stores/useAuthStore';

const NavBar = () => {

  const { isAuthenticated, user } = useAuthStore();

  return (
    <div className='w-full h-[64px] flex flex-row items-center justify-between border-b-[1px] border-gray-300'>
      <div className='flex items-center w-full justify-between px-8'>
        <SearchBar />
        <div className='flex items-center space-x-4'>
          <div className='bg-slate-300 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer'>
            <SettingsIcon size={24} />
          </div>
          <div className='bg-slate-300 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer'>
            <MoonIcon />
          </div>
          <div className='bg-slate-300 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer'>
            <BellIcon />
          </div>
          <Button className='h-[40px]'>
            Đăng nhập
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;