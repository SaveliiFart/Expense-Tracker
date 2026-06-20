import { Router } from "express";
import { createCategory, getCategory } from "../controllers/categoryController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router()

router.post("/", authMiddleware, createCategory)
router.get("/", authMiddleware, getCategory)

export default router