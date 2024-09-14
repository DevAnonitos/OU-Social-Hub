import express, { Router } from "express";
import { getAllUsers } from "../../controllers/user.controller";

const router = express.Router();

router.get("/getusers", getAllUsers);


export default router;