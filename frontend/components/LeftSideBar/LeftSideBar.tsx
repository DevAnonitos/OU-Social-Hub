"use client";

import React from 'react';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/useAuthStore';
import LeftSideBarItems from './LeftSideBarItems';


const LeftSideBar = () => {

  const router = useRouter();
  const { clearAuth, isAuthenticated, user } = useAuthStore();

  const handleSignOut = () => {
    clearAuth();
    router.replace("/sign-in");
  };

  return (
    <div className='left_sidebar'>
      <div className='mt-2'>
        <LeftSideBarItems />
      </div>

      {isAuthenticated && (
        <Button className='mx-4 my-2 hidden lg:flex' onClick={handleSignOut}>
          Sign Out
        </Button>
      )}
    </div>
  );
};

export default LeftSideBar;