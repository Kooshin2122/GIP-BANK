"use client";

import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import { Inter, Montserrat } from "next/font/google";
import PageHeader from "@/components/header/page_header";
import Footer from "@/components/footer/footer";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className={inter.className}>
        <PageHeader />
        {children}
        <Footer />
        <ProgressBar
          height="4px"
          color="#F05A28"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </body>
    </html>
  );
}
