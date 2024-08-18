import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Button } from '../ui/button';

const NavBar = () => {
  return (
    <div className='navbar'>
      NavBar
      <SearchBar />
      <Button>
        Sign In
      </Button>
    </div>
  );
};

export default NavBar;