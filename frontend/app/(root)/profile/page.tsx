import React from 'react';
import { Tabs, TabsContent, TabsTrigger, TabsList } from '@/components/ui/tabs';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Bookmark } from 'lucide-react';

const ProfilePage = () => {
  return (
    <main className='col-span-12 flex flex-col flex-grow overflow-y-auto max-w-screen mx-auto w-full h-full min-h-screen'>
      <div className='space-y-8 w-full h-full py-6'>
        <div className='w-full flex flex-col justify-between border border-gray-300 space-y-4 p-8 rounded-2xl'>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <Image
                src={"https://res.cloudinary.com/dfdfeutqe/image/upload/v1731983167/OU%20Social%20Hub/Faculities/%C4%90T%C4%90B_yaqxra.png"}
                width={84}
                height={84}
                alt='Test'
                className='object-cover rounded-full border border-gray-300'
              />
              <div className='flex flex-col space-y-1'>
                <h1 className='text-2xl font-bold'>
                  Nguyễn Trần Anh Thư 
                </h1>
                <p className='text-sm font-medium'>
                  @anhthudethuong
                </p>
                <p className='text-lg font-normal'>
                  11k Follower - 10 Following
                </p>
              </div>
            </div>
            <div className='flex items-center space-x-6'>
              <Button className=' w-[150px] h-[40px] text-lg font-semibold'>
                Theo dõi
              </Button>
              <Button className=' w-[150px] h-[40px] text-lg font-semibold' variant="outline">
                Nhắn tin
              </Button>
            </div>
          </div>
          <p className='w-full max-w-[950px]'>
            Xin chào mọi người mình là content creator. Rất mong mọi người đón nhận các content của mình làm Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          </p>
          <div className='flex items-center space-x-4'>
            <Button className='h-[40px]' variant="outline">
              Content Creator
            </Button>
            <Button className='h-[40px]' variant="outline">
              Content Creator
            </Button>
            <Button className='h-[40px]' variant="outline">
              Content Creator
            </Button>
            <Button className='h-[40px]' variant="outline">
              Content Creator
            </Button>
            <Button className='h-[40px]' variant="outline">
              Content Creator
            </Button>
          </div>
        </div>
        <Tabs defaultValue='Tất cả bài viết' className='w-full space-y-8'>
          <TabsList className='grid w-full h-[48px] border-[1px] border-gray-300 grid-cols-8 font-semibold'>
            <TabsTrigger value='Tất cả bài viết'>
              Tất cả bài viết
            </TabsTrigger>
            <TabsTrigger value='Danh mục'>
              Danh mục
            </TabsTrigger>
            <TabsTrigger value='Đã lưu'>
              Đã lưu
            </TabsTrigger>
            <TabsTrigger value='Chia sẻ'>
              Chia sẻ
            </TabsTrigger>
            <TabsTrigger value='Yêu thích'>
              Yêu thích
            </TabsTrigger>
            <TabsTrigger value='Theo dõi'>
              Theo dõi
            </TabsTrigger>
          </TabsList>
          <TabsContent value='Tất cả bài viết' className='flex flex-col items-center justify-center'>
            <div className="space-y-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((post, index) => (
                <div
                key={index}
                className="flex w-full justify-between border-b pb-8 space-x-6"
              >
                {/* Image Section */}
                <div className="w-[364px] h-[242px] bg-gray-200 rounded-md flex items-center justify-center">
                  {/* Placeholder for image */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7h4m0 0h11m-11 0l-2 10m2-10l2 10m0 0h9m0 0l-2-10m2 10l2-10m-2 10H7"
                    />
                  </svg>
                </div>
              
                {/* Content Section */}
                <div className="flex-1 flex flex-col space-y-2">
                  <p className="text-lg text-gray-500 font-semibold">Chất lượng sống</p>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Restaurant Month 2024: 6 Gợi ý ẩm thực cao cấp tại Sài Gòn cho mùa lễ hội cuối năm thêm trọn vẹn
                  </h3>
                  <p className='line-clamp-3 text-md'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vitae nobis nesciunt fuga atque consequatur eligendi distinctio exercitationem deserunt tempore. Illo quam quo eius numquam dolores dolor animi nesciunt vero.
                    Est sit ratione perferendis quas nihil ab optio nobis? Fugit aliquam excepturi illo provident recusandae officia, rerum nulla vel architecto libero eum, suscipit quo ex quibusdam sit porro temporibus! Voluptatibus?
                  </p>
                  <p className="text-md text-gray-500">11/11/2024</p>
                </div>
                <div className='flex flex-col items-center justify-center w-10 h-10 bg-slate-300 rounded-full'>
                  <Bookmark />
                </div>
              </div>
              ))}
            </div>
            <Button className='mt-8 h-[40px] w-[150px] text-lg font-semibold text-center justify-center items-center'>
              Xem thêm
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default ProfilePage;