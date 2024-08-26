"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { leftSideBarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { SheetClose } from '../ui/sheet';

const MobileNavItems = () => {
  const pathName = usePathname();
  return (
    <ul className='flex h-full flex-col gap-3 text-black'>
        {leftSideBarLinks.map((link) => {
            const isActive =
              (pathName.includes(link.route) && link.route.length > 1)
              || pathName === link.route;
  
             return (
              <SheetClose key={link.id} asChild>
                <Link 
                  href={link.route} 
                  className={`flex px-2.5 py-2.5 items-center border-[1px] border-slate-400 mx-2 my-1.5 rounded-lg ${isActive && "bg-slate-200"}`} 
                >
                  <Image
                    src={link.icon}
                    alt={link.label}
                    width={26}
                    height={26}
                    className={`cursor-pointer`}
                  />
                  <h3 className='mx-4 text-black'>
                      {link.label}
                  </h3>
                </Link>
              </SheetClose>
              )
         })}
    </ul>
  );
};

export default MobileNavItems;