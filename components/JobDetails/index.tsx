"use client";

import React, { useEffect, useState } from "react";
import { getJob } from "@/actions/company";

const JobDetail = ({ jobId }: { jobId: any }) => {
  const [job, setJob] = useState<any>();
  useEffect(() => {
    gettheJob();
  }, []);
  const gettheJob = async () => {
    const job = await getJob(jobId);
    setJob(JSON.parse(job || "null"));
  };

  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="row gy-5 gx-4">
          <div className="col-lg-8">
            <div className="d-flex align-items-center mb-5">
              <img
                className="flex-shrink-0 img-fluid border rounded"
                src="/img/com-logo-1.jpg"
                alt=""
                style={{ width: "80", height: "80px" }}
              />
              <div className="text-start ps-4">
                <h3 className="mb-3">{job?.name}</h3>
                <span className="text-truncate me-3">
                  <i className="fa fa-map-marker-alt text-primary me-2"></i>
                  {job?.companyAddress}
                </span>
                <span className="text-truncate me-3">
                  <i className="far fa-clock text-primary me-2"></i>
                  {job?.timeOfWork}
                </span>
                <span className="text-truncate me-0">
                  <i className="far fa-money-bill-alt text-primary me-2"></i>
                  {job?.salary}
                </span>
              </div>
            </div>

            <div className="mb-5">
              <h4 className="mb-3">Job description</h4>
              <p>{job?.role}</p>

              <h4>Job status</h4>
              <p>
                <i className="fa fa-angle-right text-primary me-2"></i>Job on
                weekends: {job?.weekendsFree}
              </p>
              <p>
                <i className="fa fa-angle-right text-primary me-2"></i>Extrapay
                on overtime: {job?.extrapayOvertime}
              </p>
              <p>
                <i className="fa fa-angle-right text-primary me-2"></i>Leaves
                allowed: {job?.leavesAllowed}
              </p>
              <h4 className="mb-3">Qualifications</h4>
              <p>{job?.qualifications}</p>
            </div>

            <strong className="">
              To apply for this job send your CV to this email{" "}
              <a href="mailto:jobbexnigeria@gmail.com">
                jobbexnigeria@gmail.com
              </a>
            </strong>

            {/* <div className="">
              <h4 className="mb-4">Apply For The Job</h4>
              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Portfolio Website"
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="file" className="form-control bg-white" />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      rows={5}
                      placeholder="Coverletter"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100" type="submit">
                      Apply Now
                    </button>
                  </div>
                </div>
              </form>
            </div> */}
          </div>

          <div className="col-lg-4">
            <div
              className="bg-light rounded p-5 mb-4 wow slideInUp"
              data-wow-delay="0.1s"
            >
              <h4 className="mb-4">Job Summery</h4>
              <p>
                <i className="fa fa-angle-right text-primary me-2"></i>Published
                On: {job?.createdAt}
              </p>
              <p>
                <i className="fa fa-angle-right text-primary me-2"></i>Salary:
                {job?.salary}
              </p>

              <p className="m-0">
                <i className="fa fa-angle-right text-primary me-2"></i>Ending
                Date: {job?.closingDate}
              </p>
            </div>
            <div
              className="bg-light rounded p-5 wow slideInUp"
              data-wow-delay="0.1s"
            >
              <h4 className="mb-4">Company Detail</h4>
              <p className="m-0">
                {job?.companyDesc}
                <br />
                {job?.companyName} is located at
                {job?.companyAddress}.<br />
                {job?.companyWebsite &&
                  "You can visit website at" +
                  (
                    <a href={"https://" + job?.companyWebsite}>
                      {job?.companyWebsite}
                    </a>
                  )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
