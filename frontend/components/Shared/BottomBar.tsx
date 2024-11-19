import React from 'react';
import { Separator } from '../ui/separator';

const BottomBar = () => {
  return (
    <div className='flex flex-col border-t-[1px] border-gray-300 px-8 h-44 py-8 w-full space-y-4'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col space-y-2'>
          <h3 className='font-bold text-3xl'>
            OUHUB
          </h3>
          <p className='text-md font-normal text-gray-500'>
            Mạng xã hội dành riêng cho sinh viên OU
          </p>      
        </div>
        <div className='flex items-center space-x-2'>
          
        </div>
      </div>
      <Separator className='bg-gray-300' />
    </div>
  );
};

export default BottomBar;