import express, { Router } from "express";
import { getUsers,getUsersByMonth } from "../../controllers/user.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = express.Router();

router.get("/getusers", getUsers);
router.get("/count-by-month", getUsersByMonth);
router.use(authMiddleware);

export default router;