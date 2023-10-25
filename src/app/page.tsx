import Footer from "@/components/footer/footer";
import PageHeader from "@/components/header/page_header";
import MainSwiper from "@/components/swiper/main-swiper";
import SectionSwiper from "@/components/swiper/section-swiper";
import { CustomerSwiper } from "@/components/swiper/swiper";
import Title from "@/components/title";
import Paragraph from "@/components/typographs/paragraph";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GIB | Galaxy International Bank",
  description:
    "What We Offer Personal Banking GIB provides a wide range of personal banking services for different purposes to its customers. The goal is to ensure inclusive access to banking and financing. SWIFT Money Transfer Corporate Banking We serve organizations and business enterprises to help them effectively manage their finances and move their funds securely",
};

export default function Home() {
  return (
    <>
      <CustomerSwiper className="h-[650px] max-md:h-[550px] max-sm:h-[400px] max-1-sm:h-[350px]">
        <MainSwiper
          showContent={true}
          img="/building.jpg"
        />
        <MainSwiper
          showContent={true}
        />
      </CustomerSwiper>
      <SectionSwiper />

      {/* <Title label="Who We Are" labelC="?" />
      <div className="container mx-auto mb-20 max-1-md:px-4">
        <Paragraph
          text="Galaxy International Bank (GIB) is a premier fully-fledged Islamic
          bank that is licensed and regulated by the Central bank of Somalia to
          offer banking and financial services under sharia’h principles. GIB
          offers a full range of financial services focused on sustainable
          development and wealth creation to inspire economic growth of Somali
          population."
        />
      </div> */}
      <Title label="Why Choose GIB’s " labelC="Insurance Premium Finance?" />
      <CustomerSwiper direction="horizontal" className="my-5">
        <MainSwiper
          img="/slide5.jpg"
          showLinierGradient={false}
        />
        <MainSwiper
          img="/slide2.png"
          showLinierGradient={false}
        />
        <MainSwiper
          img="/slide5.jpg"
          showLinierGradient={false}
        />
        <MainSwiper
          img="/slide4.png"
          showLinierGradient={false}
        />
      </CustomerSwiper>
    </>
  );
}
