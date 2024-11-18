import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

const FacultySection = () => {
  return (
    <section className='flex flex-col space-y-8'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>
          Khoa
        </h2>
        <div className="flex gap-2">
          <Button>
            Xem tất cả
          </Button>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-6'>
        {Array(8).fill(0).map((_, idx) => (
          <div key={idx} className='relative aspect-square w-full max-w-[164px] rounded-lg border border-gray-300 overflow-hidden'>
            <Image
              src='/assets/images/ĐTĐB.png'
              alt='Avatar'
              layout='fill'         
              className='rounded-lg'
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacultySection;