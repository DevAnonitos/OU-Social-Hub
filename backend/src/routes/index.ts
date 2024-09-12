import express, { Router } from "express";
import v1Routes from "./v1";

const routes: Router = express.Router();

routes.use("/api/v1", v1Routes);

export default routes;