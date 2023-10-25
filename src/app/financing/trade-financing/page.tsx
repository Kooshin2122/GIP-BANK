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
    title:
      "Up to 3 years repayment for personal mortgage and 2 years for plot financing",
  },
  {
    title: "Transaction based account",
  },
  {
    title: "Financing up to 80% of plot/land valued",
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
    isPrimaryBg: true,
    title: "Certified bank statement for the last six months",
  },
];
export default function TradeFinancingPage() {
  return (
    <>
      <NormalHeros
        img="/personal-hero-account.png"
        title="Trade Financing Account"
        subtitle="Whether you are setting up a new plant, expanding your existing and distribution capacity, GIB designed tailored trade
        financing facilities to ensure your business gets the right tools for the job done!"
      />
      <Title label="Features of" labelC="Trade financind Account " />
      <SectionList isBg items={features} img="/trade-financing.png" />

      <Title label="Benefits" />
      <Benefits items={benefits} />
    </>
  );
}
