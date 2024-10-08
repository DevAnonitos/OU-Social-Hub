// CollectionEvents.tsx
"use client";

import React, { Suspense, useMemo, useEffect, useState } from 'react';
import EventCard from '../Cards/EventCard';
import LoadingSkeleton from './LoadingSkeleton';
import { useGetAllEvents } from '@/lib/react-query/queries';
import { useSearchParams } from 'next/navigation';

const CollectionEvents = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('query') || ''; 
  const { data: events = [], isLoading } = useGetAllEvents(searchQuery);
  
  const [filteredEvents, setFilteredEvents] = useState<any[]>([]);

  useEffect(() => {
    const category = searchParams.get('category');

    const filteredByQuery = events.filter((event: any) => {
      return event.eventTitle && event.eventTitle.toLowerCase().includes(searchQuery.toLowerCase());
    });
    let finalFilteredEvents = filteredByQuery;
    if (category && category !== 'All') {
      finalFilteredEvents = finalFilteredEvents.filter((event: any) =>
        event.eventCategory[0]?.categoryName === category
      );
    }

    setFilteredEvents(finalFilteredEvents);
  }, [events, searchParams, searchQuery]);

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
            {filteredEvents.map((event: any, index: number) => (
              <EventCard key={index} event={event} />
            ))}
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default CollectionEvents;
