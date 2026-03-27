import { ZodError } from "zod";
import { ApiError } from "../utils/ApiError.js";
export function errorHandler(err, _req, res, _next) {
    void _next;
    if (err instanceof ZodError) {
        res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: err.flatten().fieldErrors,
        });
        return;
    }
    if (err instanceof ApiError) {
        res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
        return;
    }
    if (err instanceof Error) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
        return;
    }
    res.status(500).json({
        success: false,
        message: "Unexpected server error",
    });
}
