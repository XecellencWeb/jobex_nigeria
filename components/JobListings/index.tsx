import Image from 'next/image'
import React from 'react'
import logo1 from "@/resource/img/com-logo-1.jpg"
import logo2 from "@/resource/img/com-logo-2.jpg"
import logo3 from "@/resource/img/com-logo-3.jpg"
import logo4 from "@/resource/img/com-logo-4.jpg"
import logo5 from "@/resource/img/com-logo-5.jpg"
import jobs from '@/dummyData/jobListings.json'

export type CompanyDetail = {
    name: string,
    website: string,
    address: string,
    about_company: string
}

export type AJob = {
    id:number,
    job_name:string,
    location:string,
    job_nature:string,
    salary:string,
    job_description:string,
    responsibility:string,
    qualifications:string,
    vacancy:number,
    created_at:string,
    ending_date:string,
    company_details:CompanyDetail,
    categories:string[]
} 

const JobListings = ({all=false}:{
    all?:boolean
}) => {
    const Jobs:any = all?jobs:jobs.slice(0,8)
  return (
    <div className="container-xxl py-5">
    <div className="container">
        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>
        <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                <li className="nav-item">
                    <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                        <h6 className="mt-n1 mb-0">Featured</h6>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                        <h6 className="mt-n1 mb-0">Full Time</h6>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                        <h6 className="mt-n1 mb-0">Part Time</h6>
                    </a>
                </li>
            </ul>
            <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">

                    {Jobs?.map((job:AJob)=>(<div key={job.id} className="job-item p-4 mb-4">
                        <div className="row g-4">
                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                <Image className="flex-shrink-0 img-fluid border rounded" src={logo1} alt="" style={{width: "80px", height: "80px"}}/>
                                <div className="text-start ps-4">
                                    <h5 className="mb-3">{job.job_name} needed at {job.company_details.name}</h5>
                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>{job.location}</span>
                                    <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>{job.job_nature}</span>
                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>{job.salary}</span>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                <div className="d-flex mb-3">
                                    <a className="btn btn-light btn-square me-3" href={`/job/${job.id}`}><i className="far fa-heart text-primary"></i></a>
                                    <a className="btn btn-primary" href={`/job/${job.id}`}>Apply Now</a>
                                </div>
                                <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Ending Date: {job.ending_date}</small>
                            </div>
                        </div>
                    </div>))}
                    <a className="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default JobListings
