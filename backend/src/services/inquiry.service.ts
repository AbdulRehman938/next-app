import { InquiryModel } from "../models/Inquiry.js";

export type CreateInquiryInput = {
  name: string;
  email: string;
  details: string;
};

export async function createInquiry(payload: CreateInquiryInput) {
  return InquiryModel.create(payload);
}

export async function listInquiries() {
  return InquiryModel.find().sort({ createdAt: -1 }).lean();
}
