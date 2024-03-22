import React from "react";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";

const ProviderGetter = () => {
  
  return (
    <div className="provider-container">
      <button type="button" className="google-btn" onClick={() => signIn("google")}>
        <Image
          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
          alt="google image" width={30} height={30}
        />{" "}
        Sign in with google
      </button>
    </div>
  );
};

export default ProviderGetter;
