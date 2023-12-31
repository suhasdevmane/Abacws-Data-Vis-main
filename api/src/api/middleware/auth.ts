import { NextFunction, Request, Response } from "express";
import { API_KEY } from "../constants";
import { LogLevel } from "../types";

export const apiKeyAuth = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.header("x-api-key");
    if (apiKey === API_KEY) next();

    // If authentication fails, invoke error handlers
    next({
        code: 403,
        message: "You do not have permission to access this resource",
        level: LogLevel.error
    });
}
