import express from "express";
import cors from "cors"
import authRouter from "./routes/authRouter.js"
import expensesRouter from "./routes/expensesRouter.js"
import categoryRouter from "./routes/categoryRouter.js"

const app = express();

app.use(express.json());

app.use(cors())

app.use("/api/auth" , authRouter)
app.use("/api/expenses", expensesRouter)
app.use("/api/categories", categoryRouter)

app.get("/", (req,res) => {
    res.send("API is running...")
})

export default app;