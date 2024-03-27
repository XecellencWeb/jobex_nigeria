"use client";

import { addCompanyJob } from "@/actions/company";
import React from "react";

const NewJob = ({ params }: any) => {
  return (
    <div className="container ">
      <h2 className="company-header">
        Hello, Add a new Job and get fast feedbacks from your clients.
      </h2>
      <div className="container">
        <form
          action={async (formData: FormData) => {
            const posted:any = await addCompanyJob(params.id, formData);
            if(posted[0])return location.href = `/companypage/${params.id}`
            alert(posted[1])
          }}
          className="add-a-job company-form"
        >
          <label htmlFor="name of job" className="">
            <span className="label-text">Name of Job</span>
            <input  name="job-name" id="" className="form-input" />
          </label>
          <label htmlFor="Job position" className="">
            <span className="label-text">Role of employee</span>
            <textarea className="form-area" name="employee-role" id="" />
          </label>
          <label htmlFor="Employee age preference" className="">
            <span className="label-text">Employee age preference</span>
            <input name="job-age" placeholder="e.g 23 - 35" id="" className="form-input" />
          </label>
          <label htmlFor="Employee experience preference" className="">
            <span className="label-text">Employee experience preference</span>
            <textarea name="job-experience" id="" className="form-area" />
          </label>
          <label htmlFor="Employee qualification preference" className="">
            <span className="label-text">
              Employee qualification preference
            </span>
            <textarea name="job-qualification" id="" className="form-area" />
          </label>
          <label htmlFor="time of work" className="">
            <span className="label-text">Time of work</span>
            <input
              name="job-time"
              type="text"
              className="form-input"
              placeholder="e.g 9am - 4pm"
            />
          </label>
          <label htmlFor="weekend off">
            <span className="label-text">Will employee work on weekends?</span>
            <span className="radio-input">
              <input type="radio" name="weekends-allowed" value="yes" id="" />{" "}
              Yes
            </span>
            <span className="radio-input">
              <input type="radio" name="weekends-allowed" value="No" id="" />
              No
            </span>
          </label>
          <label htmlFor="Extra pay">
            <span className="label-text">Is there extra pay for overtime?</span>
            <span className="radio-input">
              <input type="radio" name="extra-pay" value="yes" id="" /> Yes
            </span>
            <span className="radio-input">
              <input type="radio" name="extra-pay" value="No" id="" />
              No
            </span>
          </label>
          <label htmlFor="Leaves Allowed">
            <span className="label-text">
              Are there any leave(s) allowed for staff?
            </span>
            <span className="radio-input">
              <input type="radio" name="leave-allowed" value="yes" id="" /> Yes
            </span>
            <span className="radio-input">
              <input type="radio" name="leave-allowed" value="No" id="" />
              No
            </span>
          </label>
          <label htmlFor="Salary" className="">
            <span className="label-text">Employee salary</span>
            <input type="number" name="job-salary" id="" className="form-input" />
          </label>
          <label htmlFor="Salary" className="">
            <span className="label-text">Closing date</span>
            <input type="date" name="closing-date" id="" />
          </label>
          <button className="submit-btn">Add new job</button>
        </form>
      </div>
    </div>
  );
};

export default NewJob;
