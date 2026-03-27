import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes/index.js";
import { env } from "./config/env.js";
import { notFound } from "./middlewares/notFound.js";
import { errorHandler } from "./middlewares/errorHandler.js";
function buildAllowedOrigins(rawOrigins) {
    return rawOrigins
        .split(",")
        .map((origin) => origin.trim())
        .filter(Boolean);
}
export function createApp() {
    const app = express();
    const allowedOrigins = buildAllowedOrigins(env.CORS_ORIGIN);
    app.use(helmet());
    app.use(cors({
        origin(origin, callback) {
            if (!origin) {
                callback(null, true);
                return;
            }
            if (allowedOrigins.includes(origin)) {
                callback(null, true);
                return;
            }
            callback(new Error(`CORS blocked for origin: ${origin}`));
        },
    }));
    app.use(morgan("dev"));
    app.use(express.json({ limit: "1mb" }));
    app.use("/api/v1", routes);
    app.use(notFound);
    app.use(errorHandler);
    return app;
}
