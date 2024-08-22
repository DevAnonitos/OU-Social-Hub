import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";

import morganMiddleware from "./configs/morgan.config";
import logger from "./loggers/winston.log";

const app: Express = express();

// App Config 
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morganMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.get("/", (req: Request, res: Response) => {
  logger.debug("This is Debug Log");
  res.json({ message: "Hello API" });
});

export default app;