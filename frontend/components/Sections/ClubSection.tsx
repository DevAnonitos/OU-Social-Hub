"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import { clubLinks } from '@/constants';

const ClubSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 5; 
  const maxIndex = clubLinks.length - visibleSlides;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="flex flex-col space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Câu lạc bộ - Đội nhóm OU</h2>
        <div className="flex gap-2">
          <button
            className="p-2 rounded-full border"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <CircleArrowLeft />
          </button>
          <button
            className="p-2 rounded-full border"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
          >
            <CircleArrowRight />
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden pb-2">
        <div
          className="grid grid-flow-col auto-cols-[minmax(164px,1fr)] gap-6 transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * (164 + 24)}px)`,
          }}
        >
          {clubLinks.map((club: any, index: number) => (
            <div
              key={club.id}
              className="relative aspect-square w-full max-w-[164px] rounded-lg border border-gray-300 overflow-hidden"
            >
              <Image
                src={club.logoImage}
                alt={club.label}
                layout="fill"
                className="rounded-lg"
                placeholder="blur"
                blurDataURL="https://via.placeholder.com/10x10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubSection;
