import { Router } from "express";
import contentRoutes from "./content.routes.js";
import healthRoutes from "./health.routes.js";
import inquiryRoutes from "./inquiry.routes.js";
const router = Router();
router.use(healthRoutes);
router.use("/content", contentRoutes);
router.use("/inquiries", inquiryRoutes);
export default router;
