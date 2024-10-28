import express, { Router } from "express";
import { createCategory, getAllCategory } from "../../controllers/category.controller";

const router = express.Router();

router.post("/create", createCategory);
router.get("/get-categories", getAllCategory);

export default router;