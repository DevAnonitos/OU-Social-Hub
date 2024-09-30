"use-client";

import React, { useCallback} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';

import LoaderSpinner from '../Shared/LoaderSpinner';
import DotButton from './DotButton';
import { useDotButton } from './DotButton';

const EventCarousel = () => {

  const router = useRouter();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay || !("stopOnInteraction" in autoplay.options)) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? (autoplay.reset as () => void)
        : (autoplay.stop as () => void)

    resetOrStop()
  }, []);
  

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );


  return (
    <section className='flex w-full flex-col mt-4 gap-4 overflow-hidden'>
      <div className='flex'>
        <figure className='event-carousel'>
          <Image
            src={"/assets/images/dtdb.jpg"}
            alt="card"
            fill
            loading='lazy'
            decoding='async'
            className="absolute size-full rounded-xl border-none duration-700 ease-in-out scale-100 blur-0 grayscale-0 object-cover"
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
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            selected={index === selectedIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default EventCarousel;