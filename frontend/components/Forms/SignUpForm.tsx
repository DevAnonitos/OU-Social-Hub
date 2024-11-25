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
import Image from "next/image";

import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/useAuthStore';
import { instance } from '@/lib/axios/interceptor';

const SignUpForm = () => {
  const router = useRouter();
  const { setAuth } = useAuthStore();
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

  const handleGoogleLogin = () => {
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&scope=profile email&access_type=offline&prompt=consent`;
    window.location.href = googleAuthUrl;
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-5 items-center h-full bg-slate-50 space-y-4 p-10 w-full rounded-xl"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold">Đăng ký</h2>
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full space-y-2">
              <FormLabel className="text-md font-semibold">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nhập tên người dùng"
                  {...field}
                  className="w-full h-[50px] placeholder:text-grey-500 p-regular-16 px-5 py-3 border-[1px] border-slate-400 focus-visible:ring-transparent focus:ring-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full space-y-2">
              <FormLabel className="text-md font-semibold">Tên người dùng</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nhập email"
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
              <FormLabel className="text-md font-semibold">Mật khẩu</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Nhập mật khẩu"
                  {...field}
                  className="w-full h-[48px] placeholder:text-grey-500 px-5 py-3 border-[1px] border-slate-400 focus-visible:ring-transparent focus:ring-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col w-full gap-6">
          <div className="space-y-4">
            <Button
              type="submit"
              className="col-span-2 w-full text-lg font-bold h-[48px]"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Đang tạo tài khoản...' : 'Tạo tài khoản mới'}
            </Button>
            <p className="text-sm text-gray-500 text-start">
              Bạn đã có tài khoản?{" "}
              <Link href="/sign-in" prefetch={true} scroll={true}>
                <span className="text-blue-600 font-medium hover:underline">
                  Vui lòng đăng nhập.
                </span>
              </Link>
            </p>
            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center border border-slate-400 text-gray-700 py-2 rounded-md hover:bg-gray-100 h-[50px]"
            >
              <Image
                src="/assets/icons/google.svg"
                width={20}
                height={20}
                alt="Google"
              />
              <p className="w-full text-lg font-medium">Đăng nhập với Google</p>
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
