"use client";

import { loginUser } from "@/actions/user";
import { signUser } from "@/client/user";
import ProviderGetter from "@/components/ProviderGetter";
import { useAuthRedirect } from "@/hooks/UserRedirector";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

const Login = () => {
  const navigate = useRouter()
  const submitForm: any = useRef();

  return (
    <div className="form-container">
      <form
        ref={submitForm}
        action={async (formData: FormData) => {
          const correctUser = await loginUser({
            email: formData.get("email"),
            password: formData.get("password"),
          });
          alert("User In");
          if (correctUser) submitForm.current.reset();
          signUser(correctUser);
          location.href = '/'
        }}
        className="form-element"
      >
        <h3 className="form-header">Log In</h3>
        <div className="input-groups">
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
          <button className="submit-btn">Log In</button>
        </div>
        <ProviderGetter />
        <Link href="/signup" className="spinner-text reg-cta">
          Sign up instead
        </Link>
      </form>
    </div>
  );
};

export default Login;
