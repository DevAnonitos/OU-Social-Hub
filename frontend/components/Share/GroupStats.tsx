import React from 'react';
import StatCard from '../Cards/StatCard';

const GroupStats = () => {
  return (
    <div>
      <section className='flex flex-col sm:flex-row xl:gap-6 w-full justify-between gap-2'>
          <StatCard />
          <StatCard />
          <StatCard />
          <StatCard />
        </section>
    </div>
  );
};

export default GroupStats;
