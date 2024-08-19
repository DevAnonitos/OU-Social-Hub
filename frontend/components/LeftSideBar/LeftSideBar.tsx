import React from 'react';
import { leftSideBarLinks } from '@/constants';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

const LeftSideBar = () => {
  return (
    <div className='left_sidebar'>
      <div className='mt-2'>
        {leftSideBarLinks.map((link) => (
          <Link 
            key={link.id}
            href={link.route} 
            className='px-4 py-3 flex items-center border-[1px] border-slate-400 mx-4 my-3 rounded-lg' 
          >
            <Image
              src={link.icon}
              alt={link.label}
              width={28}
              height={28}
            />
            <h3 className='mx-4'>
              {link.label}
            </h3>
          </Link>
        ))}
      </div>

      <Button className='mx-4 my-2'>
        SignOut
      </Button>
    </div>
  );
};

export default LeftSideBar;