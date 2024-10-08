"use client";

import React from 'react';
import EventDetailCard from '@/components/Cards/EventDetailCard';
import EventComment from '@/components/Comment/EventComment';
import { useGetEventById } from '@/lib/react-query/queries';

const EventsDetail = ({ params }: { params: { id: string } }) => {

  const { data: event } = useGetEventById(params.id);

  return (
    <main className='flex flex-col max-w-screen mx-auto w-full h-full min-h-screen'>
      <div className='p-6 space-y-6 w-full'>
        <EventDetailCard event={event} />
        <div>
          <EventComment eventId={event?.id} />
        </div>
      </div>
    </main>
  );
};

export default EventsDetail;