"use client";
import logo from '@/resource/img/logo1-main.png'

import { logOutFunc, signedUser } from "@/client/user";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { NotAcceptPages, roles } from "@/constants/global";
import { auth_access_token } from "@/constants/token";

const ProfileComponent = () => {
  const navigate = useRouter();
  return (
    <div className="profile-container">
      <Image
        src="https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png"
        alt="profile avater"
        width={50}
        height={50}
        className="profile-avater"
      />{" "}
      Profile
      <div className="profile-menus">
        <button
          onClick={() => {
            console.log("Logged Out");
            logOutFunc();
            location.reload();
          }}
          className="logout-btn"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

const Navbar = () => {
  const pathname: string = usePathname();
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(signedUser());
  }, []);

  if (NotAcceptPages.includes(pathname)) return;

  return (
    <>
      {/* {!user || user && (
        <div className="reg-container">
          <Link href="/login" className="reg login">
            Log in
          </Link>
          <Link href="/signup" className="reg signup">
            Sign up
          </Link>
        </div>
      )} */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0 text-gray-600">
        <Link
          href="/"
          className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
        >
          <img src='/img/josteer logo.webp' alt='Website logo' width={100}/>
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
                href="/job"
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
          {!user || user ? (
            <Link
              href={`/post-a-job`}
              className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
            >
              Post A Job<i className="fa fa-arrow-right ms-3"></i>
            </Link>
          ) : (
            <ProfileComponent />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
