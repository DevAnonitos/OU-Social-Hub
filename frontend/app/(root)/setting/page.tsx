import React from 'react';
import SettingForm from '@/components/Forms/SettingForm';

const Setting = () => {
  return (
    <main className='flex flex-col flex-grow overflow-y-auto max-w-screen mx-auto w-full h-full min-h-screen'>
      <div className='p-6 space-y-6 w-full h-full'>
        <SettingForm />
      </div>
    </main>
  );
};

export default Setting;