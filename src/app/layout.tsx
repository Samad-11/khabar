import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "@/components/BootstrapClient";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Loading from "./Loading";
import Footer from "@/components/Footer";
// import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Sacchi Khabar",
  description: "Provide only news not masala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="container-fluid">
          <Suspense fallback={<Loading />}>
            <Navbar />
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </Suspense>
          <Footer />
        </main>
        <BootstrapClient />
      </body>
    </html>
  );
}
