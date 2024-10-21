import { Server } from "socket.io";
import http from "http";

let io: Server | null = null;

export const createSocketServer = (server: http.Server) => {
  io = new Server(server, {
    cors: {
      origin: "http://localhost:3000/",
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    },
  });

  io.on("connection", async (socket: any) => {

  });
};

export const notification = (commentData: any) => {
  if (io) {
    io.emit("newComment", commentData); // Broadcasting to all connected clients
  }
};

console.log("socket is connected", createSocketServer);