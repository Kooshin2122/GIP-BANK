"use client";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="">
      <div className="bg-secondary py-16 max-md:px-6">
        <div className="container mx-auto">
          <div className="relative ">
            <div className="max-sm:w-[160px] max-1-md:w-[250px] w-[250px]  relative ">
              {/* <Image
                src="/gibbank-logo-white.svg"
                alt="GIB Bank Logo"
                fill
                priority
              /> */}
              <img src="/gibbank-logo-white.png" className="w-full h-full" />
            </div>
          </div>
          <div className="max-1-md:block  flex justify-between text-white my-10 w-full ">
            <FooterLinksGroup title="QUICK LINKS">
              <FooterLinks label="About us" href="/about-us" />
              <FooterLinks label="Ways to Bank" href="/ways-to-bank" />
              <FooterLinks label="Contact Us" href="#" />
            </FooterLinksGroup>

            <FooterLinksGroup title="HELPFUL INFORMATION">
              <FooterLinks label="Tariff Guide" href="#" />
              <FooterLinks label="Privacy Policy" href="/privacy-and-policy" />
              <FooterLinks label="Internet Banking Security Tips" href="/internet-banking" />
              <FooterLinks label="FRC link" href="#" />
            </FooterLinksGroup>

            <FooterLinksGroup title="BANK WITH US">
              <FooterLinks label="Banking for my Business" href="/homeBageLinks/bankingForMyBusiness" />
              <FooterLinks label="Banking for Me" href="/homeBageLinks/bankingForMe" />
              <FooterLinks
                label="Banking for Gov’t and Institutions"
                href="/personal/govt-and-institution"
              />

              <FooterLinks label="Banking for NGOs" href="/personal/ngos-page" />
              <FooterLinks
                label="Banking for Educational Institutions"
                href="/personal/education-and-institutions"
              />
              <FooterLinks label="Insurance for my Business" href="/solution/insurance/insuranceForMyBusiness" />
            </FooterLinksGroup>

            <FooterLinksGroup title="DISCLOSURES">
              <li className="my-2 text-base max-1-sm:text-sm">
                <Link href={"/codeOfConduct1.pdf"} passHref className="hover:underline flex gap-2 ">
                  Code of Conduct
                </Link>
              </li>
              <li className="my-2 text-base max-1-sm:text-sm">
                <Link href={"/BoardCharterGIB.pdf"} passHref className="hover:underline flex gap-2 ">
                  GIB Board Charters
                </Link>
              </li>
            </FooterLinksGroup>

            <FooterLinksGroup title="BANKING HOURS">
              <li className="my-2 text-base max-1-sm:text-sm">
                <p className="flex gap-2 ">
                  Saturday - Thursday 8:30 am to 4.00pm
              </p>
              </li>
              <li className="my-2 text-base max-1-sm:text-sm">
                <p className="flex gap-2 ">
                  Closed on Fridays
                </p>
              </li>
              <li className="my-2 text-base max-1-sm:text-sm">
                <p className="flex gap-2 ">
                  Closed on Public holidays
                </p>
              </li>

            </FooterLinksGroup>
          </div>
          <div className="text-center">
            <p className="text-white text-sm">
              GIB is regulated by Central Bank of Somalia and Member of Somali
              Bankers Association (SBA)
            </p>
          </div>
        </div>
      </div>
      <div className="bg-primary text-center py-3">
        <p className="text-white text-sm">
          Copyright © Galaxy International Bank 2023. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

const FooterLinksGroup = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  return (
    <div className="w-full max-1-md:mb-7">
      <button
        onClick={() => setToggleCollapse(true)}
        className="text-xl font-semibold mb-3 w-full flex justify-between outline-none max-1-sm:text-base"
      >
        {title}
        {toggleCollapse || (
          <MdKeyboardArrowDown className="max-1-md:block hidden" />
        )}
      </button>

      {toggleCollapse && <ul className="max-1-md:block hidden ">{children}</ul>}
      <ul className="max-1-md:hidden visible">{children}</ul>
    </div>
  );
};

const FooterLinks = ({
  label,
  href,
  icon,
}: {
  href?: string;
  label?: string;
  icon?: ReactNode;
}) => {
  return (
    <li className="my-2 text-base max-1-sm:text-sm">
      <Link href={href ?? "#"} className="hover:underline flex gap-2 ">
        {icon} {label}
      </Link>
    </li>
  );
};
