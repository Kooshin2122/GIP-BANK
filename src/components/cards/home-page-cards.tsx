import Image from "next/image";
import React, { ReactNode } from "react";
import { CustomerSwiper } from "../swiper/swiper";
import { JsxElement } from "typescript";
import Link from "../../../node_modules/next/link";

export default function HomePageCards() {
  return (
    <>
      <div className="container  mx-auto  relative z-10 flex justify-evenly gap-10 max-sm:gap-5  flex-wrap mt-[-100px] max-sm:mt-[-50px] max-1-sm:mt-10 max-1-sm:grid max-1-sm:grid-cols-2 max-1-sm:px-3">
        {/* 
        <Card
          img="/business-bank.png"
          labelLight="Banking for"
          labelThick="My Business"
        /> */}
        <Card
          img="/personal-banking-icon.png"
          labelLight="Banking for"
          labelThick="Me"
          href="/homeBageLinks/bankingForMe"
        />
        <Card
          img="/business-bank.png"
          labelLight="Banking for"
          labelThick="My Business"
          href="/homeBageLinks/bankingForMyBusiness"
        />
        <Card
          img="/buildings.png"
          labelLight="Banking for Gov't"
          labelThick="& Institutions"
          href="/personal/govt-and-institution"
        />

        <Card
          img="/ngo.png"
          labelLight="Banking for"
          labelThick="NGOs"
          href="/personal/ngos-page"
        />

        <Card
          img="/university.png"
          labelLight="Banking for Educational"
          labelThick="Institutions"
          href="/personal/education-and-institutions"
        />

        {/* <Card
          img="/mobile-banking-icon.png"
          labelLight="Mobile"
          labelThick="Banking"
          height={30}
          width={60}
        /> */}
      </div>
      <div className="container  mx-auto  mt-10 relative z-10 flex justify-center gap-16 max-sm:gap-5  flex-wrap  max-1-sm:mt-10 max-1-sm:grid max-1-sm:grid-cols-2 max-1-sm:px-3">
        <Card
          img="/cor-bankin-icon.png"
          labelLight="Insurance for"
          labelThick="My Business"
          href="/solution/insurance/insuranceForMyBusiness"
        />
        <Card
          img="/swift-transfer-icon.png"
          labelLight="International"
          labelThick="Payments"
          href="/solution/payment/swift"
        />

        <Card
          img="/microfinance-1.png"
          labelLight=""
          labelThick="Microfinance"
          href="/whoWeServe/personalBanking/microfinance"
        />
      </div>
    </>
  );
}

export const Card = ({
  img,
  labelLight,
  labelThick,
  height,
  width,
  className,
  Icon,
  href,
  isPrimaryBg = false,
}: {
  img?: string;
  labelLight: string;
  labelThick: string;
  height?: number;
  width?: number;
  className?: string;
  Icon?: any;
  href?: string;
  isPrimaryBg?: boolean;
}) => {
  return (
    <Link href={href ?? "#"} >
      <div
        className={
          `bg-white w-60 max-1-sm:w-full max-1-sm:h-full p-2 hover:border-2  hover:border-primary hover:cursor-pointer  h-56 overflow-hidden rounded-md shadow-md max-1-sm:shadow-none  first-letter:
          transform transition duration-500 hover:scale-110
          ` + className
        }
      >
        <div
          className={
            "w-full h-3/5 flex justify-center items-center max-1-sm:py-10 " +
            (isPrimaryBg ? "bg-primary" : "bg-secondary ")
          }
        >
          {!!Icon ? (
            <Icon className="text-5xl text-white" />
          ) : (
            <Image
              src={img ?? ""}
              height={height ?? 80}
              alt=""
              width={width ?? 80}
              priority
            />
          )}
        </div>
        <div className="flex flex-col justify-center items-center h-2/5 text-secondary  max-1-sm:py-5 px-2">
          <h3 className="text-lg font-normal max-1-sm:text-lg text-center">
            {labelLight}
          </h3>
          <h1 className="text-xl font-medium max-1-sm:text-xl">{labelThick}</h1>
        </div>
      </div>
    </Link>
  );
};
