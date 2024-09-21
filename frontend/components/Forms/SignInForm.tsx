"use client";

import React from 'react';
import * as z from 'zod';
import { useForm } from "react-hook-form";
import { signInFormSchema } from '@/lib/validator';
import { zodResolver } from "@hookform/resolvers/zod";
import { 
    Form, 
    FormControl, 
    FormField, 
    FormItem, 
    FormMessage, 
    FormLabel 
} from '../ui/form';
import Link from 'next/link';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

import axios from "axios";
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/useAuthStore';
import { instance } from '@/lib/axios/interceptor';

const SignInForm = () => {

  const router = useRouter();
  const { setAuth } = useAuthStore();

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signInFormSchema>) => {
    try {
      const response = await instance.post('http://localhost:4000/api/v1/auth/signin', {
        username: data.username,
        password: data.password,
      });

      console.log(response.data);

      const { accessToken, refreshToken, id, username, role } = response.data;

      setAuth(accessToken, refreshToken, { id, username, role });

      router.push('/');
    } catch (error: any) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-5 items-center 
        h-full bg-slate-50 space-y-4 p-10 w-[450px] border border-slate-400 rounded-xl'
      >
          <h2 className='text-2xl font-bold'>
            Sign In 
          </h2>
          <FormField
            name='username'
            control={form.control}
            render={({ field}) => (
              <FormItem className='w-full'>
                <FormLabel className='text-md font-semibold'>
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter a username'
                    {...field}
                    className='w-full h-[50px] placeholder:text-grey-500 p-regular-16 px-5 py-3 border-[1px] border-slate-400 focus-visible:ring-transparent focus:ring-transparent'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name='password'
            control={form.control}
            render={({ field}) => (
              <FormItem className='w-full'>
                <FormLabel className='text-md font-semibold'>
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='Enter a password'
                    {...field}
                    className='w-full h-[50px] placeholder:text-grey-500  p-regular-16 px-5 py-3 border-[1px] border-slate-400 focus-visible:ring-transparent focus:ring-transparent'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex flex-col w-full space-y-4'>
            <Button type='submit' className='col-span-2 w-full text-lg font-bold  h-[50px]'>
              Log in 
            </Button>
            {/* <Separator className='border-[1px] border-slate-300 ' />
            <Button
              type="button"
              variant="outline"
              className="w-full border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-100 h-[50px]"
            >
              Login with Google
            </Button> */}
          </div>
      </form>
    </Form>
  );
};

export default SignInForm;