import { Schema, model, InferSchemaType } from "mongoose";

const inquirySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 80,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    details: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 1000,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export type InquiryDocument = InferSchemaType<typeof inquirySchema>;
export const InquiryModel = model<InquiryDocument>("Inquiry", inquirySchema);
