import { useEffect, useState } from 'react';

const UseScrollHideBottomBar = () => {
  const [isBottomBarVisible, setBottomBarVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setBottomBarVisible(false); // Cuộn xuống - Ẩn bottom bar
      } else {
        setBottomBarVisible(true); // Cuộn lên - Hiển thị bottom bar
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Đảm bảo không có giá trị âm
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isBottomBarVisible;
};

export default UseScrollHideBottomBar;