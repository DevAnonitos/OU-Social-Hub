import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { HeartIcon, Bookmark } from 'lucide-react';
import PostLoadingSkeleton from '../Shared/PostLoadingSkeleton';

const PostSection = () => {
  return (
    <section className='flex flex-col space-y-6'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>Bài viết mới nhất</h2>
        <Button className='px-4 py-2 rounded-lg bg-black text-white'>
          Khám phá
        </Button>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {Array(4).fill(0).map((_, idx) => (
          <div
            key={idx}
            className='bg-white rounded-lg shadow-md border border-gray-300 overflow-hidden'
          >
            {/* Hình ảnh */}
            <div
              className='relative h-[188px] w-full flex items-center justify-center'
            >
              {/* Overlay text or logo */}
              <div 
                className='absolute inset-0 bg-black/40 flex justify-end items-start p-4'
              >
                <Image
                  src={"/assets/images/ĐTĐB.png"}
                  alt='Demo'
                  layout='fill'
                  loading="eager"
                  objectFit='cover'
                  className='object-cover'
                  decoding='async'
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 188px"
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
              <div className='flex items-center w-full text-sm'>
                <Image
                  src='/assets/images/ĐTĐB.png'
                  width={40}
                  height={40}
                  alt='Avatar'
                  priority
                  className='rounded-full border-[2px] mr-2'
                />
                <div className='flex flex-row w-full justify-between items-center'>
                  <div className='flex flex-col items-start space-y-1'>
                    <span className='font-semibold text-md'>Trương Nguyễn Quỳnh Anh</span>
                    <span className='text-xs font-normal'>16/10/2024</span>
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
  );
};

export default PostSection;
