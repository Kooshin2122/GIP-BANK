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
    title: "Access to growth",
  },
  {
    title: "Creating opportunities",
  },
  {
    title: "Protecting poor people",
  },
  {
    title: "Learning and knowledge sharing in the sector",
  },
  {
    title: "Gender and Youth inclusion",
  },
  {
    title: "Use of Technology",
  },
];

const requirements = [
  {
    title: "Trade – micro traders",
    checkIcon: true,
  },
  {
    title: "Agri-businesses including fishing, banana, sesame and vegetable",
    checkIcon: true,
  },
  {
    title: "Transport",
    checkIcon: true,
  },
  {
    title: "Renewable energy",
    checkIcon: true,
  },
];

export default function MicrofinanceAccountPage() {
  return (
    <>
      <NormalHeros
        img="/personal-hero-account.png"
        title="Microfinance Account"
        subtitle="GIB provides comprehensive Microfinance solutions to help poor and low-income businesses clients grow and success. The goal of the GIB Microfinance program is human development which is intended to uplift both the economic and social wellbeing of the poor people we cater for."
      />
      <Title label="Targeted" labelC="Industry Sector" />
      <SectionList isImgHidden items={requirements} />
      <Title label="Features Of" labelC="The Microfinance Account" />
      <SectionList items={features} img="/microfinance.png" />
    </>
  );
}
