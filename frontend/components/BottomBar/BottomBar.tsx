"use client";

import React from 'react';
import BottomItems from './BottomItems';
import UseScrollHideBottomBar from '@/hooks/useScrollBottomBar';

const BottomBar = () => {
  const isBottomBarVisible = UseScrollHideBottomBar();
  return (
    <div className='bottombar'>
      <BottomItems />
    </div>
  );
};

export default BottomBar;