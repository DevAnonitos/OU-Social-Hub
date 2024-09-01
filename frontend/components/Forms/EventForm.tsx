"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import * as z from 'zod';
import { eventFormSchema } from '@/lib/validator';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

const EventForm = () => {

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
                    className="" 
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
                  <Input 
                    placeholder="Event title" 
                    {...field} 
                    className="" 
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
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className='h-72'>
                  <Textarea 
                    placeholder="Description" 
                    {...field} 
                    className="textarea rounded-2xl" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <Button type='submit' className='col-span-2 w-full text-lg font-bold rounded-full h-[54px]'>
          Submitting
        </Button>
      </form>
    </Form>
  );
};

export default EventForm;