import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import EventsDataTable from '@/components/Tables/EventsDataTable';

const ManageEvents = () => {
  return (
    <main className='flex flex-col flex-grow overflow-y-auto max-w-screen mx-auto w-full h-full min-h-screen'>
      <div className='p-6 space-y-6 w-full h-full'>

        <section className='bg-cover bg-center py-3 md:py-5'>
          <div className='wrapper flex items-center justify-center sm:justify-between'>
            <h3 className='font-bold text-[20px] leading-[28px] md:text-[28px] md:leading-[36px]text-center sm:text-left'>
              Manage Events Post
            </h3>
            <Button asChild size="lg" className="rounded-full h-[44px] hidden sm:flex">
              <Link href="/create-event">
                Create Event
              </Link>
            </Button>
          </div>
        </section>

        <section className="wrapper my-8">
          <EventsDataTable />
        </section>

      </div>
    </main>
  );
};

export default ManageEvents;