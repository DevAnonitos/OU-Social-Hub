import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { io } from "socket.io-client";
import { useToast } from "./use-toast";

let socket: any;

export const useNotification = (userId: string) => {

  const { toast } = useToast();

  const queryClient = useQueryClient();

  useEffect(() => {
    socket = io('http://localhost:4000', {
      transports: ["websocket"],
    });

    socket.on('notification', (message: string) => {
      // Hiển thị toast khi có thông báo
      toast({
        title: 'Thông báo mới!',
        description: message,  // Nội dung của thông báo
        variant: 'default', // Bạn có thể tùy chỉnh variant (default, success, warning, error)
        duration: 5000, // Thời gian tồn tại của toast (ms)
      });
    });

    socket.on('newCommentNotification', (notification: any) => {
    
      queryClient.setQueryData(['notifications', userId], (oldData: any) => {
        return [notification, ...oldData];
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [queryClient, userId]);
};