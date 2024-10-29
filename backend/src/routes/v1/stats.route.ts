import express from "express";
import { 
  getUsersCount, 
  getEventsCount, 
} from "../../controllers/stats.controller";

const router = express.Router();

router.get("/users", getUsersCount);
router.get("/events", getEventsCount);

export default router;