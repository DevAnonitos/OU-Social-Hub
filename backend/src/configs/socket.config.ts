import { Server } from "socket.io";
import http from "http";
import prisma from "./prisma.config";

const onlineUsers: Map<string, string> = new Map();

let io: Server | null = null;

export const createSocketServer = (server: http.Server) => {
  io = new Server(server, {
    cors: {
      origin: "http://localhost:3000/",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", async (socket: any) => {

    socket.on("userOnline", async (userId: string) => {
      
    });

    socket.on("disconnect", async () => {
      
    });
  });
};