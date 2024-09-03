"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import * as z from 'zod';
import { eventFormSchema } from '@/lib/validator';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import DropDown from '../Shared/DropDown';

import { Calendar } from '../ui/calendar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormLabel, 
  FormMessage, 
  FormItem, 
} from '../ui/form';
import FileUploader from '../Shared/FileUploader';
import DatePicker from '../Shared/DatePicker';

const EventForm = () => {

  const [date, setDate] = React.useState<Date | undefined>(new Date())

  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
  });

  return (
    <Form {...form}>
      <form className='flex flex-col gap-5'>
        <div className='flex flex-col gap-5 md:flex-row'>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input 
                    placeholder="Event title" 
                    {...field} 
                    className="w-full h-[54px] placeholder:text-grey-500 rounded-full p-regular-16 px-5 py-3 border-[1px] border-slate-400 focus-visible:ring-transparent focus:ring-transparent" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <DropDown />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='flex flex-col gap-5 md:flex-row'>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className='h-72'>
                  <Textarea 
                    placeholder="Description" 
                    {...field} 
                    className="textarea rounded-2xl border-[1px] border-slate-400 focus-visible:ring-transparent focus-visible:ring-offset-0" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='flex flex-col gap-5 md:flex-row'>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className='h-72'>
                  <FileUploader />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className='flex flex-col gap-5 md:flex-row'>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <div className='flex items-center h-[54px] w-full overflow-hidden rounded-full px-4 py-2 border-[1px] border-slate-400'>
                  <Image
                    src="/assets/icons/location.svg"
                    alt="calendar"
                    width={24}
                    height={24}
                  />
                  <Input
                    className='h-[54px] focus-visible:ring-offset-0 placeholder:text-grey-500 rounded-full p-regular-16 px-4 py-3 border-none focus-visible:ring-transparent'
                    {...field}
                    placeholder='Event location or Online'
                  />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='flex flex-col gap-5 md:flex-row'>
          {/* Calendar */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <div className='flex items-center h-[54px] w-full overflow-hidden rounded-full px-4 py-2 border-[1px] border-slate-400'>
                  <Image
                    src="/assets/icons/calendar.svg"
                    alt="calendar"
                    width={24}
                    height={24}
                  />
                  <p className="ml-3 whitespace-nowrap text-grey-600">Start Date:</p>
                  <DatePicker />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Calendar */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <div className='flex items-center h-[54px] w-full overflow-hidden rounded-full px-4 py-2 border-[1px] border-slate-400'>
                  <Image
                    src="/assets/icons/calendar.svg"
                    alt="calendar"
                    width={24}
                    height={24}
                  />
                  <p className="ml-3 whitespace-nowrap text-grey-600">End Date:</p>
                  <DatePicker />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='flex flex-col gap-5 md:flex-row'>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <div className='flex items-center h-[54px] w-full overflow-hidden rounded-full px-4 py-2 border-[1px] border-slate-400'>
                  <Image
                    src="/assets/icons/url.svg"
                    alt="calendar"
                    width={24}
                    height={24}
                  />
                  <Input
                    className='h-[54px] focus-visible:ring-offset-0 placeholder:text-grey-500 rounded-full p-regular-16 px-4 py-3 border-none focus-visible:ring-transparent'
                    {...field}
                    placeholder='Link URL'
                  />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <Button type='submit' className='col-span-2 w-full text-lg font-bold rounded-full h-[54px]'>
          Submit Event Form
        </Button>
      </form>
    </Form>
  );
};

export default EventForm;