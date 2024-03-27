import { getJobs } from "@/actions/company";
import JobListings from "@/components/JobListings";
import Hero from "@/components/hero";
import React, { useEffect, useState } from "react";

const JobsPage = () => {
  const [jobs, setJobs] = useState();
  const getAllJobs = async () => {
    const jobs = await getJobs();
    setJobs(JSON.parse(jobs || "null"));
  };

  useEffect(() => {
    getAllJobs();
  }, []);
  return (
    <>
      <Hero name="Jobs" />
      <JobListings jobs={jobs}/>
    </>
  );
};

export default JobsPage;
