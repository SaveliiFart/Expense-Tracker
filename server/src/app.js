import express from "express";
import cors from "cors"
import authRouter from "./routes/authRouter.js"

const app = express();

app.use(express.json());

app.use(cors())

app.use("/api/auth" , authRouter)

app.get("/", (req,res) => {
    res.send("API is running...")
})

export default app;