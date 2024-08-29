"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const DynamicGroupStats = dynamic(() => import("@/components/Share/GroupStats"), {
  loading: () => <p>Loading...</p>
});

const DashBoard = () => {
  return (
    <div className='flex flex-col max-w-screen mx-auto w-full h-full min-h-screen'>
      <main className='p-6 space-y-6 w-full h-full'>
        <section className="w-full space-y-4">
          <h1 className="text-2xl font-bold">Hi, Admin👋</h1>
          <p className="text-md font-medium">
            Welcome to Dashboard OU Social Hub
          </p>
        </section>
        <DynamicGroupStats />
      </main>
    </div>
  );
};

export default DashBoard;