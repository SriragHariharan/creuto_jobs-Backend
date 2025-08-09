// app.ts or index.ts

import express from "express";
import bodyParser from "body-parser";
import errorHandlingMiddleware from "./middlewares/error-handler";
import jobsRouter from "./routes/jobs.route"; // assuming default export

const app = express();
const port = 5555;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Register routes
app.use("/jobs", jobsRouter);

// Global error handling middleware
app.use(errorHandlingMiddleware);

app.listen(port, () => {
  console.log(`App listening @ http://localhost:${port}`);
});
