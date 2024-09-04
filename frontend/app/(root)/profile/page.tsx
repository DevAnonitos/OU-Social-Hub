import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CollectionEvents from '@/components/Shared/CollectionEvents';

const Profile = () => {
  return (
    <main className='flex flex-col max-w-screen mx-auto w-full h-full min-h-screen'>
      <div className='p-6 space-y-6 w-full h-full'>
        <section className='bg-cover bg-center py-5 md:py-10'>
          <div className='wrapper flex items-center justify-center sm:justify-between'>
            <h3 className='font-bold text-[20px] leading-[28px] md:text-[28px] md:leading-[36px]text-center sm:text-left'>My Tickets</h3>
            <Button asChild size="lg" className="rounded-full h-[54px] hidden sm:flex">
              <Link href="/explore">
                Explore More Events
              </Link>
            </Button>
          </div>
        </section>

        <section className="wrapper my-8">
          <CollectionEvents />
        </section>


        <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className='font-bold text-[20px] leading-[28px] md:text-[28px] md:leading-[36px]text-center sm:text-left'>Events Organized</h3>
          <Button asChild size="lg" className="rounded-full h-[54px] hidden sm:flex">
            <Link href="/create-event">
              Create New Event
            </Link>
          </Button>
        </div>
      </section>
      </div>
    </main>
  );
};

export default Profile;