import express, { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = express.Router();

router.use(authMiddleware);

export default router;