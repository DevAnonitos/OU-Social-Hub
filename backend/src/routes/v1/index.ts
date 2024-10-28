import express, { Router } from "express";

import authRoute from "./auth.route";
import userRoute from "./user.route";
import eventRoute from "./event.route";
import adminRoute from "./admin.route";
import categoryRoute from "./category.route";
import commentRoute from "./comment.route";
import notificationRoute from "./notification.route";

const routes: Router = express.Router();

// using Routes

routes.use("/auth", authRoute);
routes.use("/users", userRoute);
routes.use("/admin", adminRoute);
routes.use("/events", eventRoute);
routes.use("/comments", commentRoute);
routes.use("/categories", categoryRoute);
routes.use("/notifications", notificationRoute);

export default routes;
