import { Router } from "express";
import { getAllJobsController } from "../controllers/jobs.controller";

const jobRouter = Router();

//get all jobs
jobRouter.get("/", getAllJobsController);

export default jobRouter;