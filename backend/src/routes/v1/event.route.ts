import express, { Router } from "express";
import { createEvent, getPendingEvents  } from "../../controllers/event.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { approveEvent, rejectEvent, getAllEvents } from "../../controllers/event.controller";

const router = express.Router();

router.post("/create", createEvent);
router.get("/pending", getPendingEvents)
router.patch("/approve/:eventId", approveEvent);
router.patch("/reject/:eventId", rejectEvent);

router.get("/get-events", getAllEvents);

router.use(authMiddleware);

export default router;