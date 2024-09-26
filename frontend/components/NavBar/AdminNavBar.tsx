"use client";

import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SignInModal from '../Modals/SignInModal';
import { BellIcon } from "@radix-ui/react-icons";
import { useAuthStore } from '@/stores/useAuthStore';
import ProfileDropDown from '../Shared/ProfileDropDown';

const AdminNavBar = () => {

  const { isAuthenticated } = useAuthStore();

  return (
    <div className='admin-nav'>
      <h1 className='hidden md:flex'>
        AdminDashBoard
      </h1>
      <SearchBar />
      <div className='flex items-center'>
        {isAuthenticated ? (
          <>
            <ProfileDropDown />
          </>
        ): (
          <>
            <BellIcon width={25} height={25} className='mx-4 cursor-pointer' />
            {/* Auth Button */}
            <SignInModal />
          </>
        )}
      </div>
    </div>
  );
};

export default AdminNavBar;