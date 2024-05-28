import React from "react";
import { CompanyType, JobPostedType } from "@/models/company";

const JobListings = ({
  all = false,
  jobs,
  headerSeen = true,
  headerText,
  isCompanyPage = false,
}: {
  all?: boolean;
  jobs: any;
  company?: any;
  headerSeen?: Boolean;
  headerText?: string;
  isCompanyPage?: Boolean;
}) => {
  const Jobs: any = all ? jobs : jobs?.slice(0, 8);
  const companyQueryString = `?`;
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
          {!headerText ? "Job Listing" : headerText}
        </h1>
        <div
          className="tab-class text-center wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              {Jobs?.map((job: any) => (
                <div
                  key={job._id}
                  style={{ background: "#fff" }}
                  className="job-item p-4 mb-4"
                >
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                         className="border rounded"
                        src={job.companyLogo || "/img/josteer logo.webp"}
                        alt=""
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "contain",
                          objectPosition: "center",
                          padding: 5
                        }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">
                          {job.jobName} needed at {job.companyName}
                        </h5>
                        <span className="text-truncate me-3">
                          <i className="fa fa-map-marker-alt text-primary me-2"></i>
                          {job.companyAddress}
                        </span>
                        <span className="text-truncate me-3">
                          <i className="far fa-clock text-primary me-2"></i>
                          {job.timeOfWork}
                        </span>
                        <span className="text-truncate me-0">
                          <i className="far fa-money-bill-alt text-primary me-2"></i>
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div className="d-flex mb-3">
                        <a
                          className="btn btn-light btn-square me-3"
                          href={`/job/${job._id}${
                            isCompanyPage && companyQueryString
                          }`}
                        >
                          <i className="far fa-heart text-primary"></i>
                        </a>
                        <a
                          className="btn btn-primary"
                          href={`/job/${job._id}${
                            isCompanyPage ? companyQueryString : ""
                          }`}
                        >
                          {isCompanyPage ? "View Details" : "Apply Now"}
                        </a>
                      </div>
                      <small className="text-truncate">
                        <i className="far fa-calendar-alt text-primary me-2"></i>
                        Ending Date: {job?.closingDate}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
              {headerSeen && (
                <a className="btn btn-primary py-3 px-5" href="/jobs">
                  Browse More Jobs
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListings;
