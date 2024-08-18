import React from 'react';
import { leftSideBarLinks } from '@/constants';
import { Button } from '../ui/button';

const LeftSideBar = () => {
  return (
    <div className='left_sidebar'>
      <div className='mt-2'>
        {leftSideBarLinks.map((link) => (
          <div className='px-4 py-3 border-[1px] border-slate-400 mx-4 my-2 rounded-lg' key={link.id}>
            <h3>
              {link.label}
            </h3>
          </div>
        ))}
      </div>

      <Button className='mx-4 my-2'>
        SignOut
      </Button>
    </div>
  );
};

export default LeftSideBar;