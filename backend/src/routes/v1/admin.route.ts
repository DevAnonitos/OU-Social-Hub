import express, { Router } from "express";
import statsRoute from "./stats.route";

const router = express.Router();

router.use("/stats", statsRoute);

export default router;