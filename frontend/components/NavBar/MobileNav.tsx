"use client"
import { 
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetFooter,
    SheetTrigger, 
    SheetClose,
} from '../ui/sheet';
import Image from "next/image";
import MobileNavItems from './MobileNavItems';

import React from 'react';

const MobileNav = () => {
  
  return (
    <section className='md:hidden flex'>
        <Sheet>
            <SheetTrigger>
              <Image src="/assets/icons/menu.svg" width={30} height={30} alt="menu" className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="left" className="border-none bg-slate-50">
                <SheetHeader>
                    <SheetTitle>
                        Menu
                    </SheetTitle>
                    <SheetDescription>
                        Select an option
                    </SheetDescription>
                    <SheetClose asChild />
                </SheetHeader>
                <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
                  <SheetClose asChild>
                    <MobileNavItems />
                  </SheetClose>
                </div>
            </SheetContent>
        </Sheet>
    </section>
  );
};

export default MobileNav;