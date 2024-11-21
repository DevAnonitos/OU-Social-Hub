import React from 'react';
import SignUpForm from '@/components/Forms/SignUpForm';
import Image from "next/image";

const SignUp = () => {
  return (
    <div className="grid grid-cols-12 gap-4 w-full max-w-6xl border-[1px] border-gray-300 bg-white rounded-xl">
      {/* Illustration section */}
      <div className="col-span-6 flex items-center justify-center rounded-l-md">
        <Image
          src="/assets/images/ĐTĐB.png" // Thay đổi hình ảnh tùy ý
          alt="Illustration"
          width={400} 
          height={500} 
          className="object-cover"
        />
      </div>

      <div className="col-span-6 flex items-center justify-center border-l-[1px] border-gray-300">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
