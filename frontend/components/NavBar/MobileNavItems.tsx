"use client";

import React from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MobileNavItems = () => {
    const pathname = usePathname();
  return (
    <ul>
        MobileNavItems
    </ul>
  );
};

export default MobileNavItems;