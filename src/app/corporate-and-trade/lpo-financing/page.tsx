import NormalHeros from "@/components/heros/normal-heros";
import Benefits from "@/components/section/benefits";
import SectionList from "@/components/section/section-list";
import Title from "@/components/title";
import React from "react";
import { AiFillFileText, AiOutlineTransaction } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { BsBank2, BsCreditCard, BsFillHandbagFill } from "react-icons/bs";
import { MdOutlineSendToMobile } from "react-icons/md";

const features = [
  {
    title: "Certificate of registration",
  },
  {
    title: "Copy of TIN certificate",
  },
  {
    title: "Copy of National ID/Passport",
  },
  {
    title: "LPO contract/tender document",
  },
  {
    title: "Evidence of orders , LPO’s, work contracts where applicable",
  },
  {
    title: "Provision of tangible security",
  },
];

const benefits = [
  {
    Icon: FaHandshake,
    isPrimaryBg: true,
    title: "Dedicated relationship officer",
  },

  {
    Icon: BsBank2,
    isPrimaryBg: false,
    title: "RTGS Transfers",
  },
  {
    Icon: AiOutlineTransaction,
    isPrimaryBg: true,
    title: "SWIFT International Transfers",
  },
  {
    Icon: AiFillFileText,
    isPrimaryBg: false,
    title: "Access To A Chequebook",
  },
  {
    Icon: BsCreditCard,
    isPrimaryBg: false,
    title: "Access To Debit Card",
  },
  {
    Icon: BsFillHandbagFill,
    isPrimaryBg: true,
    title: "Automatic access to our exclusive banking suites",
  },
  {
    Icon: MdOutlineSendToMobile,
    isPrimaryBg: false,
    title: "Access To Mobile and Internet Banking",
  },
];
const requirements = [
  {
    title: "Memorandum & Articles of Association.",
    checkIcon: true,
  },
  {
    title: "Certificate of Incorporation.",
    checkIcon: true,
  },
  {
    title: "Last two audited financial statements. Sole Proprietorship",
    checkIcon: true,
  },
  {
    title: "Certificate of registration.",
    checkIcon: true,
  },
];

export default function LPOFinancePage() {
  return (
    <>
      <NormalHeros
        img="/personal-hero-account.png"
        title="Lpo Finance"
        subtitle="When your business has purchase orders and award letters from reliable and established customers to deliver goods, services or contractual works, we give you all the help you need through our financing offerings."
      />
      <Title label="Features Of" labelC="The Lpo Finance  Account" />
      <SectionList isBg items={features} img="/lpo-finance.png" />

      <Title label="Requirements for companies" />
      <SectionList isImgHidden items={requirements} />
    </>
  );
}
