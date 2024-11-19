import React from 'react';
import { Button } from '../ui/button';

const NewsSection = () => {
  return (
    <section className="flex flex-col space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Tin tức</h2>
        <div className="flex gap-2">
          <Button>Xem tất cả</Button>
        </div>
      </div>
  
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left side: News List */}
        <div className="col-span-2 space-y-4 bg-gray-100 border-[1px] border-gray-300 rounded-lg">
          {Array(4).fill(0).map((_, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 p-4"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-gray-200 text-lg font-bold rounded-full">
                {idx + 1}
              </div>
              <div>
                <h3 className="font-semibold text-md">
                  Trường Đại học Mở TP. Hồ Chí Minh đạt thứ hạng ấn tượng trong bảng
                  xếp hạng châu Á – QS Rankings 2025
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  (8/11/2024) - 2 phút đọc
                </p>
              </div>
            </div>
          ))}
        </div>
  
        {/* Right side: Event Card */}
        <div className="rounded-lg bg-gray-100 border-[1px] border-gray-300 flex w-full flex-col gap-4 overflow-hidden">
        
        </div>
      </div>
    </section>
  )
};

export default NewsSection;