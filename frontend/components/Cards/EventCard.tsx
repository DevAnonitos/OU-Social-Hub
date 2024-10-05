import React from 'react';
import Link from 'next/link';
import { Card } from '../ui/card';
import { formatDateTime } from '@/lib/utils';
import { DotsVerticalIcon, BookmarkFilledIcon } from '@radix-ui/react-icons';

const EventCard = ({event}: any) => {
  return (
    <Card 
      className='group relative flex min-h-[250px] w-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md md:min-h-[345px] border border-slate-400 cursor-pointer'
    >

      <Link 
        href={`/events/${event?.id}`} 
        className='flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500 border-b-[1px] border-slate-200' 
        style={{ backgroundImage: `url(${event?.imageUrl || '/assets/images/dtdb.jpg'})` }}
        prefetch={true}
        scroll={true}
      />
      
      <div className='absolute right-2 top-2 flex flex-col rounded-xl bg-white p-3 shadow-sm transition-all border-[1px] border-slate-400'>
        <DotsVerticalIcon className='w-5 h-5' />
      </div>

      <div className='flex min-h-[155px] flex-col gap-3 p-5 md:gap-4'>
        <div className='flex gap-2'>
          <p className='text-[14px] font-semibold leading-[20px] rounded-full bg-grey-500/10 px-4 py-1 text-grey-500'>
            {event.eventCategory?.categoryName || 'Uncategorized'}
          </p>
        </div>

        {/* Format Datetime */}
        <p className='text-gray-500 text-[16px] font-medium leading-[24px]'>
          {formatDateTime(event.startDateTime).dateOnly}
        </p>
        
        <Link href={`/events/${event.id}`}>
          <p className='text-[20px] font-medium leading-[30px] line-clamp-2 flex-1 text-black'>
            {event.eventTitle}
          </p>
        </Link>

        <div className='flex justify-between flex-row w-full'>
          <p className='p-medium-14 md:p-medium-16 text-grey-600'>
            {event?.organizer.username}
          </p>
          <p className='p-medium-14 md:p-medium-16 text-grey-600 flex items-center'>
            {event?.likes || '0'} 
            <BookmarkFilledIcon className='ml-2 w-5 h-5' />
          </p>
        </div>
      </div>
    </Card>
  );
};

export default EventCard;
