import express, { Router } from "express";
import authRoute from "./auth.route";
import userRoute from "./user.route";

const routes: Router = express.Router();

// using Routes

routes.use("/auth", authRoute);
routes.use("/users", userRoute);

export default routes;
