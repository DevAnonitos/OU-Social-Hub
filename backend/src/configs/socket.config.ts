import { Server } from "socket.io";
import http from "http";

let io: Server | null = null;

export const createSocketServer = (server: http.Server) => {
  io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", async (socket: any) => {
    console.log("A user connected:", socket.id);

    io?.emit("firstEvent", "Hello First Message");

    socket.on("newComment", (data: any) => {
      console.log("New comment received:", data);
      // Phát ra thông báo comment mới cho tất cả các client
      io?.emit("newCommentNotification", data);
    });


    socket.on("disconnection", () => {
      console.log("A user disconnected:", socket.id);
    });
  });

};

export const notification = (commentData: any) => {
  if (io) {
    io.emit("newComment", commentData);  
  }
};


console.log("socket is connected", createSocketServer);