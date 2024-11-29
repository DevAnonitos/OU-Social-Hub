import React from 'react';

const AboutPage = () => {
  return (
    <div className='col-span-12 flex flex-col flex-grow overflow-y-auto max-w-screen mx-auto w-full h-full min-h-screen'>
      <div className='space-y-8 w-full h-full py-6'>

        <h1 className='text-3xl font-bold mb-4'>OUHUB - Mạng Xã Hội Dành Cho Sinh Viên OU</h1>
        <p className='text-md text-gray-500 mb-4'>
          OUHUB là nền tảng mạng xã hội hàng đầu cho sinh viên OU, nơi bạn có thể kết nối, chia sẻ và học hỏi từ cộng đồng sinh viên năng động. Tham gia OUHUB để trải nghiệm môi trường an toàn và thân thiện.
        </p>
        <p className='text-md text-gray-500 mb-4'>
          Tại OUHUB, chúng tôi cam kết cung cấp một không gian học tập và phát triển cá nhân. Tham gia các nhóm thảo luận, chia sẻ tài liệu học tập và cập nhật tin tức mới nhất từ trường.
        </p>
        <p className='text-md text-gray-500 mb-4'>
          Được thành lập vào năm 2023, OUHUB kết nối sinh viên OU trên toàn thế giới. Chúng tôi tự hào có đội ngũ phát triển tận tâm, luôn nỗ lực cải thiện trải nghiệm người dùng.
        </p>
        <p className='text-md text-gray-500 mb-4'>
          OUHUB không chỉ là nền tảng giao tiếp mà còn tổ chức các sự kiện trực tuyến và ngoại tuyến, thúc đẩy sự gắn kết và phát triển kỹ năng cho sinh viên. Chúng tôi hợp tác với nhiều tổ chức giáo dục để mang đến cơ hội học tập và thực tập hấp dẫn.
        </p>
        <p className='text-md text-gray-500 mb-4'>
          OUHUB là nơi sinh viên phát triển kỹ năng mềm và chuyên môn thông qua các khóa học và hội thảo. Chúng tôi cung cấp công cụ và tài nguyên giúp bạn đạt được mục tiêu học tập và nghề nghiệp.
        </p>
        <p className='text-md text-gray-500 mb-4'>
          Hệ thống hỗ trợ 24/7 của chúng tôi đảm bảo mọi thắc mắc và vấn đề của bạn được giải quyết kịp thời. Đội ngũ hỗ trợ luôn sẵn sàng giúp đỡ bạn.
        </p>
        <p className='text-md text-gray-500'>
          Được phát triển bởi <a href='https://github.com/DevAnonitos' className='text-blue-500 hover:text-blue-700 transition-colors'>DevAnonitos</a>
        </p>
      </div>
    </div>
  )
};

export default AboutPage;