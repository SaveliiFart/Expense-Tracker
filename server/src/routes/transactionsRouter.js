import express from "express"

import {
    createTransactions,
    getTransactions,
    getFilteredTransactions,
    getChartData,
    getOverviewTransactions
} from "../controllers/transactionsController.js"
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware , getTransactions)
router.get("/overview", authMiddleware , getOverviewTransactions)
router.post("/", authMiddleware ,createTransactions)
router.get("/filtered", authMiddleware, getFilteredTransactions)
router.get("/chartData", authMiddleware, getChartData)

export default router