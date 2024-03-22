import Jobs from '@/dummyData/jobListings.json'
import React from "react";
import logo1 from "@/resource/img/com-logo-1.jpg";
import Image from "next/image";
import { CateProps } from '../Categories';
import { AJob } from '../JobListings';





const JobDetail = ({jobId}:{
    jobId:any
}) => {
    const job:any = Jobs.find(job => job.id == jobId)
  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="row gy-5 gx-4">
          <div className="col-lg-8">
            <div className="d-flex align-items-center mb-5">
              <Image
                className="flex-shrink-0 img-fluid border rounded"
                src={logo1}
                alt=""
                style={{ width: "80", height: "80px" }}
              />
              <div className="text-start ps-4">
                <h3 className="mb-3">{job?.job_name}</h3>
                <span className="text-truncate me-3">
                  <i className="fa fa-map-marker-alt text-primary me-2"></i>{job.location}
                </span>
                <span className="text-truncate me-3">
                  <i className="far fa-clock text-primary me-2"></i>{job.job_nature}
                </span>
                <span className="text-truncate me-0">
                  <i className="far fa-money-bill-alt text-primary me-2"></i>
                  {job.salary}
                </span>
              </div>
            </div>

            <div className="mb-5">
              <h4 className="mb-3">Job description</h4>
              <p>
             {job.job_description}
              </p>
              <h4 className="mb-3">Responsibility</h4>
              <p>
                Magna et elitr diam sed lorem. Diam diam stet erat no est est.
                Accusam sed lorem stet voluptua sit sit at stet consetetur,
                takimata at diam kasd gubergren elitr dolor
              </p>
              <ul className="list-unstyled">
                {Array(4).fill(job.responsibility).map((respons,i) => <li key={i}>
                  <i className="fa fa-angle-right text-primary me-2"></i>Dolor
                  {respons}
                </li>)}
                
              </ul>
              <h4 className="mb-3">Qualifications</h4>
              <p>
                Magna et elitr diam sed lorem. Diam diam stet erat no est est.
                Accusam sed lorem stet voluptua sit sit at stet consetetur,
                takimata at diam kasd gubergren elitr dolor
              </p>
              <ul className="list-unstyled">
              {Array(4).fill(job.qualifications).map((respons,i) => <li key={i}>
                  <i className="fa fa-angle-right text-primary me-2"></i>Dolor
                  {respons}
                </li>)}
              </ul>
            </div>

            <div className="">
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
            </div>
          </div>

          <div className="col-lg-4">
            <div
              className="bg-light rounded p-5 mb-4 wow slideInUp"
              data-wow-delay="0.1s"
            >
              <h4 className="mb-4">Job Summery</h4>
              <p>
                <i className="fa fa-angle-right text-primary me-2"></i>Published
                On: {job.created_at}
              </p>
              <p>
                <i className="fa fa-angle-right text-primary me-2"></i>Vacancy: {job.vacancy} Position
              </p>
              <p>
                <i className="fa fa-angle-right text-primary me-2"></i>Job
                Nature: {job.job_nature}
              </p>
              <p>
                <i className="fa fa-angle-right text-primary me-2"></i>Salary:
                {job.salary}
              </p>
              <p>
                <i className="fa fa-angle-right text-primary me-2"></i>Location: {job.location}
              </p>
              <p className="m-0">
                <i className="fa fa-angle-right text-primary me-2"></i>Ending Date: {job.ending_date}
              </p>
            </div>
            <div
              className="bg-light rounded p-5 wow slideInUp"
              data-wow-delay="0.1s"
            >
              <h4 className="mb-4">Company Detail</h4>
              <p className="m-0">
                {job.company_details.about_company} located at {job.company_details.address}.<br/>
                You can visit website at <a href={"https://"+job.company_details.website}>{job.company_details.website}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
