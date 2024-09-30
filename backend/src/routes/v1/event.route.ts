import express, { Router } from "express";
import { createEvent, getEventById } from "../../controllers/event.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = express.Router();

router.post("/create", createEvent);
router.get("/:id", getEventById);

export default router;