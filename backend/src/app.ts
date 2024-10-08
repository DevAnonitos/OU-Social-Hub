import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import helmet from "helmet";

import { setupSwagger } from "./configs/swagger.config";
import morganMiddleware from "./configs/morgan.config";
import logger from "./loggers/winston.log";

import prisma from "./configs/prisma.config";
import redisClient from "./configs/redis.config";

import routes from "./routes";

const app: Express = express();

// App Config 
dotenv.config();
app.use(express.json());
app.use(cors({}));
app.use(helmet());
app.use(morganMiddleware);
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// API ROUTES
app.use(routes);

app.get("/", async (req: Request, res: Response) => {
  try {
    logger.debug('This is a Debug Log');

    await prisma

    res.json({ message: 'Hello API, MongoDB connection is active!' });
  } catch (error) {
    console.error('Error with MongoDB connection:', error);
    res.status(500).json({ error: 'Error with MongoDB connection' });
  }
});

app.get("/redis", async (req: Request, res: Response) => {
  try {
    logger.debug('This is a Debug Log');

    await redisClient.ping();

    res.json({ message: 'Hello API, Redis connection is active!' });
  } catch (error) {
    console.error('Error with Redis connection:', error);
    res.status(500).json({ error: 'Error with Redis connection' });
  }
});

setupSwagger(app);

export default app;