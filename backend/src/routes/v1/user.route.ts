import express, { Router } from "express";
import { getUsers } from "../../controllers/user.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = express.Router();

router.get("/getusers", getUsers);
router.use(authMiddleware)

export default router;