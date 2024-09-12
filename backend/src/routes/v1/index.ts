import express, { Router } from "express";
import authRoute from "./auth.route";

const routes: Router = express.Router();

// using Routes

routes.use("/auth", authRoute);

export default routes;
