import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { db } from "../config/db.js"

const SECRET = "SECRET_KEY"

export const register = async (req, res) => {
    const { username, password } = req.body;

    const existing = await db.get(
        "SELECT * FROM users WHERE username = ?", [username]
    )

    if (existing) {
        return res.status(400).json({ message: "Users exists" })
    }

    const hashed = await bcrypt.hash(password, 10)

    await db.run(
        "INSERT INTO users (username,password) VALUES (?,?)",
        [username, hashed]
    )

    res.json({ message: "Registered" })
}

export const login = async (req, res) => {
    const { username, password } = req.body

    const user = await db.get(
        "SELECT * FROM users WHERE username=?",
        [username]
    )

    if (!user) {
        return res.status(400).json({ message: "User not found" })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        return res.status(400).json({ message: "Wrong password" })
    }

    const token = jwt.sign(
        { id: user.id },
        SECRET,
        { expiresIn: "1h" }
    )

    res.json({ token })
}