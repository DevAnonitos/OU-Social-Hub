"use client";

import React from 'react';
import { useGetUsers } from '@/lib/react-query/queries';
import LoaderSpinner from '@/components/Shared/LoaderSpinner';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const Explore = () => {
  
  // const { data: users=[], error, isLoading } = useGetUsers();

  // if (isLoading) return <LoaderSpinner />;
  // if (error) return <div>Error fetching users</div>;

  return (
    <main className='col-span-12 flex flex-col flex-grow overflow-y-auto max-w-screen mx-auto w-full h-full min-h-screen'>
      <div className='space-y-8 w-full h-full py-6'>
        Khám phá
      </div>
    </main>
  );
};

export default Explore;