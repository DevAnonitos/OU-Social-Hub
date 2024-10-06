// CollectionEvents.tsx
"use client";

import React, { Suspense, useMemo, useEffect, useState } from 'react';
import EventCard from '../Cards/EventCard';
import LoadingSkeleton from './LoadingSkeleton';
import { useGetAllEvents } from '@/lib/react-query/queries';
import { useSearchParams } from 'next/navigation';

const CollectionEvents = () => {
  const { data: events = [], isLoading } = useGetAllEvents();
  const searchParams = useSearchParams();
  
  const [filteredEvents, setFilteredEvents] = useState<any[]>([]);

  useEffect(() => {
    const category = searchParams.get('category');
    
    if (category && category !== 'All') {
      const filtered = events.filter((event: any) => event.eventCategory[0]?.categoryName === category);
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(events);
    }
  }, [events, searchParams]);

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
