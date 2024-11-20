import React from 'react';
import { Separator } from '../ui/separator';
import { footerSocialLinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';

const BottomBar = () => {
  return (
    <div className='flex flex-col border-t-[1px] border-gray-300 px-8 py-8 w-full space-y-4'>
      {/* Phần tiêu đề và mô tả */}
      <div className='flex items-center justify-between'>
        <div className='flex flex-col space-y-2'>
          <h3 className='font-bold text-3xl'>
            OUHUB
          </h3>
          <p className='text-md font-normal text-gray-500'>
            Mạng xã hội dành riêng cho sinh viên OU
          </p>
        </div>
        
        <div className='flex items-center space-x-6'>
          {footerSocialLinks.map((socialLink: any) => (
            <div key={socialLink.id} className='cursor-pointer'>
              <Image
                src={socialLink.logoImage}
                width={24}
                height={24}
                alt={socialLink.label}
                className='object-cover'  
              />
            </div>
          ))}
        </div>
      </div>

      {/* Separator */}
      <Separator className='bg-gray-300' />
      
      {/* Phần footer với các liên kết và thông tin bản quyền */}
      <div className='flex justify-between items-center'>

      </div>
    </div>
  );
};

export default BottomBar;
