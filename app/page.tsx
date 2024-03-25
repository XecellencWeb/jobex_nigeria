"use client";

import { verifyUser } from "@/actions/user";
import { signUser } from "@/client/user";
import Categories from "@/components/Categories";
import JobListings from "@/components/JobListings";
import About from "@/components/about";
import Hero from "@/components/hero";
import Search from "@/components/search";
import Testimonies from "@/components/testimonies";
import { roles } from "@/constants/global";
import { company_access_token, provider_token } from "@/constants/token";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";


const Home = () => {
  const navigate = useRouter();
  const search = useSearchParams()
  const { data: session } = useSession();

  useEffect(() => {
    return () => {
      if (JSON.parse(search.get('verify') || 'null')) userVerify();
    };
  });

  useEffect(() => {
    return () => {
      if (JSON.parse(search.get('signedin') || 'null')) signUserIn();
    };
  }, [session]);

  const userVerify = async () => {
    const token = search.get('token')
    const userid = search.get('userid')
    const verified = await verifyUser({ userid, token });
    signUser({ userId: userid });
    
    if (verified === roles[1]) {
      console.log("entered");
      return (location.href = `/company?user=${userid}&accesstoken=${company_access_token}`);
    }

    if (verified) location.href = "/";
  };

  const signUserIn = () => {
    const providertoken = search.get('providertoken')
    if (providertoken !== provider_token) return;
    if (!session) return;
    //@ts-ignore
    signUser({ userId: session.user.id });
    location.href = "/";
  };

  return (
    <>
      <Hero isHomage={true} />
      <Search />
      <Categories />
      <About />
      <JobListings />
      <Testimonies />
    </>
  );
};

export default Home;
