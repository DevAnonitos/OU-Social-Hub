"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { leftSideBarLinks,categoriesLinks, connectLinks } from '@/constants';
import { Separator } from '../ui/separator';
import { LayoutGrid, Tv } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div className='fixed top-0 left-0 w-[272px] h-full border-r border-gray-300 py-6 px-4 flex flex-col z-40 overflow-y-auto'>
      <div className='flex items-center justify-center mb-6'>
        <h1 className="text-2xl font-bold">
          OUHUB
        </h1>
      </div>
      <div className='w-full'>
        {leftSideBarLinks.map((link) => {
          const isActive = (pathName.includes(link.route) && link.route.length > 1) || pathName === link.route;
          return (
            <Link 
              key={link.id}
              href={link.route}
              prefetch={true}
              scroll={true}
              className={`flex items-center py-2.5 px-4 my-2 rounded-lg ${isActive ? "bg-white shadow-sm border-[1px] border-gray-300" : "hover:bg-gray-100"}`} 
            >
              <Image
                src={link.icon}
                alt={link.label}
                width={24}
                height={24}
                priority
                quality={85}
                decoding='async'
                className="object-cover"
              />
              <h3 className='ml-4 text-gray-700'>
                {link.label}
              </h3>
            </Link>
          )
        })}
      </div>
      <Separator className='bg-gray-300' />
      <div className='w-full'>
        <div className='flex items-center flex-row justify-between w-full my-4'>
          <h3 className='text-md font-semibold'>
            Danh mục
          </h3>
          <LayoutGrid />
        </div>
        {categoriesLinks.map((link) => {
          const isActive = (pathName.includes(link.route) && link.route.length > 1) || pathName === link.route;
          return (
            <Link 
              key={link.id}
              href={link.route}
              prefetch={true}
              scroll={true}
              className={`flex items-center py-2.5 px-4 my-2 rounded-lg hover:bg-gray-100`} 
            >
              <Image
                src={link.icon}
                alt={link.label}
                width={26}
                height={26}
                priority
                quality={85}
                decoding='async'
                className="object-cover"
              />
              <h3 className='ml-4 text-gray-700'>
                {link.label}
              </h3>
            </Link>
          )
        })}
      </div>
      <Separator className='bg-gray-300' />
      <div className='w-full'>
        <div className='flex items-center flex-row justify-between w-full my-4'>
          <h3 className='text-md font-semibold'>
            Kết nối
          </h3>
          <Tv />
        </div>
        {connectLinks.map((link) => {
          const isActive = (pathName.includes(link.route) && link.route.length > 1) || pathName === link.route;
          return (
            <Link 
              key={link.id}
              href={link.route}
              prefetch={true}
              scroll={true}
              className={`flex items-center py-2.5 px-4 my-2 rounded-lg hover:bg-gray-100`} 
            >
              <Image
                src={link.icon}
                alt={link.label}
                width={26}
                height={26}
                priority
                quality={85}
                decoding='async'
                className="object-cover"
              />
              <h3 className='ml-4 text-gray-700'>
                {link.label}
              </h3>
            </Link>
          )
        })}
      </div>
    </div>
  );
};

export default Sidebar;