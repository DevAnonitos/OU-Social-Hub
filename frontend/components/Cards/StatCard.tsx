import Image from 'next/image';
import React from 'react'

const StatCard = () => {
  return (
    <div className='flex flex-1 flex-col gap-6 rounded-2xl border-[1px] border-slate-400 bg-cover p-6'>
      <div className='flex items-center gap-4'>
        <Image
          src="/assets/icons/anlys.svg"
          width={30}
          height={30}
          alt='Dashboard Icon'

        />
        <h2 className="text-2xl font-semibold text-black">
          2024
        </h2>
      </div>
      <p className="text-md font-medium text-black">
        Events
      </p>
    </div>
  );
};

export default StatCard;