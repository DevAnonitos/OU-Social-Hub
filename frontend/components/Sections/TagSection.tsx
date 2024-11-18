import React from 'react';
import { Button } from '../ui/button';

const TagSection = () => {
  return (
    <section className="flex flex-col space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Tags Phổ Biến Nhất
        </h2>
        <div className="flex gap-2">
      
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-12 gap-6 overflow-x-auto w-full">
        <Button>
          Tất cả
        </Button>
        {['Cuộc sống', 'Mẹo vặt', 'Sự nghiệp', 'Câu chuyện', 'Tình yêu', 'Tâm lý', 'Sức khỏe', 'Giáo dục', 'Tin tức', 'Tài liệu', 'OU'].map((tag, idx) => (
          <Button variant="outline" key={idx} className="relative flex items-center justify-center w-full rounded-lg border border-gray-300">
            <span className="text-center text-sm font-medium p-2">
              {tag}
            </span>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default TagSection;
  