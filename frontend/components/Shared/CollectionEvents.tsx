"use client";

import React, { Suspense, useState, useEffect, useMemo } from 'react';
import EventCard from '../Cards/EventCard';
import LoadingSkeleton from './LoadingSkeleton';

const CollectionEvents = () => {

  const [loading, setLoading] = useState(true);

  const skeletons = useMemo(() => Array.from({ length: 12 }), []);
  const eventCards = useMemo(() => Array.from({ length: 12 }), []);

  useEffect(() => {
    // Simulate a delay to showcase loading (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {loading ? (
          skeletons.map((_, index) => (
            <LoadingSkeleton key={index} />
          ))
        ) : (
          <Suspense fallback={<LoadingSkeleton />}>
            {eventCards.map((_, index) => (
              <EventCard key={index} />
            ))}
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default CollectionEvents;