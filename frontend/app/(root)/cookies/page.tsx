import React from 'react';

const CookiesPage = () => {
  return (
    <main className='col-span-12 flex flex-col flex-grow overflow-y-auto max-w-screen mx-auto w-full h-full min-h-screen'>
      <div className='space-y-8 w-full h-full py-6'>
        <h1 className='text-2xl font-bold'>Chính Sách Cookies</h1>
        <section>
          <h2 className='text-xl font-semibold'>Cookies là gì?</h2>
          <p>
            Cookies là các tệp văn bản nhỏ được lưu trữ trên thiết bị của bạn khi bạn truy cập vào một trang web. Chúng giúp trang web ghi nhớ thông tin về lần truy cập của bạn, như ngôn ngữ ưa thích và các cài đặt khác. Điều này có thể làm cho lần truy cập tiếp theo của bạn trở nên dễ dàng hơn và trang web trở nên hữu ích hơn cho bạn.
          </p>
        </section>
        <section>
          <h2 className='text-xl font-semibold'>Chúng tôi sử dụng Cookies như thế nào?</h2>
          <p>
            Chúng tôi sử dụng cookies để cải thiện trải nghiệm người dùng trên trang web của mình. Cookies giúp chúng tôi hiểu rõ hơn về cách bạn tương tác với trang web, từ đó chúng tôi có thể tối ưu hóa nội dung và giao diện để phục vụ bạn tốt hơn.
          </p>
        </section>
        <section>
          <h2 className='text-xl font-semibold'>Quản lý Cookies</h2>
          <p>
            Bạn có thể quản lý và/hoặc xóa cookies theo ý muốn. Bạn có thể xóa tất cả các cookies đã có trên máy tính của mình và cài đặt hầu hết các trình duyệt để ngăn chặn chúng. Tuy nhiên, nếu bạn làm điều này, có thể bạn sẽ phải tự điều chỉnh một số tùy chọn mỗi khi truy cập một trang web và một số dịch vụ và chức năng có thể sẽ không hoạt động.
          </p>
        </section>
      </div>
    </main>
  )
};

export default CookiesPage;