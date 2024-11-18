import React from 'react';
import LoaderSpinner from '@/components/Shared/LoaderSpinner';

const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <LoaderSpinner />
    </div>
  );
};

export default Loading;