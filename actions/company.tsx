"use server";

import Company, { JobPostedType, Jobing } from "@/models/company";
import User from "@/models/user";
import { connectDb } from "@/utils/db";

export const registerCompany = async (formData: FormData, ownerId: string) => {
  const companyData: any = {
    name: formData.get("company-name"),
    address: formData.get("company-address"),
    desc: formData.get("company-desc"),
    _id: ownerId,
  };

  for (const value in companyData) {
    if (!companyData[value]) {
      return false;
    }
  }
  await connectDb();
  const companyExist = await Company.findById(ownerId);
  if (companyExist) return false;
  await Company.create(companyData);
  return true;
};
export const getCompany = async (id: any) => {
  if (!id) return false;
  await connectDb();
  const company = await Company.findById(id);
  return company;
};
export const addCompanyJob = async (
  companyId: any,
  formData: FormData,
  isadmin = false
) => {
  if (!companyId && !isadmin) return [false, "Company Id is invalid"];

  const jobData: any = {
    name: formData.get("job-name"),
    role: formData.get("employee-role"),
    agePreference: formData.get("job-age"),
    qualifications: formData.get("job-qualification"),
    timeOfWork: formData.get("job-time"),
    weekendsFree: formData.get("weekends-allowed"),
    extrapayOvertime: formData.get("extra-pay"),
    leavesAllowed: formData.get("leave-allowed"),
    experience: formData.get("job-experience"),
    salary: formData.get("job-salary"),
    closingDate: formData.get("closing-date"),
    companyId,
  };

  const otherDatails: any = {
    companyName: formData.get("company-name"),
    companyAddress: formData.get("companyAddress"),
  };

  for (const value in jobData) {
    if (!jobData[value]) {
      return [false, "All fields must be provided"];
    }
  }

  await connectDb();
  const companyDetails = await getCompany(companyId);
  if (!companyDetails && !isadmin) return false;
  if (isadmin) await Jobing.create({ ...jobData, ...otherDatails });
  else
    await Jobing.create({
      ...jobData,
      companyName: companyDetails.name,
      companyAddress: companyDetails.address,
      companyDesc: companyDetails.desc,
    });
  return [true];
};

export const getCompanyDetails = async (userId: any) => {
  if (!userId) return null;
  await connectDb();
  const user = await User.findById(userId);
  const jobs: any = await Jobing.find({ companyId: userId });

  return JSON.stringify({ user, jobs });
};

export const getJob = async (id: any) => {
  if (!id) return false;
  await connectDb();
  const job: any = await Jobing.findById(id);
  return JSON.stringify({ ...job._doc });
};

export const getJobs = async () => {
  await connectDb();
  const jobs: any = await Jobing.find().sort({ createdAt: -1 });
  return JSON.stringify(jobs);
};
