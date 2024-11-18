"use client";

import React from 'react';
import dynamic from 'next/dynamic';


import ClubSection from '@/components/Sections/ClubSection';
import PostSection from '@/components/Sections/PostSection';
import TagSection from '@/components/Sections/TagSection';
import DepartmentSection from '@/components/Sections/DepartmentSection';
import FacultySection from '@/components/Sections/FacultySection';
import NewsSection from '@/components/Sections/NewsSection';

const Home = () => {
  return (
    <main className='col-span-12 flex flex-col flex-grow overflow-y-auto max-w-screen mx-auto w-full h-full min-h-screen'>
      <div className='space-y-8 w-full h-full py-6'>
        <ClubSection />
        <PostSection />
        <TagSection />
        <DepartmentSection />
        <FacultySection />
        <NewsSection />
      </div>
    </main>
  );
};

export default Home;