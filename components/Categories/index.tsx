import React from "react";
import AllCategories from "@/dummyData/jobCategories.json";
export type CateProps = {
  id: number | string,
  job_category: string,
  total_vacancy: string
}


export type CategProps = {
    categories: CateProps[]
}

const Categories = () => {

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
          Explore By Category
        </h1>
        <div className="row g-4">
          {AllCategories?.map((categ)=>(
            <div key={categ.id}
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <a className="cat-item rounded p-4" href="">
              <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
              <h6 className="mb-3">{categ.job_category}</h6>
              <p className="mb-0">{categ.total_vacancy} Vacancy</p>
            </a>
          </div>
          ))
            
          }
        </div>
      </div>
    </div>
  );
};

export default Categories;
