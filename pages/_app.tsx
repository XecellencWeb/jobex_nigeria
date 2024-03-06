import Head from "next/head";

import "@/resource/css/style.css";
import "@/resource/css/bootstrap.min.css";
import "@/resource/lib/owlcarousel/assets/owl.carousel.min.css";
import "@/resource/lib/animate/animate.min.css";
import "@/resource/css/jobexcss.css"
import { AppProps } from "next/app";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

//Scripts

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
