"use client";

import React, { useState } from 'react';
import * as z from 'zod';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpFormSchema } from '@/lib/validator';
import { 
    Form, 
    FormControl, 
    FormField, 
    FormItem, 
    FormMessage, 
    FormLabel 
} from '../ui/form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useRouter } from 'next/navigation';
import axios from "axios";

import { useAuthStore } from '@/stores/useAuthStore';
import { instance } from '@/lib/axios/interceptor';

const SignUpForm = () => {

  const router = useRouter();

  const { user, accessToken, refreshToken, setAuth } = useAuthStore();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),  
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signUpFormSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await instance.post('http://localhost:4000/api/v1/auth/signup', {
        username: data.username,
        email: data.email,
        password: data.password,
      });
       
      const { accessToken, refreshToken, id, username, role } = response.data;

      setAuth(accessToken, refreshToken, { id, username, role });

      router.push('/');
    } catch (error) {
      console.error("Error during sign-up:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Form {...form}>
      <form 
      className='flex flex-col gap-5 items-center 
        h-full bg-slate-50 space-y-4 p-10 w-[450px] border 
        border-slate-400 rounded-xl' 
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h2 className='text-2xl font-bold'>
          Sign Up
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
            name='email'
            control={form.control}
            render={({ field}) => (
              <FormItem className='w-full'>
                <FormLabel className='text-md font-semibold'>
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter a email'
                    {...field}
                    className='w-full h-[50px] placeholder:text-grey-500  p-regular-16 px-5 py-3 border-[1px] border-slate-400 focus-visible:ring-transparent focus:ring-transparent'
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
                    placeholder='Enter a confirm password'
                    {...field}
                    className='w-full h-[50px] placeholder:text-grey-500  p-regular-16 px-5 py-3 border-[1px] border-slate-400 focus-visible:ring-transparent focus:ring-transparent'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex flex-col w-full'>
            <div className='space-y-4'>
              <Button type='submit' className='col-span-2 w-full text-lg font-bold  h-[50px]' disabled={isSubmitting}>
                {isSubmitting ? 'Creating Account...' : 'Create a new account'}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full border border-slate-400 text-gray-700 py-2 rounded-md hover:bg-gray-100 h-[50px]"
              >
                Login with Google
              </Button>
              <p className='text-sm text-gray-500 text-center'>
                Have an account?{" "}
                <Link href="/sign-in">
                  <span className='text-blue-600 font-medium hover:underline'>
                    Sign In
                  </span>
                </Link>
              </p>
            </div>
          </div>
      </form>
    </Form>
  );
};

export default SignUpForm;