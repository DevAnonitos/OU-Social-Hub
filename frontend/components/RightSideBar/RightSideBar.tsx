import React from 'react';
import Image from 'next/image';
import EventCarousel from '../Carousel/EventCarousel';
import { Button } from '../ui/button';

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
          <div className='flex cursor-pointer items-center justify-between w-full h-14 rounded-sm my-2'>
            <figure className='flex items-center gap-2'>
              <Image
                src={"/assets/images/dtdb.jpg"}
                alt='User'
                width={44}
                height={44}
                className='object-contain rounded-full'
              />
              <h3 className='text-14 font-semibold text-black'>
                BaoAka
              </h3>
            </figure>
            <Button>
              Views
            </Button>
          </div>

          <div className='flex cursor-pointer items-center justify-between w-full h-14 rounded-sm my-2'>
            <figure className='flex items-center gap-2'>
              <Image
                src={"/assets/images/dtdb.jpg"}
                alt='User'
                width={44}
                height={44}
                className='object-contain rounded-full'
              />
              <h3 className='text-14 font-semibold text-black'>
                BaoAka
              </h3>
            </figure>
            <Button>
              Views
            </Button>
          </div>

          <div className='flex cursor-pointer items-center justify-between w-full h-14 rounded-sm my-2'>
            <figure className='flex items-center gap-2'>
              <Image
                src={"/assets/images/dtdb.jpg"}
                alt='User'
                width={44}
                height={44}
                className='object-contain rounded-full'
              />
              <h3 className='text-14 font-semibold text-black'>
                BaoAka
              </h3>
            </figure>
            <Button>
              Views
            </Button>
          </div>

          <div className='flex cursor-pointer items-center justify-between w-full h-14 rounded-sm my-2'>
            <figure className='flex items-center gap-2'>
              <Image
                src={"/assets/images/dtdb.jpg"}
                alt='User'
                width={44}
                height={44}
                className='object-contain rounded-full'
              />
              <h3 className='text-14 font-semibold text-black'>
                BaoAka
              </h3>
            </figure>
            <Button>
              Views
            </Button>
          </div>

          <div className='flex cursor-pointer items-center justify-between w-full h-14 rounded-sm my-2'>
            <figure className='flex items-center gap-2'>
              <Image
                src={"/assets/images/dtdb.jpg"}
                alt='User'
                width={44}
                height={44}
                className='object-contain rounded-full'
              />
              <h3 className='text-14 font-semibold text-black'>
                BaoAka
              </h3>
            </figure>
            <Button>
              Views
            </Button>
          </div>

          

        </div>
      </section>
    </div>
  );
};

export default RightSideBar;