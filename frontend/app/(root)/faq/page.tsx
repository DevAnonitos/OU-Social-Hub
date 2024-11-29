import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const FAQPage = () => {
  return (
    <main className='col-span-12 flex flex-col flex-grow overflow-y-auto max-w-screen mx-auto w-full h-full min-h-screen'>
      <div className='space-y-8 w-full h-full py-6'>
        {/* Phần tiêu đề và mô tả */}
        <header className='flex flex-col space-y-2'>
          <h1 className='text-3xl font-bold mb-4'>Câu Hỏi Thường Gặp về OUHUB</h1>
          <p className='text-md text-gray-500 mb-4'>
            Tìm hiểu thêm về OUHUB, nền tảng mạng xã hội hàng đầu cho sinh viên OU, qua các câu hỏi thường gặp dưới đây.
          </p>
        </header>
        
        {/* Phần tổng hợp các câu hỏi */}
        <section className='flex flex-col space-y-4'>
          <Accordion type='single' collapsible className='w-full space-y-4'>
            <AccordionItem value='item-1'>
              <AccordionTrigger className='text-lg font-bold'>OUHUB là gì?</AccordionTrigger>
              <AccordionContent>
                OUHUB là nền tảng mạng xã hội hàng đầu dành riêng cho sinh viên OU, nơi bạn có thể kết nối, chia sẻ và học hỏi từ cộng đồng sinh viên năng động. 
                Khám phá các tính năng độc đáo của OUHUB ngay hôm nay để nâng cao trải nghiệm học tập và giao lưu của bạn!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger className='text-lg font-bold'>Làm thế nào để tham gia OUHUB?</AccordionTrigger>
              <AccordionContent>
                Để tham gia OUHUB, hãy đăng ký tài khoản miễn phí trên trang web chính thức của chúng tôi. 
                Quá trình đăng ký đơn giản và nhanh chóng, giúp bạn dễ dàng trở thành một phần của cộng đồng OUHUB và bắt đầu kết nối ngay lập tức.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger className='text-lg font-bold'>OUHUB có những tính năng gì?</AccordionTrigger>
              <AccordionContent>
                OUHUB cung cấp nhiều tính năng nổi bật như kết nối với bạn bè, tham gia các nhóm thảo luận, chia sẻ tài liệu học tập, cập nhật tin tức từ trường, 
                và tham gia các sự kiện trực tuyến và ngoại tuyến. Trải nghiệm OUHUB để tận dụng tối đa các cơ hội học tập và phát triển cá nhân.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4'>
              <AccordionTrigger className='text-lg font-bold'>OUHUB có an toàn không?</AccordionTrigger>
              <AccordionContent>
                OUHUB cam kết bảo mật thông tin cá nhân của người dùng với các biện pháp bảo vệ tiên tiến. 
                Chúng tôi luôn nỗ lực để đảm bảo môi trường trực tuyến an toàn và bảo mật cho tất cả sinh viên OU.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-5'>
              <AccordionTrigger className='text-lg font-bold'>Làm thế nào để liên hệ với hỗ trợ khách hàng của OUHUB?</AccordionTrigger>
              <AccordionContent>
                Bạn có thể liên hệ với đội ngũ hỗ trợ khách hàng của OUHUB qua email hoặc số điện thoại được cung cấp trên trang web của chúng tôi. 
                Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7 để giải quyết mọi thắc mắc và vấn đề.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </main>
  );
};

export default FAQPage;