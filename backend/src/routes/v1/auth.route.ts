import express, { Router } from "express";
import { 
  signIn, 
  signUp, 
  googleLogin 
} from "../../controllers/auth.controller";

const router = express.Router();

// Action Router
router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/google", googleLogin);   

export default router;