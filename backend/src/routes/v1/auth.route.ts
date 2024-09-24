import express, { Router } from "express";
import { 
  signIn, 
  signUp, 
  googleLogin,
  refreshToken, 
} from "../../controllers/auth.controller";
import { 
  authMiddleware, 
  adminMiddleware 
} from "../../middlewares/auth.middleware";

const router = express.Router();

// Action Router
router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/google", googleLogin);   
router.post("/fresh-token", refreshToken);

router.use(
  authMiddleware,
  adminMiddleware,
  (req, res, next) => {
    next();
  }
);

export default router;