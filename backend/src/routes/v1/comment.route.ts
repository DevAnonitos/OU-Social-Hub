import express, { Router } from "express";
import { createComment } from "../../controllers/comment.controller";

const router = express.Router();

router.post("/create", createComment);

export default router;

