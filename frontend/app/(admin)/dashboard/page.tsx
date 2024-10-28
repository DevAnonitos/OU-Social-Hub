"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import GroupStats from '@/components/Shared/GroupStats';
import EventsDataTable from '@/components/Tables/EventsDataTable';
import UpComingEvent from '@/components/Shared/UpComingEvent';
import EventChart from '@/components/Charts/EventChart';

// const DynamicGroupStats = dynamic(() => import("@/components/Share/GroupStats"), {
//   loading: () => <p>Loading...</p>
// });

const DashBoard = () => {

  return (
    <div className='flex flex-col flex-grow overflow-y-auto max-w-screen mx-auto w-full h-full min-h-screen'>
      <main className='p-6 space-y-6 w-full h-full'>
        <section className="w-full flex items-center justify-between space-y-4">
          <div>
            <h1 className="text-2xl font-bold">Hi, Admin👋</h1>
            <p className="text-md font-medium">
              Welcome to Dashboard OU Social Hub
            </p>
          </div>
          <h2>
            Download full Report
          </h2>
        </section>
        <GroupStats />
        <div className='flex flex-col sm:flex-row xl:gap-6 w-full justify-between gap-2'>
          <section className='w-full'>
            <UpComingEvent />
          </section>
          <section className='w-full'>
            <EventChart />
          </section>
        </div>
        <EventsDataTable />
      </main>
    </div>
  );
};

export default DashBoard;