import { Server } from "socket.io";
import http from "http";
import prisma from "./prisma.config";

let io: Server | null = null;

export const createSocketServer = (server: http.Server) => {
  io = new Server(server, {
    cors: {
      origin: "https://3000-idx-ou-social-hub-1721398872129.cluster-qpa6grkipzc64wfjrbr3hsdma2.cloudworkstations.dev",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", async (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Function to send users to the client
    const sendUsers = async () => {
      try {
        const users = await prisma.user.findMany();
        socket.emit("users", users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    sendUsers();

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });
};