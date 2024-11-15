"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HeartIcon, CircleArrowLeft, CircleArrowRight, Bookmark, Circle } from 'lucide-react';

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
                  layout='fill'         
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
        <div className='relative h-[194px] w-full flex items-center justify-center'>
          {/* Overlay text or logo */}
          <div className='absolute inset-0 bg-black/40 flex justify-end items-start p-4'>
            <Image
              src={"/assets/images/ĐTĐB.png"}
              alt='Demo'
              layout='fill'    
              objectFit='cover' 
              className=''
            />
            <button className='absolute top-4 right-3 p-1 rounded-full bg-white/70 hover:bg-white'>
              <Bookmark className='text-gray-700' />
            </button>
          </div>
        </div>


        <div className='p-4 space-y-4 w-full border-t-[1px] border-gray-300'>
          <h3 className='font-semibold text-lg mb-1 w-full line-clamp-2'>
            Trải nghiệm bóc "túi mù", nhưng là với một bộ phim chiếu rạp
          </h3>
          <div className='flex items-center w-full text-sm text-gray-500'>
            <Image
              src='/assets/images/ĐTĐB.png'
              width={40}
              height={40}
              alt='Avatar'
              className='rounded-full border-[2px] mr-2'
            />
            <div className='flex flex-row w-full justify-between items-center'>
              <div className='flex flex-col items-start'>
                <span className='font-semibold text-md'>Quỳnh Anh</span>
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
<section className="flex flex-col space-y-8">
  <div className="flex items-center justify-between">
    <h2 className="text-2xl font-bold">
      Tags Phổ Biến Nhất
    </h2>
    <div className="flex gap-2">
  
    </div>
  </div>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-12 gap-6">
    <Button>
      Tất cả
    </Button>
    {['Cuộc sống', 'Mẹo vặt', 'Sự nghiệp', 'Câu chuyện', 'Tình yêu', 'Tâm lý', 'Sức khỏe', 'Giáo dục', 'Tin tức', 'Tài liệu', 'OU'].map((tag, idx) => (
      <Button variant="outline" key={idx} className="relative flex items-center justify-center w-full rounded-lg border border-gray-300">
        <span className="text-center text-sm font-medium p-2">
          {tag}
        </span>
      </Button>
    ))}
  </div>
  </section>
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
        <section className="flex flex-col space-y-8">
  {/* Header */}
  <div className="flex items-center justify-between">
    <h2 className="text-2xl font-bold">Tin tức</h2>
    <div className="flex gap-2">
      <Button>Xem tất cả</Button>
    </div>
  </div>

  {/* Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {/* Left side: News List */}
    <div className="col-span-2 space-y-4 bg-gray-100 border-[1px] border-gray-300 rounded-lg">
      {Array(3).fill(0).map((_, idx) => (
        <div
          key={idx}
          className="flex items-start space-x-4 p-4"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-gray-200 text-lg font-bold rounded-full">
            {idx + 1}
          </div>
          <div>
            <h3 className="font-semibold text-md">
              Trường Đại học Mở TP. Hồ Chí Minh đạt thứ hạng ấn tượng trong bảng
              xếp hạng châu Á – QS Rankings 2025
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              (8/11/2024) - 2 phút đọc
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Right side: Event Card */}
    <div className="rounded-lg bg-gray-100 border-[1px] border-gray-300 flex w-full flex-col gap-4 overflow-hidden">
      
        
    </div>
  </div>
</section>

      </div>
    </main>
  );
};

export default Home;