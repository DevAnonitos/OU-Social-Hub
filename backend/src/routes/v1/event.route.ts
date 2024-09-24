import express, { Router } from "express";
import { createEvent } from "../../controllers/event.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = express.Router();

router.post("/create", createEvent);
router.use(authMiddleware);

export default router;