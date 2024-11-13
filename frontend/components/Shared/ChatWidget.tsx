"use client";

import React, { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    // Tạo một script element
    const script = document.createElement('script');
    script.src = 'http://localhost:3001/embed/anythingllm-chat-widget.min.js';
    script.async = true;

    // Thêm các thuộc tính cần thiết
    script.setAttribute('data-embed-id', '94e94d38-bf73-4832-bb00-40c524ba981e');
    script.setAttribute('data-base-api-url', 'http://localhost:3001/api/embed');

    // Gắn script vào body
    document.body.appendChild(script);

    // Dọn dẹp khi component bị unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // Không cần render thêm gì trong component này
};

export default ChatWidget;