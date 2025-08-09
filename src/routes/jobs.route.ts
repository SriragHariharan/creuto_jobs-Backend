import { Router } from "express";
import { createJobController, deleteJobController, getAllJobsController, getJobDetailsController, updateJobDetailsController } from "../controllers/jobs.controller";

const jobRouter = Router();

//get all jobs
jobRouter.get("/", getAllJobsController);

//get details of a single job
jobRouter.get("/:id", getJobDetailsController);

//create a new job
jobRouter.post("/", createJobController);

//update a job details
jobRouter.put("/:id", updateJobDetailsController);

//delete a job
jobRouter.delete("/:id", deleteJobController);

export default jobRouter;