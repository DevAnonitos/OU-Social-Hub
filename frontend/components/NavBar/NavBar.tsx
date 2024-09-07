import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Button } from '../ui/button';
import { BellIcon } from "@radix-ui/react-icons";
import MobileNav from './MobileNav';
import SignInModal from '../Modals/SignInModal';
import NotificationDropDown from '../Notification/NotificationDropDown';

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
        <NotificationDropDown />
        {/* Auth Button */}
        <SignInModal />
      </div>
    </div>
  );
};

export default NavBar;