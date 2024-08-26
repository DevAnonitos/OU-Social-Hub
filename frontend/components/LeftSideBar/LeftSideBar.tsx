"use client";

import React from 'react';
import { Button } from '../ui/button';
import LeftSideBarItems from './LeftSideBarItems';
import { Separator } from '../ui/separator';

const LeftSideBar = () => {
  
  return (
    <div className='left_sidebar'>
      <div className='mt-2'>
        <LeftSideBarItems />
      </div>

      <Button className='mx-4 my-2 hidden lg:flex'>
        SignOut
      </Button>
    </div>
  );
};

export default LeftSideBar;