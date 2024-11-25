import React from 'react';
import Image from 'next/image';
import { AvatarUserProps } from '@/types';

const AvatarUser: React.FC<AvatarUserProps> = ({
  src,
  alt,
  width = 50,
  height = 50,
  priority = true,
  quality = 85,
  decoding = 'async',
  className = 'object-cover rounded-full'
}) => (
  <div className="avatar-user">
    <Image 
      src={src} 
      alt={alt} 
      width={width} 
      height={height} 
      priority={priority} 
      quality={quality} 
      decoding={decoding} 
      className={className} 
    />
  </div>
);

export default React.memo(AvatarUser);