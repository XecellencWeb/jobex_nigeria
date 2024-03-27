"use client";

import { getCompanyDetails } from "@/actions/company";
import JobListings from "@/components/JobListings";
import Hero from "@/components/hero";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CompanyPage = ({ params }: any) => {
  const [user, setUser] = useState<any>();

  const getCompanyDetail = async () => {
    const details = await getCompanyDetails(params.id);
    setUser(JSON.parse(details || "null"));
  };
  useEffect(() => {
    getCompanyDetail();
  }, []);

  return (
    <>
      <Hero
        text={`Hello ${
          user?.user.fullName.split(" ")[0]
        }, welcome to Jobbex Nigeria. You can now get started posting your jobs.`}
        name="Company Profile"
      />
      <div className="container">
        <Link href={`${params.id}/new-job`} className="add-job-btn">
          Add a Job
        </Link>
        {user?.jobs.length === 0 ? (
          <div className="container">
            <p className="no-job-text">
              You have not posted any Jobs yet. Please kindly post a Job start
              to get useful feedbacks from Job seekers
            </p>
          </div>
        ) : (
          <div className="container">
            <div className="jobs-posted-container">
              <JobListings
                jobs={user?.jobs}
                headerSeen={false}
                headerText="Jobs you posted"
                isCompanyPage={true}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CompanyPage;
