import express from "express"

import {
    createTransactions,
    getTransactions,
    getFilteredTransactions,
    getChartData
} from "../controllers/transactionsController.js"
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware , getTransactions)
router.post("/", authMiddleware ,createTransactions)
router.get("/filtered", authMiddleware, getFilteredTransactions)
router.get("/chartData", authMiddleware, getChartData)

export default router