import { NextFunction, Request, Response } from "express";
import { AppError } from "../types/error";
import JobModel from "../model/jobs";
import createHttpError from "http-errors";

//get all jobs
export const getAllJobsController = async(_req: Request, res: Response, next: NextFunction) => {
    try {
        const jobs = await JobModel.find();
        return res.status(200).json(jobs);
    } catch (error: AppError | any) {
        console.log(error);
        next({statusCode: 500, message: "Unable to get jobs."});
    }
};

//get details of a single job
export const getJobDetailsController = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const jobID = req.params.id;
        if(!jobID) return next(createHttpError(400, "Job ID is required."));
        const jobDetails = await JobModel.findById(jobID);
        return res.status(200).json({details: jobDetails});
    } catch (error: AppError | any) {
        next({statusCode: 500, message: "Unable to get job details."});
    }
};