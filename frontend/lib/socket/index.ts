import { io } from "socket.io-client";

export const serverUrl = io("http://localhost:4000/");