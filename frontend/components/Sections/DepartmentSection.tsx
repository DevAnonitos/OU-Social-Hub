import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { departmentLinks } from '@/constants';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const DepartmentSection = () => {
  return (
    <section className='flex flex-col space-y-8'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>
          Phòng ban
        </h2>
        <div className="flex gap-2">
          <Button>
            <Link href='/departments' prefetch={true} scroll={true}>
              Xem tất cả
            </Link>
          </Button>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {departmentLinks.map((department: any) => (
          <div key={department.id} className='relative w-full h-[134px] rounded-lg border border-gray-300 overflow-hidden hover:bg-grey-50 py-4 px-4 flex justify-between flex-col space-y-2'>
            <div className='flex items-center space-x-2'>
              <Image
                src={"https://res.cloudinary.com/dfdfeutqe/image/upload/v1731988609/OU%20Social%20Hub/OU_rdfqrj.jpg"}
                width={64}
                height={64}
                quality={75}
                decoding='async'
                className="rounded-full border border-gray-300 object-cover aspect-ratio"
                alt='OU'
              />
              <div className='flex flex-col'>
                <h4 className='font-semibold text-lg'>
                  {department.label}
                </h4>
                <p className='text-sm font-normal'>
                  #{department.tag}
                </p>
              </div>
            </div>
            <h3 className='font-bold'>
              Trường đại học Mở TP.Hồ Chí Minh
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DepartmentSection;