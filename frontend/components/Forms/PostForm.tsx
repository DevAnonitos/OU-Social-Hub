"use client";

import * as z from 'zod';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { eventFormSchema } from '@/lib/validator';
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormMessage, 
  FormItem, 
  FormLabel,
} from '../ui/form';
import axios from 'axios';

import TextEditor from '../Shared/TextEditor';

import { useAuthStore } from '@/stores/useAuthStore';

type EventFormProps = {
  userId: string
};

const PostForm = () => {

  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [files, setFiles] = useState<File[]>([]);

  const router = useRouter();
  const { user } = useAuthStore();

  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      title: "",
      description: "",
      location: "",
      startDateTime: new Date(),
      endDateTime: new Date(),
      categoryIds: [],
      url: "",
      imageUrl: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof eventFormSchema>) => {
    try {
      const createEvent = await axios.post("http://localhost:4000/api/v1/events/create", {
        userId: user?.id,
        event: {...values},
      });

      if (createEvent.status === 200) {
        console.log("Event created successfully:", createEvent.data);
        form.reset();
        router.push('/');
      }
      console.log(createEvent);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form className='flex flex-col gap-6' onSubmit={form.handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-6 md:flex-row'>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-bold text-lg'>
                  Tiêu đề bài viết
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder='Nhập tiêu đề bài viết tại đây...' 
                    className='w-full flex items-center border-gray-300 border focus-visible:ring-0 focus-visible:ring-offset-0'
                    {...field} 
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
              <FormItem className='w-full'>
                <FormLabel className='font-bold text-lg'>
                  Chủ đề bài viết
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder='Nhập tiêu đề bài viết tại đây...' 
                    className='w-full flex items-center border-gray-300 border focus-visible:ring-0 focus-visible:ring-offset-0'
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex flex-col gap-6 md:flex-row'>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-bold text-lg'>
                  Mô tả bài viết
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder='Nhập mô tả bài viết' 
                    className='border focus-visible:ring-0 border-gray-300 focus-visible:ring-offset-0'
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold text-lg'>Nội dung bài viết</FormLabel>
              <FormControl>
                <TextEditor />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex items-center justify-end gap-4'>
          <Button variant='secondary' className='px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600'>
            Hủy bài viết
          </Button>
          <Button variant='outline' className='px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100'>
            Lưu bản nháp
          </Button>
          <Button type='submit' className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700'>
            Đăng bài viết
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PostForm;