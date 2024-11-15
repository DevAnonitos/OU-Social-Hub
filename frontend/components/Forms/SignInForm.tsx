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
    FormLabel, 
} from '../ui/form';
import Link from 'next/link';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Image from "next/image";

import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/useAuthStore';
import { instance } from '@/lib/axios/interceptor';

const SignInForm = () => {

  const router = useRouter();
  const { setAuth, clearAuth } = useAuthStore();

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

  const handleGoogleSignIn = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/auth/google', {
        method: 'POST',
      });

      const data = await response.json()

      window.location.href = "http://localhost:4000/api/v1/auth/google";

      const { accessToken, refreshToken, id, username, role } = data;

      setAuth(accessToken, refreshToken, { id, username, role });

      router.push('/');
    } catch (error: any) {
      console.error("Error during Google sign-in:", error);
    }
  };

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 bg-slate-50 p-10 w-full h-full rounded-xl"
      >
        <h2 className="text-2xl font-bold text-center">
          Đăng nhập
        </h2>
        <FormField
          name="username"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full space-y-2">
              <FormLabel className="text-md font-semibold">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter a username"
                  {...field}
                  className="w-full h-[48px] placeholder:text-grey-500 px-5 py-3 border-[1px] border-slate-400 focus-visible:ring-transparent focus:ring-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full space-y-2">
              <FormLabel className="text-md font-semibold">
                Mật khẩu
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter a password"
                  {...field}
                  className="w-full h-[48px] placeholder:text-grey-500 px-5 py-3 border-[1px] border-slate-400 focus-visible:ring-transparent focus:ring-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="text-sm text-gray-500 text-start">
          <Link href="/forgot-password">
            <span className="font-medium">
              Quên mật khẩu?
            </span>
          </Link>
        </p>
        <div className="flex flex-col w-full gap-6">
          <Button type="submit" className="w-full text-lg font-bold h-[48px]">
            Đăng nhập tài khoản
          </Button>
          <p className="text-sm text-gray-500 text-start">
            Bạn chưa có tài khoản?{" "}
            <Link href="/sign-up">
              <span className="text-blue-600 font-medium hover:underline">
                Vui lòng tạo tài khoản.
              </span>
            </Link>
          </p>
          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center border border-slate-400 text-gray-700 py-2 rounded-md hover:bg-gray-100 h-[48px]"
          >
            <Image
              src="/assets/icons/google.svg"
              width={20}
              height={20}
              alt="Google"
            />
            <p className="ml-2 text-lg font-medium">
              Đăng nhập với tài khoản Google
            </p>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;
