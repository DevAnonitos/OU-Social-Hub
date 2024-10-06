import React from 'react'
import Image from "next/image";
import { formatDateTime } from '@/lib/utils';

const EventDetailCard = ({ event }: any) => {
  return (
    <>
      <section className='flex justify-center bg-grey-50 bg-dotted-pattern bg-contain'>
          <div className='grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl'>
            <Image 
              src={event?.imageUrl}
              alt="hero image"
              width={1000}
              height={1000}
              quality={100}
              priority
              className="h-full min-h-[300px]  object-cover object-center"
            />
            <div className='flex w-full flex-col gap-8 p-5 md:p-10'>
              <div className='flex flex-col gap-5'>
                <h2 className='font-medium text-[32px] leading-[40px] lg:text-[36px] lg:leading-[44px] xl:text-[40px] xl:leading-[48px]'>
                  {event?.eventTitle}
                </h2>
                <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                  <div className='flex gap-3'>
                    <p className="p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-grey-500">
                      {event?.eventCategory[0]?.categoryName || "No category"}
                    </p>
                  </div>
                  <p className=" text-[20px] font-medium leading-[30px] ml-2 mt-2 sm:mt-0">
                    By{' '}
                    <span className="text-slate-500">
                      {event?.organizer.username}
                    </span>
                  </p>
                </div>
              </div>

              <div className='flex flex-col gap-5'>
                <div className='flex gap-2 md:gap-3'>
                  <Image 
                    src="/assets/icons/calendar.svg" 
                    alt="calendar" 
                    width={32} 
                    height={32} 
                  />
                  <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">
                    <p>
                      {formatDateTime(event?.startDateTime).dateOnly} - {' '}
                    </p>
                    <p>
                      {' '} - {formatDateTime(event?.endDateTime).dateOnly}
                    </p>
                  </div>
                </div>

                <div className="p-regular-20 flex items-center gap-3">
                  <Image 
                    src="/assets/icons/location.svg" 
                    alt="location" 
                    width={32} 
                    height={32} 
                  />
                  <p className="p-medium-16 lg:p-regular-20">
                    {event?.eventLocation}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="p-medium-16 lg:p-regular-18">
                  {event?.eventDescription}
                </p>
                <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline cursor-pointer">
                  {event?.linkUrl}
                </p>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default EventDetailCard