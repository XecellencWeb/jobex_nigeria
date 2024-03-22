import { InferSchemaType, Schema, model, models } from "mongoose";
const jobPostedSchema = new Schema({
  name: String,
  role: String,
  salary: Number,
  agePreference: String,
  qualifications: [String],
  timeOfWork: String,
  weedendsFree: Boolean,
  extrapayOvertime: Boolean,
  leavesAllowed: Boolean,
});
const companySchema = new Schema({
  name: String,
  address: String,
  desc: String,
  jobsPosted: {
    type: [jobPostedSchema],
    default: [],
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

export type CompanyType = InferSchemaType<typeof companySchema>;
export type JopPostedType = InferSchemaType<typeof jobPostedSchema>;

const Company = models.Company || model("Company", companySchema);

export default Company;
