"use client";

import React from 'react';
import * as z from 'zod';
import { 
  Form, 
  FormControl, 
  FormItem, 
  FormField,
  FormDescription, 
  FormLabel, 
  FormMessage,
} from '../ui/form';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/useAuthStore';
import axios from 'axios';
import { io } from 'socket.io-client';

const formSchema = z.object({
  content: z.string().min(3, {
    message: "Comment must have at least 3 characters",
  }),
});

const CommentInput = ({ eventId, parentId }: { eventId: string, parentId?: string }) => {

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  const { user, isAuthenticated } = useAuthStore();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const createComment = await axios.post("http://localhost:4000/api/v1/comments/create", {
        userId: user?.id,
        eventId: eventId,
        comment: {
          content: values.content,
          parentId: parentId ?? null,
        }
      });

      if (createComment.status === 200) {
        console.log("Event created successfully:", createComment.data);

        const socket = io("http://localhost:4000", { 
          transports: ['websocket', 'polling'] 
        });

        socket.emit("newComment", {
          userId: user?.id,
          eventId: eventId,
          content: values.content,
        });
        form.reset();
      }
      console.log(createComment);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form 
          className='space-y-8 after:clear-both after:table' 
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className='flex items-center space-x-2'>
                    <Image 
                      src={"/assets/images/dtdb.jpg"}
                      alt="hero image"
                      width={44}
                      height={44}
                      className="object-cover rounded-full"
                    />
                    <Textarea
                      placeholder='Write a comment ...'
                      {...field}
                      className='rounded-2xl border-[1px] border-slate-400 focus-visible:ring-transparent focus-visible:ring-offset-0'
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='float-right' disabled={!isAuthenticated}>
            Comment
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CommentInput;