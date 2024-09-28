"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '../ui/button';
import { bannerCarousel } from '@/constants';

export default function BannerCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, skipSnaps: false },
    [Autoplay({ delay: 3000 })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {bannerCarousel.map((banner, index) => (
            <div key={banner.id} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative h-[300px] w-full">
                <Image
                  src={banner.imageUrl}
                  alt={banner.title}
                  layout="fill"
                  quality={85}
                  priority={index === 0}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white space-y-4">
                  <h2 className="text-4xl font-bold">{banner.title}</h2>
                  <Button>View Page</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute w-12 h-12 top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2"
      >
        &#10094;
      </button>
      <button
        onClick={scrollNext}
        className="absolute w-12 h-12 top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2"
      >
        &#10095;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {/* {bannerCarousel.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi.scrollTo(index)}
            className={`w-3 h-3 rounded-full ${
              selectedIndex === index ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))} */}
      </div>
    </div>
  );
}