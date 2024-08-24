"use client"

import React from 'react';
import { bottomBarLinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const BottomItems = () => {

  const pathName = usePathname();

  return (
    <div className='flex items-center justify-between gap-3 xs:gap-5 w-full'>
      {bottomBarLinks.map((link) => {
        const isActive =
          (pathName.includes(link.route) && link.route.length > 1)
          || pathName === link.route;
  
        return (
          <Link 
            key={link.id}
            href={link.route} 
            className={`bottombar_link ${isActive && "bg-slate-200"}`} 
          >
            <Image
              src={link.icon}
              alt={link.label}
              width={28}
              height={28}
              className={``}
            />
          </Link>
        )
      })}
    </div>
  );
};

export default BottomItems;