import express, { Router } from "express";
import { signIn, signUp } from "../../controllers/auth.controller";

const router = express.Router();

// Action Router
router.get("/signup", signUp);

export default router;