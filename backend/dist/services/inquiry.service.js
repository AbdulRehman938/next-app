import { InquiryModel } from "../models/Inquiry.js";
export async function createInquiry(payload) {
    return InquiryModel.create(payload);
}
export async function listInquiries() {
    return InquiryModel.find().sort({ createdAt: -1 }).lean();
}
