import "@/resource/css/style.css";
import "@/resource/css/bootstrap.min.css";
import "@/resource/lib/owlcarousel/assets/owl.carousel.min.css";
import "@/resource/lib/animate/animate.min.css";
import "@/resource/css/jobexcss.css";

import Navbar from "@/components/navbar";
import { SessionProvider } from "next-auth/react";
import ProviderSession from "@/components/ProviderSession";
import Footer from "@/components/footer";

export const metadata = {
  title: "Jobbex Nigeria",
  description: "Job Consulting Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </head>

      <body>
        <ProviderSession>
          <Navbar />
          {children}
          <Footer/>
        </ProviderSession>
      </body>
    </html>
  );
}
