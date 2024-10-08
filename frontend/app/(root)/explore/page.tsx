"use client";
import React from 'react';
import { useGetUsers } from '@/lib/react-query/queries';
import LoaderSpinner from '@/components/Shared/LoaderSpinner';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Explore = () => {
  
  const { data: users=[], error, isLoading } = useGetUsers();

  if (isLoading) return <LoaderSpinner />;
  if (error) return <div>Error fetching users</div>;

  return (
    <main className='flex flex-col flex-grow overflow-y-auto max-w-screen mx-auto w-full h-full min-h-screen'>
      <div className='p-6 space-y-6 w-full h-full'>
        <h1>Explore</h1>
        <ul>
          {users.map((user: any) => (
            <li 
              key={user?.id} 
              className='w-full flex items-center justify-between border-[1px] border-slate-400 py-3 px-4 space-y-2 my-4'
            >  
              <h4 className='font-semibold text-md'>
                {user?.username}  
                <p className='font-light text-sm'>
                  {user?.email}
                </p>
              </h4>      
              <Button>
                <Link href={`/profile/${user?.id}`}>
                  Visit Profile
                </Link>
              </Button>
            </li> 
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Explore;