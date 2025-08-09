import { NextFunction, Request, Response } from "express";
import { AppError } from "../types/error";
import JobModel from "../model/jobs";
import createHttpError from "http-errors";
import { v4 as uuidv4 } from "uuid";

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

// create a new job
export const createJobController = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const job = await JobModel.create(req.body);
        return res.status(200).json({message: "Job created successfully.", details: job});
    } catch (error: AppError | any) {
        console.log(error);
        next({statusCode: 500, message: "Unable to create job."});
    }
};

// update a job details
export const updateJobDetailsController = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const jobID = req.params.id;
        if(!jobID) return next(createHttpError(400, "Job ID is required."));
        const job = await JobModel.findByIdAndUpdate(jobID, req.body, {new: true});
        return res.status(200).json({message: "Job updated successfully.", details: job});
    } catch (error: AppError | any) {
        console.log(error);
        next({statusCode: 500, message: "Unable to update job."});
    }
}

// delete a job
export const deleteJobController = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const jobID = req.params.id;
        if(!jobID) return next(createHttpError(400, "Job ID is required."));
        const job = await JobModel.findByIdAndDelete(jobID);
        return res.status(200).json({message: "Job deleted successfully.", details: job});
    } catch (error: AppError | any) {
        console.log(error);
        next({statusCode: 500, message: "Unable to delete job."});
    }
}