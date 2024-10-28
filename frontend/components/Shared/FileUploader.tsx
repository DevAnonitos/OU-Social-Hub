"use client";

import React, { useRef, Dispatch, SetStateAction } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

type FileUploaderProps = {
  onFieldChange: (url: string) => void;
  imageUrl: string;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

const FileUploader = ({ onFieldChange, imageUrl, setFiles }: FileUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onFieldChange(reader.result as string); 
      };
      reader.readAsDataURL(file); 
      setFiles([file]);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className='flex items-center h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50 border-[1px] border-slate-400'>
      <input
        type='file'
        accept='image/*'
        onChange={handleFileChange}
        className='hidden'
        ref={fileInputRef} 
      />
      {imageUrl ? (
        <div className="flex h-full w-full flex-1 justify-center ">
          <Image
            src={imageUrl}
            alt="image"
            width={250}
            height={250}
            className="w-full object-cover object-center"
          />
        </div>
      ): (
        <div className='flex items-center justify-center flex-col py-5 text-grey-500'>
          <Image
            src={imageUrl || "/assets/icons/upload.svg"}
            width={77}
            height={77}
            alt='File Upload'
          />
          <h3 className="mb-2 mt-2">Drag photo here</h3>
          <p className="p-medium-12 mb-4">SVG, PNG, JPG</p>
          <Button type="button" className="rounded-full" onClick={handleButtonClick}>
            Select from computer
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
