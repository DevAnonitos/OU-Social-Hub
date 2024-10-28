"use client";

import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { BellIcon } from "@radix-ui/react-icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu';
import NotificationItems from './NotificationItems';
import { useGetNotifications } from '@/lib/react-query/queries';

const NotificationDropDown = ({ userId }: { userId: string }) => {
  // State để lưu trữ các thông báo mới nhận được qua Socket.IO
  const [realtimeNotifications, setRealtimeNotifications] = useState<any[]>([]);

  useEffect(() => {
    const socket = io("http://localhost:4000", {
      withCredentials: true,
      transports: ['websocket', 'polling'],
    });

    socket.on("newCommentNotification", (data: any) => {
      console.log("New comment notification received:", data);

      setRealtimeNotifications((prevNotifications) => [...prevNotifications, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const { data: notifications = [], isLoading, error } = useGetNotifications(userId);

  const allNotifications = [...realtimeNotifications, ...notifications];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <BellIcon width={25} height={25} className='mx-4 cursor-pointer' />
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' side='bottom' className='w-[455px] max-h-72 overflow-y-auto'>
        {allNotifications.map((notification: any) => (
          <NotificationItems key={notification.id} notification={notification} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationDropDown;
