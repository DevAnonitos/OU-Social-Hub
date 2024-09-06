"use client";

import React, { Suspense, useState, useEffect } from 'react';
import EventCard from '../Cards/EventCard';
import LoadingSkeleton from './LoadingSkeleton';

const CollectionEvents = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to showcase loading (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust this duration as needed for your use case

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 12 }).map((_, index) => (
              <LoadingSkeleton key={index} />
            ))
          : Array.from({ length: 12 }).map((_, index) => (
              <EventCard key={index} />
            ))}
      </div>
    </div>
  );
};

export default CollectionEvents;