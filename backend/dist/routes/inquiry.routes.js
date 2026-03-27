import { Router } from "express";
import { createInquiryHandler, listInquiriesHandler } from "../controllers/inquiry.controller.js";
const router = Router();
router.get("/", listInquiriesHandler);
router.post("/", createInquiryHandler);
export default router;
