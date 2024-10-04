"use client";

import React, { Suspense, useMemo } from 'react';
import EventCard from '../Cards/EventCard';
import LoadingSkeleton from './LoadingSkeleton';
import { useGetAllEvents } from '@/lib/react-query/queries';

const CollectionEvents = () => {
  // Fetch events using react-query hook
  const { data: events = [], isLoading } = useGetAllEvents();

  const skeletons = useMemo(() => Array.from({ length: 12 }), []);

  return (
    <div>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {isLoading ? (
          skeletons.map((_, index) => (
            <LoadingSkeleton key={index} />
          ))
        ) : (
          <Suspense fallback={<LoadingSkeleton />}>
            {events.map((event: any, index: string) => (
              <EventCard key={index} event={event} />
            ))}
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default CollectionEvents;
