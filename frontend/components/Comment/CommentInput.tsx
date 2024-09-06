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

const formSchema = z.object({
  content: z.string().min(3, {
    message: "Comment must have at least 3 characters",
  }),
});

const CommentInput = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <div>
      <Form {...form}>
        <form className='space-y-8 after:clear-both after:table'>
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
                      className='rounded-2xl border-[1px] border-slate-400 focus-visible:ring-transparent focus-visible:ring-offset-0'
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <Button type='submit' className='float-right'>
            Comment
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CommentInput;