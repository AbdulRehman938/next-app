import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { createInquiry, listInquiries } from "../services/inquiry.service.js";

const createInquirySchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  details: z.string().min(10).max(1000),
});

export async function createInquiryHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = createInquirySchema.parse(req.body);
    const inquiry = await createInquiry(payload);

    res.status(201).json({
      success: true,
      data: inquiry,
    });
  } catch (error) {
    next(error);
  }
}

export async function listInquiriesHandler(_req: Request, res: Response, next: NextFunction) {
  try {
    const inquiries = await listInquiries();

    res.status(200).json({
      success: true,
      data: inquiries,
    });
  } catch (error) {
    next(error);
  }
}
