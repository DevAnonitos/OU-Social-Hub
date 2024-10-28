
import React from 'react';
import BannerCarousel from '@/components/Carousel/BannerCarousel';
import CollectionEvents from '@/components/Shared/CollectionEvents';

const Home = () => {
  return (
    <main className='flex flex-col flex-grow overflow-y-auto max-w-screen mx-auto w-full h-full min-h-screen'>
      <div className='p-6 space-y-6 w-full h-full'>
        <div className='flex items-center border w-full h-[300px]'>
          <BannerCarousel/>
        </div>
        <CollectionEvents />
      </div>
    </main>
  );
};

export default Home;