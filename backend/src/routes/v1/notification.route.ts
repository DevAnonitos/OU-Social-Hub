import express, { Router } from "express";
import { getNotifications } from "../../controllers/notification.controller";

const router = express.Router();

router.get("/get-notifications/:userId", getNotifications);

export default router;