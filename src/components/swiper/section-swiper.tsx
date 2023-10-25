"use client";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TextButton } from "../button";
import HomePageCards from "../cards/home-page-cards";
import Title from "../title";
import { CustomerSwiper } from "./swiper";
import Image from "next/image";
import Paragraph from "../typographs/paragraph";
import MainSwiper from "./main-swiper";

export default function SectionSwiper() {
  const images = ['/slide1.png', '/slide2.png', '/slide3.png', '/slide4.png',]
  return (
    <>
      <HomePageCards />
      {/* <Title label="Why Choose GIB’s " labelC="Insurance Premium Finance?" />
      <div className="bg-primarytp w-full mt-16 pt-5 pb-5">
        <div className="container mx-auto">
          <CustomerSwiper
            // direction="horizontal"
            className="max-1-md:h-[300px] h-[320px] "
          >
            <Image
              fill
              priority
              src={"/slide1.png"}
              alt="Picture of the author"
            />
            <Image
              priority
              src={"/slide2.png"}
              alt="Picture of the author"
              fill
            />
            <Image
              priority
              src={"/slide3.png"}
              alt="Picture of the author"
              fill
            />
            <Image
              priority
              src={"/slide4.png"}
              alt="Picture of the author"
              fill
            />
          </CustomerSwiper>
        </div>
      </div> */}
    </>
  );
}

const ItemSlide = ({
  title,
  description,
  image = "/solar.png",
}: {
  title: string;
  description: string;
  image?: string;
}) => {
  return (
    <div className="flex justify-between ">
      <div className="flex-1 px-3">
        <Title hideSide label={title} className="mt-4 text-xl" />
        <Paragraph text={description} className="max-1-md:mx-4" />
        {/* 
        <TextButton
          icon={<MdKeyboardArrowRight className="text-white text-2xl" />}
          className=" max-1-md:mx-4"
        >
          Read More
        </TextButton> */}
      </div>
      <div className="flex-1 flex justify-end py-5 items-center relative max-1-sm:hidden">
        <div className="relative w-[450px] max-1-md:w-[350px] max-1-md:h-[270px] h-[350px] max-1-md:mx-4">
          <Image priority src={image} alt={title} fill className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};
