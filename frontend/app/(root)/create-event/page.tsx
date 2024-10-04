"use client";

import React, { useEffect, useState } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import { useRouter } from 'next/navigation';
import EventForm from '@/components/Forms/EventForm';

const CreateEvent = () => {

  const { isAuthenticated } = useAuthStore();
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      setShowAlert(true); 
    }
  }, [isAuthenticated]);

  const handleSignInRedirect = () => {
    setShowAlert(false);
    router.push('/sign-in'); 
  };


  return (
    <main className='flex flex-col max-w-screen mx-auto w-full h-full min-h-screen'>
      <div className='p-6 space-y-6 w-full h-full'>
      <div className='wrapper'>
          {isAuthenticated ? (
            <EventForm />
          ) : (
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              {/* Alert dialog */}
              {showAlert && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                  <strong className="font-bold">Warning!</strong>
                  <span className="block sm:inline"> You must be signed in to create an event.</span>
                  <button
                    onClick={handleSignInRedirect}
                    className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Sign In
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default CreateEvent;