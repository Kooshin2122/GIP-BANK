import Footer from "@/components/footer/footer";
import GetApp from "@/components/GetApp/index";
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
      <CustomerSwiper className="h-[650px] max-md:h-[600px] max-sm:h-[400px] max-1-sm:h-[350px]">
        <MainSwiper
          showContent={true}
          img="/GIB_Bank_Pics/Home/Home1.jpg"
        />
        <MainSwiper
          showContent={true}
          img="/GIB_Bank_Pics/Home/Home2.jpg"
        />
        <MainSwiper
          showContent={true}
          img="/GIB_Bank_Pics/Home/Home3.jpg"
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
      <CustomerSwiper direction="horizontal" className="my-10">
        <MainSwiper
          img="/GIB_Bank_Pics/slides/slide1.jpg"
          showLinierGradient={false}
        />
        <MainSwiper
          img="/GIB_Bank_Pics/slides/slide2.jpg"
          showLinierGradient={false}
        />
        <MainSwiper
          img="/GIB_Bank_Pics/slides/slide3.jpg"
          showLinierGradient={false}
        />
      </CustomerSwiper>
      <GetApp />
    </>
  );
}


// @layer utilities {
//   .btn_white { 
//     @layer  border-white bg-white px-8 py-3 text-green-50
//   }
//   .btn_white_text  { 
//     @layer  border-white bg-white px-8 py-3 text-gray-90
//   }
//   .btn_green  { 
//     @layer  border-green-50 bg-green-50 px-8 py-5 text-white
//   }
//   .btn_dark_green { 
//     @layer  bg-green-90 px-8 py-4 text-white transition-all hover:bg-black
//   }
//   .btn_dark_green_outline  { 
//     @layer border-gray-20 bg-green-90 px-8 py-5 text-white
//   }

//   .max-container {
//     @layer mx-auto max-w-[1440px];
//   }

//   .padding-container {
//     @layer px-6 lg:px-20 3xl:px-0;
//   }

//   .flexCenter {
//     @layer flex items-center justify-center;
//   }

//   .flexBetween {
//     @layer flex items-center justify-between;
//   }

//   .flexStart {
//     @layer flex items-center justify-start;
//   }

//   .flexEnd {
//     @layer flex items-center justify-end;
//   }

//   /* FONTS */
//   .regular-64 {
//     @layer text-[64px] font-[400] leading-[120%];
//   }

//   .regular-40 {
//     @layer text-[40px] font-[400] leading-[120%];
//   }

//   .regular-32 {
//     @layer text-[32px] font-[400];
//   }

//   .regular-24 {
//     @layer text-[24px] font-[400];
//   }

//   .regular-20 {
//     @layer text-[20px] font-[400];
//   }

//   .regular-18 {
//     @layer text-[18px] font-[400];
//   }

//   .regular-16 {
//     @layer text-[16px] font-[400];
//   }

//   .regular-14 {
//     @layer text-[14px] font-[400];
//   }

//   .medium-14 {
//     @layer text-[14px] font-[600];
//   }

//   .bold-88 {
//     @layer text-[88px] font-[700] leading-[120%];
//   }

//   .bold-64 {
//     @layer text-[64px] font-[700] leading-[120%];
//   }

//   .bold-52 {
//     @layer text-[52px] font-[700] leading-[120%];
//   }

//   .bold-40 {
//     @layer text-[40px] font-[700] leading-[120%];
//   }

//   .bold-32 {
//     @layer text-[32px] font-[700] leading-[120%];
//   }

//   .bold-20 {
//     @layer text-[20px] font-[700];
//   }

//   .bold-18 {
//     @layer text-[18px] font-[700];
//   }

//   .bold-16 {
//     @layer text-[16px] font-[700];
//   }

//   /* Hero */
//   .hero-map {
//     @layer absolute right-0 top-0 h-screen w-screen bg-pattern-2 bg-cover bg-center md:-right-28 xl:-top-60;
//   }

//   /* Camp */
//   .camp-quote {
//     @layer absolute -right-6 bottom-4 w-[140px] lg:bottom-10 xl:-right-8 xl:w-[186px] 3xl:right-0;
//   }

//   /* Feature */
//   .feature-phone {
//     @layer absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex  3xl:left-20;
//   }

//   /* Get App */
//   .get-app {
//     @layer max-container relative flex w-full  flex-col justify-between gap-32 overflow-hidden bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl;
//   }
// }