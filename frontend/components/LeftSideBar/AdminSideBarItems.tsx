"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { adminSideBar } from '@/constants';
import { useRouter, usePathname } from 'next/navigation';

const AdminSideBarItems = () => {

  const router = useRouter();
  const pathName = usePathname();


  return (
    <div>
      {adminSideBar.map((link) => {
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
                            priority
                            className={``}
                        />
                        <h3 className='mx-4'>
                            {link.label}
                        </h3>
                    </Link>
                )
            })}
    </div>
  );
};

export default AdminSideBarItems;