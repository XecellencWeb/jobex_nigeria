"use client";

import { addNewJob } from "@/actions/company";
import React, { useEffect } from "react";

const adminCredentials = {
  username: "excojosi",
  password: "Excojosi#88881",
};

const AdminPage = () => {
    // if (prompt("Enter admin username") !== adminCredentials.username)
    //   return (location.href = "/");
    // if (prompt("Enter admin password") !== adminCredentials.password)
    //   return (location.href = "/");

  return (
    <div className="container">
      <div className="">
        <h4 className="mb-4">Post a Job</h4>
        <form action={async (formData:FormData)=>{
          const result = await addNewJob(formData)
          alert(result[1])
          }} method="POST">
          <div className="row g-3">
            <div className="col-12 col-sm-6">
              <input
                type="text"
                className="form-control"
                name="job-name"
                placeholder="Job Name"
                required
              />
            </div>
            <div className="col-12 col-sm-6">
              <input
                type="text"
                className="form-control"
                name="company-name"
                placeholder="Company Name"
                required
              />
            </div>
            <div className="col-12 col-sm-6">
              <input
                type="text"
                className="form-control"
                name="company-website"
                placeholder="Company Website"
              />
            </div>

            <div className="col-12 col-sm-6">
              <input
                type="text"
                className="form-control"
                name="company-address"
                placeholder="Company Address"
                required
              />
            </div>
            <div className="col-12 col-sm-6">
              <input
                type="number"
                className="form-control"
                name="job-salary"
                placeholder="Job Salary"
                required
              />
            </div>

            <div className="col-12 col-sm-6">
              <input
                type="file"
                name="company-logo"
                placeholder="Company logo"
                className="form-control bg-white"
              />
            </div>
            <div className="col-12">
              <textarea
                className="form-control"
                name="job-description"
                rows={5}
                placeholder="Enter job description..."
              ></textarea>
            </div>
            <div className="col-12">
              <button className="btn btn-primary w-100" type="submit">
                Post Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
