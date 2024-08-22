import React from 'react';
import Image from 'next/image';
import EventCarousel from '../Carousel/EventCarousel';

const RightSideBar = () => {
  return (
    <div className='right_sidebar px-4'>
      <section className='mt-4'>
        <h3>
          Up Coming Event!
        </h3>
        <EventCarousel />
      </section>
      <section className='flex flex-col pt-12'>
        <h3>
          Content Creator
        </h3>
        <div className='flex flex-col mt-1'>
          <div className='flex cursor-pointer justify-between border-[1px] w-full border-slate-400 h-14 rounded-sm my-2'>
            
          </div>
          <div className='flex cursor-pointer justify-between border-[1px] w-full border-slate-400 h-14 rounded-sm my-2'>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default RightSideBar;