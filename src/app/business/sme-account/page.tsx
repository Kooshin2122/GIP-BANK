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
    title: "Access to SME Business Loans.",
  },
  {
    title: "24/7 payment solutions.",
  },
  {
    title: "Business advisory services.",
  },
  {
    title: "Online and mobile banking solutions.",
  },
];
const requirements = [
  {
    title: "Trading license.",
  },
  {
    title: "Company's Partnership Deed (where applicable).",
  },
  {
    title: "IDs/passport of the Directors/Owners.",
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


export default function SMEAccountPage() {
  return (
    <>
      <NormalHeros
        img="/personal-hero-account.png"
        title="S-M-E Account"
        subtitle="This account is tailored to the specific needs of small growing enterprises."
      />
      <Title label="Features & Benefits" labelC="of SME account" />
      <SectionList isBg isImgHidden items={features} />

      <Title label="Requirements" />
      <SectionList isBg isImgHidden items={requirements} />
      {/* <Benefits items={benefits} /> */}
    </>
  );
}
