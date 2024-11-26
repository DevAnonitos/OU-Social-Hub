"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import * as z from 'zod';
import { eventFormSchema } from '@/lib/validator';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import DropDown from '../Shared/DropDown';

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormMessage, 
  FormItem, 
} from '../ui/form';
import FileUploader from '../Shared/FileUploader';
import DatePicker from '../Shared/DatePicker';
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
      <form className='flex flex-col gap-5' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input 
                  placeholder='Nhập tiêu đề bài viết tại đây...' 
                  className='w-full flex items-center text-3xl border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0 placeholder:text-3xl font-bold'
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TextEditor />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default PostForm;