import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import Image from 'next/image';


const FileUploader = () => {
  return (
    <div className='flex items-center h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50 border-[1px] border-slate-400'>
      <input className='cursor-pointer' />
      <div className='flex items-center justify-center flex-col py-5 text-grey-500'>
        <Image
          src={"/assets/icons/upload.svg"}
          width={77} 
          height={77}
          alt='File Upload'
        />
        <h3 className="mb-2 mt-2">Drag photo here</h3>
        <p className="p-medium-12 mb-4">SVG, PNG, JPG</p>
        <Button type="button" className="rounded-full">
          Select from computer
        </Button>
      </div>
    </div>
  );
};

export default FileUploader;