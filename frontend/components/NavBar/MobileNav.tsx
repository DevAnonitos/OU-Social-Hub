import { 
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetFooter,
    SheetTrigger, 
} from '../ui/sheet';
import Image from "next/image";

import React from 'react';

const MobileNav = () => {
  return (
    <nav className='md:hidden'>
        <Sheet>
            <SheetTrigger>
                Menu
            </SheetTrigger>
            <SheetContent>
                
            </SheetContent>
        </Sheet>
    </nav>
  );
};

export default MobileNav;