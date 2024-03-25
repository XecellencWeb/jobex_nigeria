"use client";

import { createUser } from "@/actions/user";
import ProviderGetter from "@/components/ProviderGetter";
import { auth_access_token } from "@/constants/token";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { ReactNode, useEffect, useRef, useState } from "react";

const Signup = () => {
  const search = useSearchParams();
  const submitForm: any = useRef(null);
  const [role, setRole] = useState<any>(null);
  useEffect(() => {
    const role = search.get("role");
    console.log("no role");
    if (role) {
      console.log("role exist");
      if (search.get("accesstoken") !== auth_access_token) return;
      localStorage.setItem("jobbex_user_role", role);
      setRole(role);
      console.log(role);
    }
  }, []);
  return (
    <div className="form-container">
      <form
        ref={submitForm}
        action={async (formData: FormData) => {
          await createUser(formData, role);
          alert("Account created, check your email to verify your account");
          submitForm.current.reset();
        }}
        className="form-element"
      >
        <h3 className="form-header">Sign up</h3>
        <div className="input-groups">
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
            className="input-field"
          />
          <span className="error empty">This field can&apos;t be empty</span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
          />
          <span className="error empty">This field can&apos;t be empty</span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
          />
          <span className="error empty">This field can&apos;t be empty</span>
          <button className="submit-btn">Register</button>
        </div>
        <ProviderGetter />
        <Link href="/login" className="spinner-text reg-cta">
          Log in instead
        </Link>
      </form>
    </div>
  );
};

export default Signup;
