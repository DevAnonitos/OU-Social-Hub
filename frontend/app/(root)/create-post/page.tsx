"use client";

import React, { useEffect, useState } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import { useRouter } from 'next/navigation';
import PostForm from '@/components/Forms/PostForm';

const CreateEvent = () => {

  const { isAuthenticated } = useAuthStore();
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();

  return (
    <main className='col-span-12 flex flex-col flex-grow overflow-y-auto max-w-screen mx-auto w-full h-full min-h-screen'>
      <div className='space-y-8 w-full h-full py-6'>
        <PostForm />
      </div>
    </main>
  );
};

export default CreateEvent;