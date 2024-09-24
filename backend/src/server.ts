import app from "./app";
import { createSocketServer } from "./configs/socket.config";
import http from "http";

const port = process.env.PORT || 4000;
const server = http.createServer(app);

createSocketServer(server);

server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});