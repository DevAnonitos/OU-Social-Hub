import React from 'react';
import EventCard from '@/components/Cards/EventCard';

const Home = () => {
  return (
    <main className='flex flex-col max-w-screen mx-auto w-full h-full min-h-screen'>
        <div className='p-6 space-y-6 w-full h-full'>

          <div className='flex items-center border border-slate-400 w-full h-[300px] rounded-2xl'>

          </div>

          <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
    </main>
  );
};

export default Home;