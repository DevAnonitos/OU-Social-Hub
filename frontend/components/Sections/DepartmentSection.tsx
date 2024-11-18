import React from 'react';
import { Button } from '../ui/button';

const DepartmentSection = () => {
  return (
    <section className='flex flex-col space-y-8'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>
          Phòng ban
        </h2>
        <div className="flex gap-2">
          <Button>
            Xem tất cả
          </Button>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {Array(4).fill(0).map((_, idx) => (
          <div key={idx} className='relative w-full h-[154px] rounded-lg border border-gray-300 overflow-hidden'>
                
          </div>
        ))}
      </div>
    </section>
  );
};

export default DepartmentSection;