import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Button } from '../ui/button';
import Link from 'next/link';
import { BellIcon } from "@radix-ui/react-icons";
import MobileNav from './MobileNav';
import SignInModal from '../Modals/SignInModal';
import NotificationDropDown from '../Notification/NotificationDropDown';
import ProfileDropDown from '../Shared/ProfileDropDown';

const NavBar = () => {
  return (
    <div className='navbar'>
      <h1 className='hidden md:flex'>
        NavBar
      </h1>
      <div>
        <MobileNav />
      </div>
      <SearchBar />
      <div className='flex items-center'>
        <ProfileDropDown />
        <NotificationDropDown />
        {/* Auth Button */}
        <Button className='flex items-center justify-center font-semibold'>
          <Link 
            href={"/sign-in"} 
            prefetch={true}
            scroll={true}
          >
            Sign In
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NavBar;