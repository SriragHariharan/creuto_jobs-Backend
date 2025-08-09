import { NextFunction, Request, Response } from "express";
import { AppError } from "../types/error";
// import createHttpError from "http-errors";
// return next(createHttpError(404, "Jobs not found"));

export const getAllJobsController = (_req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error: AppError | any) {
        console.log(error);
        next({statusCode: 500, message: "Unable to get jobs."});
    }
};