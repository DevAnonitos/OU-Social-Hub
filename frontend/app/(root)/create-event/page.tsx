"use client";

import React, { useEffect, useState } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import { useRouter } from 'next/navigation';
import EventForm from '@/components/Forms/EventForm';

const CreateEvent = () => {

  const { isAuthenticated } = useAuthStore();
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();

  return (
    <main className='flex flex-col max-w-screen mx-auto w-full h-full min-h-screen'>
      <div className='p-6 space-y-6 w-full h-full'>
        <div className='wrapper'>
          <EventForm />
        </div>
      </div>
    </main>
  );
};

export default CreateEvent;