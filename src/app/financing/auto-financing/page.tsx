import NormalHeros from "@/components/heros/normal-heros";
import SectionList from "@/components/section/section-list";
import Title from "@/components/title";
import { BiTransfer } from "react-icons/bi";
import {
  BsBank2,
  BsCreditCard,
  BsFillHandbagFill,
  BsQrCode,
} from "react-icons/bs";
import { PiArrowsInCardinalBold } from "react-icons/pi";
import { AiFillFileText, AiOutlineTransaction } from "react-icons/ai";
import { MdOutlineSendToMobile } from "react-icons/md";
import Benefits from "@/components/section/benefits";
import {
  FaDatabase,
  FaHandshake,
  FaShieldAlt,
  FaUserShield,
} from "react-icons/fa";

const features = [
  {
    title: " Free financial planning and expert advice",
  },
  {
    title: "Up to 3 years repayment",
  },
  {
    title: "Financing up to 70% of your need",
  },
  {
    title: "Simplified process and competitive financing rate",
  },
  {
    title: "Shariah compliant",
  },
];

const benefits = [
  {
    Icon: FaHandshake,
    isPrimaryBg: true,
    title: "Maintain an active account with Gib",
  },

  {
    Icon: FaDatabase,
    isPrimaryBg: false,
    title: "Down payment up to  30%",
  },
  {
    Icon: FaUserShield,
    isPrimaryBg: true,
    title: "Satisfied guarantor for less than USD 1000",
  },
  {
    Icon: FaShieldAlt,
    isPrimaryBg: false,
    title:
      "For more than USD 10,000 applicant brings land or property as collateral",
  },
  {
    Icon: BsCreditCard,
    isPrimaryBg: false,
    title: "Certified bank statement for the last six months",
  },
];
export default function AutoFinancingPage() {
  return (
    <>
      <NormalHeros
        img="/personal-hero-account.png"
        title="Auto Financing Account"
        subtitle="Buying a car shouldn’t be a financial burden on you. We can help you to get your dream car and our rates are the best in the market."
      />
      <Title label="Features of" labelC="the  auto  financing Account" />
      <SectionList isBg items={features} img="/auto-fiancing.jpg" />

      <Title label="Requirements" />
      <Benefits items={benefits} />
    </>
  );
}
