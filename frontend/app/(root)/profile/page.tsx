import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Profile = () => {
  return (
    <main className='flex flex-col max-w-screen mx-auto w-full h-full min-h-screen'>
      <div className='p-6 space-y-6 w-full h-full'>
        <section className='bg-cover bg-center py-5 md:py-10'>
          <div className='wrapper flex items-center justify-center sm:justify-between'>
            <Button asChild size="lg" className="button hidden sm:flex">
              <Link href="/explore">
                Explore More Events
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Profile;