import { InferSchemaType, Schema, model, models } from "mongoose";
const jobPostedSchema = new Schema({
  jobName: String,
  companyName: String,
  companyWebsite: String,
  companyAddress: String,
  salary: Number,
  companyLogo: String,
  jobDesc: String,
  approved: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
    immutable: false,
  },
});

const companySchema: any = new Schema({
  name: String,
  address: String,
  desc: String,
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
    immutable: false,
  },
});

export type CompanyType = InferSchemaType<typeof companySchema>;
export type JobPostedType = InferSchemaType<typeof jobPostedSchema>;

const Company = models.Company || model("Company", companySchema);
export const Jobing = models.Job || model("Job", jobPostedSchema);

export default Company;
