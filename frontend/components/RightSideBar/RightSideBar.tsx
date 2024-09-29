"use client";

import React from 'react';
import Image from 'next/image';
import EventCarousel from '../Carousel/EventCarousel';
import { Button } from '../ui/button';
import LoaderSpinner from '../Shared/LoaderSpinner';
import { useGetUsers } from '@/lib/react-query/queries';
import { useRouter } from 'next/navigation';

const getRandomUsers = (users: any[], count: number) => {
  if (!Array.isArray(users)) return []; // Kiểm tra nếu không phải là mảng, trả về mảng rỗng

  const shuffled = [...users].sort(() => 0.5 - Math.random()); // Trộn ngẫu nhiên danh sách
  return shuffled.slice(0, count); // Lấy số lượng người dùng mong muốn
};

const RightSideBar = () => {

  const { data: users, isLoading } = useGetUsers();

  const router = useRouter();

  if (!Array.isArray(users) || users.length === 0) {
    return <p>No users found.</p>; 
  }
  
  const randomUsers = getRandomUsers(users, 4);

  if (isLoading) {
    return <LoaderSpinner />;
  }

  return (
    <div className='right_sidebar px-4'>
      <section className='mt-4'>
        <h3>
          Up Coming Event!
        </h3>
        <EventCarousel />
      </section>
      <section className='flex flex-col pt-12'>
        <div className='flex items-center justify-between'>
          <h3>
            Content Creator
          </h3>
          <p>
            All
          </p>
        </div>
        <div className='flex flex-col mt-1'>
        {randomUsers.map((user: any) => (
            <div 
              key={user.id} 
              className='flex cursor-pointer items-center justify-between 
              w-full h-14 rounded-sm my-2'  
              onClick={() => router.push(`/profile/${user.id}`)}
            >
              <figure className='flex items-center gap-2 space-x-2'>
                <Image
                  src={user.avatarUrl || "/assets/images/dtdb.jpg"} 
                  alt={user.username}
                  width={44}
                  height={44}
                  className='object-contain rounded-full'
                />
                <h3 className='text-14 font-semibold text-black'>{user.username}</h3>
              </figure>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RightSideBar;