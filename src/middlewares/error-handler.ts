import { Request, Response, NextFunction } from "express";

export default function errorHandlingMiddleware(
  error: any,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response {
  if (error.statusCode || error.message) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }

  return res.status(500).json({ message: "Internal Server Error" });
}
