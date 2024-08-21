import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Button } from '../ui/button';
import { BellIcon } from "@radix-ui/react-icons"

const NavBar = () => {
  return (
    <div className='navbar'>
      NavBar
      <SearchBar />
      <div className='flex items-center'>
        <BellIcon width={25} height={25} className='mx-4 cursor-pointer' />
        {/* Auth Button */}
        <Button>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default NavBar;