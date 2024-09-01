import React from 'react';
import EventForm from '@/components/Forms/EventForm';

const CreateEvent = () => {
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