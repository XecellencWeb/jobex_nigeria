import Link from "next/link";
type HeroProps = {
  isHomage?: boolean;
  name?: string;
  text?: string;
};

const Hero = ({ isHomage = false, name, text }: HeroProps) => {
  const bgStyle = {
    background: "rgba(43, 57, 64, .7)",
  };
  if (!isHomage) {
    return (
      <div className=" py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            {text || name || "About Us"}
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                {name || "About"}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    );
  }
  return (
    <div className=" p-0">
      <div className="owl-carousel header-carousel position-relative owl-loaded owl-drag">
        <div className="owl-carousel-item position-relative">
          <img
            className="img-fluid hero-image"
            src="/img/carousel-1.jpg"
            alt=""
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={bgStyle}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-3 text-white animated slideInDown mb-4">
                    Let Us Manage Your Job Business
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    No need to go through all the stress of getting a Job. You can
                    get a Job online simply by following our procedures.
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
