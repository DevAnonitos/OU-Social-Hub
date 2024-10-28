import express, { Router } from "express";
import { getUsers,getUsersByMonth, getUserById } from "../../controllers/user.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = express.Router();

router.get("/getusers", getUsers);

router.use(authMiddleware);
router.get("/getusers/:id", getUserById); 
router.get("/count-by-month", getUsersByMonth);

export default router;