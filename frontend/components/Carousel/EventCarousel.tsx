"use-client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';

import LoaderSpinner from '../Share/LoaderSpinner';

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
        </figure>
      </div>
      <div className='flex justify-center gap-2'>

      </div>
    </section>
  );
};

export default EventCarousel;