"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import * as z from 'zod';
import { eventFormSchema } from '@/lib/validator';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

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

import { useAuthStore } from '@/stores/useAuthStore';

type EventFormProps = {
  userId: string
};

const PostForm = () => {

  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [files, setFiles] = useState<File[]>([]);

  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '',
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      form.setValue('description', html);
    },
  });

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
        editor?.commands.setContent('');
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <EditorContent editor={editor} className="min-h-[200px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background" />
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