"use client";
import React from 'react';
import Image from 'next/image';
import { HeartIcon, CircleArrowLeft, CircleArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <main className='col-span-12 flex flex-col flex-grow overflow-y-auto max-w-screen mx-auto w-full h-full min-h-screen'>
      <div className='space-y-8 w-full h-full py-6'>
        <section className='flex flex-col space-y-8'>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-bold'>
              Câu lạc bộ - Đội nhóm OU
            </h2>
            <div className="flex gap-2">
              <button className="p-2 rounded-full border">
                <CircleArrowLeft />
              </button>
              <button className="p-2 rounded-full border">
                <CircleArrowRight />
              </button>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-6'>
            {Array(8).fill(0).map((_, idx) => (
              <div key={idx} className='relative aspect-square w-full max-w-[164px] rounded-lg border border-gray-300 overflow-hidden'>
                <Image
        src='/assets/images/ĐTĐB.png'
        alt='Avatar'
        layout='fill'         // Đảm bảo ảnh phủ toàn bộ div
        objectFit='cover'      // Đảm bảo ảnh không bị méo
        className='rounded-lg'
      />
              </div>
            ))}
          </div>
        </section>
        <section className='flex flex-col space-y-6'>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-bold'>Bài viết mới nhất</h2>
            <button className='px-4 py-2 rounded-lg bg-black text-white'>Khám phá</button>
          </div>

  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
    {Array(4).fill(0).map((_, idx) => (
      <div
        key={idx}
        className='bg-white rounded-lg shadow-md border border-gray-300 overflow-hidden'
      >
        {/* Hình ảnh */}
        <div className='relative h-[188px] w-full flex items-center justify-center'>
          {/* Overlay text or logo */}
          <div className='absolute inset-0 bg-black/40 flex justify-end items-start p-4'>
            <Image
              src={"/assets/images/ĐTĐB.png"}
              alt='Demo'
              layout='fill'    
              objectFit='cover' 
              className=''
            />
          </div>
        </div>


        <div className='p-4 space-y-4 w-full border-t-[1px] border-gray-300'>
          <h3 className='font-semibold text-lg mb-1 w-full'>
            Trải nghiệm bóc "túi mù", nhưng là với một bộ phim chiếu rạp
          </h3>
          <div className='flex items-center w-full text-sm text-gray-500'>
            <Image
              src='/assets/images/ĐTĐB.png'
              width={32}
              height={32}
              alt='Avatar'
              className='rounded-full border-[2px] mr-2'
            />
            <div className='flex flex-row w-full justify-between items-center'>
              <div className='flex flex-col items-start'>
                <span className='font-semibold'>Quỳnh Anh</span>
                <span className='text-xs'>5 giờ trước</span>
              </div>
              <div className=''>
                <HeartIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
      
      </div>
    </main>
  );
};

export default Home;