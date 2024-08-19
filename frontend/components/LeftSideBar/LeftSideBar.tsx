"use client";

import React from 'react';
import { leftSideBarLinks } from '@/constants';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';


const LeftSideBar = () => {

  const router = useRouter();
  const pathName = usePathname();

  return (
    <div className='left_sidebar'>
      <div className='mt-2'>
        {leftSideBarLinks.map((link) => {
          const isActive =
            (pathName.includes(link.route) && link.route.length > 1)
            || pathName === link.route;
  
          return (
            <Link 
              key={link.id}
              href={link.route} 
              className={`left_sidebar-link ${isActive && "bg-slate-200"}`} 
            >
              <Image
                src={link.icon}
                alt={link.label}
                width={26}
                height={26}
                className={``}
              />
              <h3 className='mx-4'>
                {link.label}
              </h3>
            </Link>
          )
        })}
        {/* LeftSideBar Responsive */}
        {leftSideBarLinks.map((mobileLink) => (
          <Link href={mobileLink.route} key={mobileLink.id} className='left_sidebar-mobilelink'>
            <Image
              src={mobileLink.icon}
              alt={mobileLink.label}
              width={26}
              height={26}
            />
          </Link>
        ))}
      </div>

      <Button className='mx-4 my-2 hidden lg:flex'>
        SignOut
      </Button>
    </div>
  );
};

export default LeftSideBar;