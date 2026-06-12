import sqlite3 from "sqlite3"
import { open } from "sqlite"

export const db = await open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
});

await db.exec("PRAGMA foreign_keys = ON")

await db.exec(`
    CREATE TABLE IF NOT EXISTS expenses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER,
        date TEXT,
        title TEXT,
        merchant TEXT,
        amount INTEGER,
        category TEXT,
        type TEXT NOT NULL CHECK(type IN ('income', 'expense')),
        FOREIGN KEY (userId) REFERENCES users(id)
    )
`);

await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT,
        name TEXTб
        currency TEXT
    )
`);