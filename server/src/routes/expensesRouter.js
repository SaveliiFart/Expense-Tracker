import express from "express"

import {
    createExpense,
    getExpenses,
} from "../controllers/expensesController.js"
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware , getExpenses)
router.post("/", authMiddleware ,createExpense)

export default router