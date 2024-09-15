import express, { Router } from "express";
import { getUsers } from "../../controllers/user.controller";

const router = express.Router();

router.get("/getusers", getUsers);


export default router;