import express, { Router } from "express";

import authRoute from "./auth.route";
import userRoute from "./user.route";
import eventRoute from "./event.route";
import adminRoute from "./admin.route";

const routes: Router = express.Router();

// using Routes

routes.use("/auth", authRoute);
routes.use("/admin", adminRoute);
routes.use("/users", userRoute);
routes.use("/events", eventRoute);

export default routes;
