import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <Link
        href="/"
        className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
      >
        <h1 className="m-0 text-primary">JobEntry</h1>
      </Link>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link href="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link href="/about" className="nav-item nav-link">
            About
          </Link>

          <div className="nav-item dropdown">
            <Link
              href="/jobs"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Jobs
            </Link>
            <div className="dropdown-menu rounded-0 m-0">
              <Link href="/job-categories" className="dropdown-item">
                Job Category
              </Link>
            </div>
          </div>
          <Link href="/contact" className="nav-item nav-link">
            Contact
          </Link>
        </div>
        <Link
          href="/post-job"
          className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
        >
          Post A Job<i className="fa fa-arrow-right ms-3"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
