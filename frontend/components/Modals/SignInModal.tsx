import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';

import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader,
  DialogTitle, 
  DialogTrigger 
} from '../ui/dialog';

const SignInModal = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className='flex items-center justify-center font-semibold'>
            Sign In
          </Button>
        </DialogTrigger>
        <DialogContent className=''>
          <DialogHeader>
          <DialogTitle className='text-2xl'>Sign in</DialogTitle>
            <DialogDescription>
              To continue platform. Please sign in here!
            </DialogDescription>
            <div className="grid gap-4 py-4">
            {/* Google SignInButton */}
            <div className='border p-4 rounded-md'>
              Google
            </div>
            {/* GitHub SignInButton */}
            <div className='border p-4 rounded-md'>
              GitHub
            </div>
          </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SignInModal;