import React from 'react';
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '../ui/select';

import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogOverlay, 
  AlertDialogPortal, 
  AlertDialogTitle, 
  AlertDialogTrigger 
} from '../ui/alert-dialog';

import { Input } from '../ui/input';

const DropDown = () => {
  return (
    <Select>
      <SelectTrigger 
        className='w-full h-[54px] placeholder:text-grey-500 
        rounded-full p-regular-16 px-5 py-3 border-[1px] 
        border-slate-400 focus-visible:ring-transparent 
        focus:ring-transparent text-[16px] font-normal leading-[24px]'
      >
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem 
            value="dev" 
            className='py-3 cursor-pointer  focus:bg-gray-100 text-[14px] font-semibold leading-[20px]'
          >
            Dev
          </SelectItem>
          <SelectItem 
            value="charity" 
            className='py-3 cursor-pointer  focus:bg-gray-100 text-[14px] font-semibold leading-[20px]'
          >
            Charity
          </SelectItem>
          <SelectItem 
            value="blueberry" 
            className='py-3 cursor-pointer  focus:bg-gray-100 text-[14px] font-semibold leading-[20px]'
          >
            Blueberry
          </SelectItem>

          <AlertDialog>
            <AlertDialogTrigger 
              className="flex w-full text-lg font-bold leading-[20px] rounded-sm py-3 pl-8 hover:bg-gray-100 focus:text-slate-500"
            >
              Add new category
            </AlertDialogTrigger>
            <AlertDialogContent className='bg-white'>
              <AlertDialogHeader>
                <AlertDialogTitle>New Category</AlertDialogTitle>
                <AlertDialogDescription>
                <Input 
                  type="text" 
                  placeholder="Category name"        
                  className="h-[54px] focus-visible:ring-offset-0 placeholder:text-grey-500 rounded-full p-regular-16 px-4 py-3 border-[1px] border-slate-400 focus-visible:ring-transparent mt-3" 
                />
              </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Add</AlertDialogAction>
            </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default DropDown;