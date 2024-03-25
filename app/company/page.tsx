"use client";

import { registerCompany } from "@/actions/company";
import { getUser } from "@/actions/user";
import { company_access_token } from "@/constants/token";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const RegisterCompany = ({ searchParams }: any) => {
  const navigate = useRouter();
  const [owner, setOwner] = useState<any>();
  const [ownerId, setOwnerId] = useState<any>();
  useEffect(() => {
    assignOwner();
  }, []);

  const assignOwner = async () => {
    if (searchParams.accesstoken !== company_access_token) location.href = "/";
    const userId = searchParams?.user;
    if (!userId) location.href = "/";
    const theUser = await getUser(userId);
    const user = JSON.parse(theUser);
    if (!user) location.href = "/";
    setOwner(user.fullName);
    setOwnerId(userId);
  };
  return (
    <div className="container">
      <h2 className="company-header">
        Hello, {owner?.split(" ")[0]}! Your company registration is almost
        ready. Fill the form below to continue
      </h2>
      <div className="company-form">
        <form
          action={async (formData: FormData) => {
            const companyCreated = await registerCompany(formData, ownerId);
            if (!companyCreated) return alert("all field must be filled");
            alert("company created successfully");
            navigate.replace(`/companypage/${ownerId}`);
          }}
          method="post"
        >
          <label htmlFor="name of company">
            <span className="label-text">Name of company</span>
            <input type="text" name="company-name" className="form-input" />
          </label>
          <label htmlFor="name of company">
            <span className="label-text">Company address</span>
            <input type="text" name="company-address" className="form-input" />
          </label>
          <label htmlFor="name of company">
            <span className="label-text">Describe your company</span>
            <textarea className="form-area" name="company-desc" />
          </label>
          <button className="submit-btn">Register Company</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterCompany;
