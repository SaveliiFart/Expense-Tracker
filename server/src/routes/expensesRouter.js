import express from "express"

import {
    createExpense,
    getExpenses,
    getFilteredExpenses
} from "../controllers/expensesController.js"
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware , getExpenses)
router.post("/", authMiddleware ,createExpense)
router.get("/filtered", authMiddleware, getFilteredExpenses)

export default router