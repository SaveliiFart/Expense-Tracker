import { db } from "../config/db.js"

export const createExpense = async (req, res) => {
    try {
        const userId = req.user.id
        const { date, title, merchant, amount, category, type } = req.body

        const result = await db.run(
            `INSERT INTO expenses 
                    (userId, date, title, merchant, amount, category, type) 
                    VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [userId, date, title, merchant, amount, category, type]
        )

        res.status(201).json({
            id: result.lastID,
            date,
            title,
            merchant,
            amount,
            category,
            type,
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const getExpenses = async (req, res) => {
    try {
        const userId = req.user.id

        const expenses = await db.all(
            `SELECT * FROM expenses WHERE userId = ?`,
            [userId]
        )

        res.json(expenses)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}