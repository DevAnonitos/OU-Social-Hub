import React from 'react';
import EventDetailCard from '@/components/Cards/EventDetailCard';
import EventComment from '@/components/Comment/EventComment';

const EventsDetail = () => {
  return (
    <main className='flex flex-col max-w-screen mx-auto w-full h-full min-h-screen'>
      <div className='p-6 space-y-6 w-full h-full'>
        <EventDetailCard />
        <div>
          <EventComment />
        </div>
      </div>
    </main>
  );
};

export default EventsDetail;