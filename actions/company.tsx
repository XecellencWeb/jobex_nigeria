"use server";

import Company from "@/models/company";
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
