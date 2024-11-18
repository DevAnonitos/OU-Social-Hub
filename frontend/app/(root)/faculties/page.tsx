"use client";
import React from 'react';
import dynamic from 'next/dynamic';

import { MDXProvider } from '@mdx-js/react';

const ComputerScience = dynamic(() => import('./markdown/DTDB.mdx'));

const FacultiesPage = () => {
  return (
    <div>
      Khoa
    </div>
  )
}

export default FacultiesPage