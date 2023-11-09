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
    title: "Current account designed for public sector agencies operations – main operations, payroll and utility payments.",
  },
  {
    title: "Revenue collection solutions.",
  },
  {
    title: "Bulk payment solutions.",
  },
  {
    title: "Customized accounts for special government programs.",
  },
  {
    title: "Free incoming funds.",
  },
  {
    title: "Dedicated Relationship Manager.",
  },
  {
    title: "Access to digital banking.",
  },
];
const requirements = [
  {
    title: "Approval letter from the ministry of finance and Central Bank of Somalia.",
    checkIcon: true,
  },
  {
    title: "A copy of bylaws",
    checkIcon: true,
  },
  {
    title: "Board resolution from the Board/executive committee clearly stating signatories and signing mandate",
    checkIcon: true,
  },
  {
    title: "Identity Documents of Directors and Account Signatories",
    checkIcon: true,
  },
  {
    title: "Physical Address Verification including verification of existence of a term for an office holder",
    checkIcon: true,
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
export default function GovtAndInstitutionAccountPage() {
  return (
    <>
      <NormalHeros
        img="/govt.jpg"
        title="Banking For Gov’t And Institution"
        subtitle="This account offers comprehensive financial solutions for government institutions and 
        public sector companies."
      />
      <Title label="Features & Benefits of" labelC="Banking For Gov`t And Institution" />
      <SectionList isBg items={features} isImgHidden />

      <Title label="Requirements" />
      <SectionList isBg items={requirements} isImgHidden />
    </>
  );
}
