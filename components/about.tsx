import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="row g-0 about-bg rounded overflow-hidden">
              <div className="col-6 text-start">
                <img
                  className="img-fluid w-100"
                  src="/img/about-1.jpg"
                  alt=""
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid"
                  src="/img/about-2.jpg"
                  style={{ width: "85%", marginTop: "15%" }}
                  alt=""
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid"
                  src="/img/about-3.jpg"
                  style={{ width: "85%" }}
                  alt=""
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid w-100"
                  src="/img/about-4.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="mb-4">
              We Help Get The Best Job And Find You Your Rightful Employee
            </h1>
            <p className="mb-4">
              JobSteer is a company based in Asaba Nigeria that helps you as an
              employee looking for a Job get the best Job that fits your dream
              and match your passion and as a company get the best employee with
              all the soft and hard skillsets.
              <br />
              We are skilled in:
            </p>
            <p>
              <i className="fa fa-check text-primary me-3"></i>Listening to your
              specifications.
            </p>
            <p>
              <i className="fa fa-check text-primary me-3"></i>Deciding on the
              best methods to apply to your specification.
            </p>
            <p>
              <i className="fa fa-check text-primary me-3"></i>Ensuring you get
              the best staff to move your company forward.
            </p>
            <Link
              href="/job"
              className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
            >
              Find A Job
            </Link>
            <Link
              href="/post-a-job"
              className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
            >
              Find An Employee
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
