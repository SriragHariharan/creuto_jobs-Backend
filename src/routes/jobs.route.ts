import { Router } from "express";
import { getAllJobsController, getJobDetailsController } from "../controllers/jobs.controller";

const jobRouter = Router();

//get all jobs
jobRouter.get("/", getAllJobsController);

//get details of a single job
jobRouter.get("/:id", getJobDetailsController);

export default jobRouter;