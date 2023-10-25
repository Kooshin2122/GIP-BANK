import NormalHeros from "@/components/heros/normal-heros";
import Benefits from "@/components/section/benefits";
import SectionList from "@/components/section/section-list";
import Title from "@/components/title";
import { BiMoneyWithdraw, BiTransfer } from "react-icons/bi";
import { BsBank2 } from "react-icons/bs";
import { AiFillFileText, AiOutlineTransaction } from "react-icons/ai";
import { FaHandshake, FaUserClock } from "react-icons/fa";
import { PiArrowsInCardinalBold } from "react-icons/pi";
import { GiPayMoney } from "react-icons/gi";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { MdOutlineSendToMobile } from "react-icons/md";

const features = [
  {
    title: "Access to corporate internet banking.",
  },
  {
    title: "Access to a dedicated Business Banker.",
  },
  {
    title: "Customized cheque book.",
  },
  {
    title: "Reliable international payment solutions.",
  },
  {
    title: "RTGS and other local bulk payment solutions.",
  },
  {
    title: "Business advisory services.",
  },
  {
    title: "Access to Insurance services.",
  },
];
const requirements = [
  {
    title: "Application form duly completed",
  },
  {
    title: "Board of Directors resolution to open accounts",
  },
  {
    title: "Certificate of incorporation/Registration.",
  },
  {
    title: "ID/passport copies of all directors .",
  },
  {
    title: "Photos of account signatories.",
  },
];

const benefits = [
  {
    Icon: FaUserClock,
    isPrimaryBg: true,
    title: "Dedicated support around the clock",
  },
  {
    Icon: PiArrowsInCardinalBold,
    isPrimaryBg: false,
    title: "Access To Financing",
  },
  {
    Icon: BiTransfer,
    isPrimaryBg: true,
    title: "Free Account Transfers To GIB Accounts",
  },

  {
    Icon: BsBank2,
    isPrimaryBg: false,
    title: "RTGS Transfers",
  },
  {
    Icon: AiOutlineTransaction,
    isPrimaryBg: false,
    title: "SWIFT International Transfers",
  },
  {
    Icon: GiPayMoney,
    isPrimaryBg: true,
    title: "Payroll Services",
  },

  {
    Icon: FaHandshake,
    isPrimaryBg: false,
    title:
      "Dedicated Relationship Officer to provide personalised customer service",
  },
  {
    Icon: LiaMoneyCheckAltSolid,
    isPrimaryBg: true,
    title: "Access to insurance",
  },
  {
    Icon: MdOutlineSendToMobile,
    isPrimaryBg: true,
    title: "Access To Mobile and Internet Banking",
  },
];


export default function FixedDepositAccountPage() {
  return (
    <>
      <NormalHeros
        img="/personal-hero-account.png"
        title="Corporate current account "
        subtitle="This account will allow you to organize your finances while giving you access to your 
        money from anywhere through online banking and any branch countrywide. That means
        you can focus on what matters – running your business smoothly"
      />
      <Title label="Features & Benefits of" labelC="corporate current account" />
      <SectionList isBg items={features} isImgHidden />
      <Title label="Requirements" />
      <SectionList isBg items={requirements} isImgHidden />
      {/* <Benefits items={benefits} /> */}
    </>
  );
}
