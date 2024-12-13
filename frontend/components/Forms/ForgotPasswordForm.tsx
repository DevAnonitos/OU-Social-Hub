"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { 
  Form, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage 
} from '../ui/form';

const ForgotPasswordForm = () => {
  return (
    <form>
      ForgotPasswordForm
    </form>
  );
};

export default ForgotPasswordForm;