import dotenv from "dotenv";
dotenv.config();

import express from "express";
import errorHandlingMiddleware from "./middlewares/error-handler";
import jobsRouter from "./routes/jobs.route"; 
import { connectDB } from "./config/mongo";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5555;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true
    })
);

app.use("/jobs", jobsRouter);

app.use(errorHandlingMiddleware);

async function startServer() {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`App listening @ http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Failed to connect to DB", err);
    process.exit(1);
  }
}

startServer();
