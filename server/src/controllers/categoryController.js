import { db } from "../config/db.js"

export const createCategory = async (req, res) => {
        try {
        const userId = req.user.id
        const { name, icon } = req.body

        const result = await db.run(
            `INSERT INTO categories 
                    (userId, name, icon) 
                    VALUES (?, ?, ?)`,
            [userId, name, icon]
        )

        res.status(201).json({
            id: result.lastID,
            name,
            icon,
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const getCategory = async (req, res) => {
    try {
        const userId = req.user.id

        const category = await db.all(
            `SELECT * FROM categories WHERE userId = ?`,
            [userId]
        )

        res.json(category)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}