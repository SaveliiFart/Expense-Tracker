import { db } from "../config/db.js"

export const createExpense = async (req, res) => {
    try {
        const userId = req.user.id
        const { date, title, merchant, amount, categoryId, type } = req.body

        const result = await db.run(
            `INSERT INTO expenses 
                    (userId, date, title, merchant, amount, categoryId, type) 
                    VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [userId, date, title, merchant, amount, categoryId, type]
        )

        res.status(201).json({
            id: result.lastID,
            date,
            title,
            merchant,
            amount,
            categoryId,
            type,
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const getExpenses = async (req, res) => {
    try {
        const userId = req.user.id

        const expenses = await db.all(`
            SELECT
                expenses.id,
                expenses.date,
                expenses.title,
                expenses.merchant,
                expenses.amount,
                expenses.type,
                categories.icon
            FROM expenses
            JOIN categories
                ON expenses.categoryId = categories.id
            WHERE expenses.userId = ?
        `, [userId]);

        res.json(expenses)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const getFilteredExpenses = async (req, res) => {
    try {
    const userId = req.user.id

    const totalIncome = await db.get(`
        SELECT COUNT(*) as totalIncome FROM expenses WHERE userId = ? AND type = "income"
    `, [userId])

    const totalExpenses = await db.get(`
        SELECT SUM(amount) as totalExpenses FROM expenses WHERE userId = ? AND type = "expense"
    `, [userId])

    const balance = await db.get(`
        SELECT SUM(CASE WHEN type='income' THEN amount ELSE 0 END) - SUM(CASE WHEN type='expense' THEN amount ELSE 0 END) AS balance FROM expenses WHERE userId = ?
    `, [userId])

    const transaction = await db.get(`
        SELECT COUNT(*) as totalTransactions FROM expenses WHERE userId = ?
    `, [userId])

    const topCategory = await db.get(`
        SELECT 
            c.name, 
            c.icon, 
            SUM(e.amount) as total 
        FROM expenses e 
        JOIN categories c ON e.categoryId = c.id 
        WHERE e.userId = ? AND e.type = 'expense' 
        GROUP BY e.categoryId ORDER BY total DESC 
        LIMIT 1
    `, [userId])

        console.log({totalIncome, totalExpenses,balance,transaction,topCategory})

        res.json({
            totalIncome: totalIncome?.totalIncome || 0,
            totalExpenses: totalExpenses?.totalExpenses || 0,
            balance: balance?.balance || 0,
            transaction: transaction?.totalTransactions || 0,
            topCategory: topCategory || null
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}