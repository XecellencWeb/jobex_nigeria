import { InferSchemaType, Schema, model, models } from "mongoose";
const jobPostedSchema = new Schema({
  name: String,
  role: String,
  salary: Number,
  agePreference: String,
  qualifications: String,
  experience: String,
  timeOfWork: String,
  weekendsFree: String,
  extrapayOvertime: String,
  leavesAllowed: String,
  companyId: Schema.Types.ObjectId,
  companyName: String,
  companyAddress: String,
  companyDesc: String,
  closingDate: Date,
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
const companySchema = new Schema({
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
