import express, { Router } from "express";
import { createComment, getAllComments } from "../../controllers/comment.controller";

const router = express.Router();

router.post("/create", createComment);
router.get("/:eventId", getAllComments);


export default router;

