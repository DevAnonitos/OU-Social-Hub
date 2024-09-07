import React from 'react'
import Image from "next/image";

const EventDetailCard = () => {
  return (
    <>
      <section className='flex justify-center bg-grey-50 bg-dotted-pattern bg-contain'>
          <div className='grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl'>
            <Image 
              src={"/assets/images/da.jpg"}
              alt="hero image"
              width={1000}
              height={1000}
              quality={100}
              priority
              className="h-full min-h-[300px]  object-cover object-center"
            />
            <div className='flex w-full flex-col gap-8 p-5 md:p-10'>
              <div className='flex flex-col gap-5'>
                <h2 className='font-medium text-[32px] leading-[40px] lg:text-[36px] lg:leading-[44px] xl:text-[40px] xl:leading-[48px]'>
                  DẠ NGUYỆT 2024 - GÓC GÂY QUỸ
                </h2>
                <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                  <div className='flex gap-3'>
                    <p className="p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-grey-500">
                      Charity
                    </p>
                  </div>
                  <p className=" text-[20px] font-medium leading-[30px] ml-2 mt-2 sm:mt-0">
                    By{' '}
                    <span className="text-slate-500">
                      Đào tạo đặc biệt
                    </span>
                  </p>
                </div>
              </div>

              <div className='flex flex-col gap-5'>
                <div className='flex gap-2 md:gap-3'>
                  <Image 
                    src="/assets/icons/calendar.svg" 
                    alt="calendar" 
                    width={32} 
                    height={32} 
                  />
                  <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">
                    <p>
                      Fri, Dec 10, 8:30AM - {' '}
                    </p>
                    <p>
                      {' '} - Fri, Dec 15, 9:30AM
                    </p>
                  </div>
                </div>

                <div className="p-regular-20 flex items-center gap-3">
                  <Image 
                    src="/assets/icons/location.svg" 
                    alt="location" 
                    width={32} 
                    height={32} 
                  />
                  <p className="p-medium-16 lg:p-regular-20">
                    Võ Văn Tần, quận 3, TP. Hồ Chí Minh
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="p-medium-16 lg:p-regular-18">
                  🌟 DẠ NGUYỆT 2024 - GÓC GÂY QUỸ 🌟 <br />
                  🚃 Sau bao ngày chờ đợi thì cuối cùng chuyến xe “Dạ Nguyệt 2024” đã chính thức khởi đầu hành trình lan tỏa yêu thương của mình, với mong muốn mang đến một mùa trăng rằm thật ấm áp đến các em thiếu nhi có hoàn cảnh khó khăn.  <br />
                  🌕 Để tạo thêm nguồn kinh phí hỗ trợ cho chương trình lần này, chúng mình xin được “ra mắt” bộ sản phẩm gây quỹ siêu “mê ly” đến từ 𝓝𝓱𝓪̀ 𝓒𝓪𝓶!  <br />
                  “Yêu là phải nói cũng như đói là phải ăn” <br />
                  Chần chờ chi nữa mại zô mại zô 🤩 <br />
                  Chúng mình sẽ CHÍNH THỨC bán mặt hàng này tại cơ sở Võ Văn Tần
                  ⏰ Lúc 8g30 - 9g30 và 14g30 - 15g30 (giờ ra chơi buổi học sáng và chiều) từ ngày mai 22/8 <br />
                  📌Tại sảnh ra vào của cơ sở <br />
                  💚 Để “chuyến đi” này được diễn ra thành công, 𝓝𝓱𝓪̀ 𝓒𝓪𝓶 hy vọng sẽ nhận được sự ủng hộ từ tất cả mọi người để góp phần mang đến nguồn năng lượng tích cực và những điều tốt đẹp nhất cho các em nhỏ trong đêm Trung Thu 2024 này nhé! <br />
                  ------------------------- <br />
                  📍THÔNG TIN LIÊN HỆ:  <br />
                  🌐 Fanpage: fb.com/DoanHoiDTDB/ <br />
                  💌 Email: doankhoadtdtou@ou.edu.vn <br />
                  SĐT: <br />
                  -Trần Thị Diễm Phúc: 0379594225 - Chỉ Huy Trưởng <br />
                  - Đặng Hoàng Trung Tín: 0939522613 - Chỉ Huy Phó <br />
                  - Phạm Nguyễn Gia Huy: 0915074741 - Chỉ Huy Phó <br />
                  #HCMOU #ĐTĐB #DN2024 <br />
                </p>
                <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline">
                  https://www.facebook.com/DoanHoiDTDB
                </p>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default EventDetailCard