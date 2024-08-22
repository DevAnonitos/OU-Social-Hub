import React, { 
  PropsWithChildren, 
  useCallback, 
  useEffect, 
  useState 
} from 'react';
import { cn } from '@/lib/utils'
import { EmblaCarouselType } from 'embla-carousel'

import { DotButtonProps, useDotButtonType } from '@/types';

export const useDotButton = () => {

};

const DotButton = () => {
  return (
    <>
      <button
        className={cn(`size-2.5 bg-black cursor-pointer train duration-500 rounded-full`)}
      />
    </>
  );
};

export default DotButton;