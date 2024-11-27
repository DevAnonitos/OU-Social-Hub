import React from 'react';
import { Separator } from '../ui/separator';
import { footerSocialLinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';

const BottomBar = () => {
  return (
    <div className='flex flex-col border-t-[1px] border-gray-300 px-8 py-8 w-full space-y-4'>
      {/* Phần tiêu đề và mô tả */}
      <div className='flex items-center justify-between'>
        <div className='flex flex-col space-y-2'>
          <h3 className='font-bold text-3xl'>
            OUHUB
          </h3>
          <p className='text-md font-normal text-gray-500'>
            Mạng xã hội dành riêng cho sinh viên OU
          </p>
        </div>
        
        <div className='flex items-center space-x-6'>
          {footerSocialLinks.map((socialLink: any) => (
            <div key={socialLink.id} className='cursor-pointer'>
              <Image
                src={socialLink.logoImage}
                width={24}
                height={24}
                alt={socialLink.label}
                className='object-cover'  
              />
            </div>
          ))}
        </div>
      </div>

      {/* Separator */}
      <Separator className='bg-gray-300' />
      
      {/* Phần footer với các liên kết và thông tin bản quyền */}
      <div className='flex flex-wrap justify-between items-start space-y-4 md:space-y-0'>
        <div className='flex flex-col space-y-2'>
          <h4 className='font-bold text-lg'>Liên hệ</h4>
          <Link href='/contact' className='text-md text-gray-500 hover:text-gray-700 transition-colors'>Liên hệ chúng tôi</Link>
          <Link href='/about' className='text-md text-gray-500 hover:text-gray-700 transition-colors'>Về chúng tôi</Link>
          <Link href='/privacy' className='text-md text-gray-500 hover:text-gray-700 transition-colors'>Chính sách bảo mật</Link>
        </div>
        <div className='flex flex-col space-y-2'>
          <h4 className='font-bold text-lg'>Tài nguyên</h4>
          <Link href='/blog' className='text-md text-gray-500 hover:text-gray-700 transition-colors'>Blog</Link>
          <Link href='/faq' className='text-md text-gray-500 hover:text-gray-700 transition-colors'>Câu hỏi thường gặp</Link>
          <Link href='/support' className='text-md text-gray-500 hover:text-gray-700 transition-colors'>Hỗ trợ</Link>
        </div>
        <div className='flex flex-col space-y-2'>
          <h4 className='font-bold text-lg'>Pháp lý</h4>
          <Link href='/terms' className='text-md text-gray-500 hover:text-gray-700 transition-colors'>Điều khoản dịch vụ</Link>
          <Link href='/cookies' className='text-md text-gray-500 hover:text-gray-700 transition-colors'>Chính sách cookie</Link>
        </div>
        <div className='text-md text-gray-500'>
          <p>&copy; 2023 OUHUB. All rights reserved.</p>
          <p>Ngày cập nhật mới nhất: 01/01/2023</p>
          <p>Tác giả: Nguyen Duc Gia Bao (DevAnonitos)</p>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
