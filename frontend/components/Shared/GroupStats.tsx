"use client";

import React from 'react';
import StatCard from '../Cards/StatCard';
import { useGetEventsCount, useGetUsersCount } from '@/lib/react-query/queries';

const GroupStats = () => {

  const { data: eventCount } = useGetEventsCount();
  const { data: userCount } = useGetUsersCount();

  return (
    <div>
      <section className='flex flex-col sm:flex-row xl:gap-6 w-full justify-between gap-2'>
          <StatCard
            count={userCount || 0}
            label='Total Users'
          />
          <StatCard
            count={eventCount || 0}
            label='Total Events'
          />
          <StatCard
            count={userCount || 0}
            label='Total Users'
          />
          <StatCard
            count={userCount || 0}
            label='Total Users'
          />
        </section>
    </div>
  );
};

export default GroupStats;
