import express, { Router } from "express";
import statsRoute from "./stats.route";
import { authMiddleware, adminMiddleware } from "../../middlewares/auth.middleware";

const router = express.Router();

// Admin Route
router.use("/stats", statsRoute);

export default router;