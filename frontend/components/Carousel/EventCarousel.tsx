"use-client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';

import LoaderSpinner from '../Share/LoaderSpinner';
import DotButton from './DotButton';

const EventCarousel = () => {

  // const router = useRouter();

  return (
    <section className='flex w-full flex-col mt-4 gap-4 overflow-hidden'>
      <div className='flex'>
        <figure className='event-carousel'>
          <Image
            src={"/assets/images/dtdb.jpg"}
            alt="card"
            fill
            className="absolute size-full rounded-xl border-none"
          />
          <div className='glassmorphism-black relative z-10 flex flex-col rounded-b-xl p-4'>
            <h2 className="text-14 font-semibold text-white">
              Đào tạo đặc biệt
            </h2>
            <p className="text-12 font-normal text-white">
              OU
            </p>
          </div>
        </figure>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <DotButton />
        <DotButton />
        <DotButton />
        <DotButton />
      </div>
    </section>
  );
};

export default EventCarousel;