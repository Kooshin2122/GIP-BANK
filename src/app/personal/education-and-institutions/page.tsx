import NormalHeros from "@/components/heros/normal-heros";
import Benefits from "@/components/section/benefits";
import SectionList from "@/components/section/section-list";
import Title from "@/components/title";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsBank2 } from "react-icons/bs";
import panner from '../../../../public/saving.jpg';
import { AiFillFileText, AiOutlineTransaction } from "react-icons/ai";

const requirements = [
  {
    title: "Registration certificate.",
    checkIcon: true,
  },
  {
    title: "A letter of introduction from the Ministry of Education",
    checkIcon: true,
  },
  {
    title: "Board resolution.",
    checkIcon: true,
  },
  {
    title: "Photos and ID/passports of signatories.",
    checkIcon: true,
  },
];

const features = [
  {
    title: "Access to different payment solutions.",
  },
  {
    title: "24/7 digital banking.",
    // subtitles: ["90 days.", "180 days.", "365 days."],
  },
  {
    title: "Special rates for school related financing.",
  },
  {
    title: "Access to a dedicated Business Banker.",
  },
  {
    title: "Access to liquidity management solutions to better manage your cash flow.",
  },
];

const benefits = [
  {
    Icon: BiMoneyWithdraw,
    isPrimaryBg: true,
    title:
      "One can withdraw at maturity or reinvest for a further period of your choice",
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
];

export default function EducationalAndInstitutionsAccountPage() {
  return (
    <>
      <NormalHeros
        img="/edu1.jpg"
        title="Banking For Educational & Institutions"
        subtitle="We understand the importance of the education sector to the growth of Somalia’s 
        economy. That’s why we offer solutions to help your public or private education 
        institution meet its strategic aims and objectives."
      />
      <Title label="Features & Benefits of" labelC="banking for educational & institutions" />
      <SectionList isBg items={features} isImgHidden />
      <Title label="Requirements" />
      <SectionList isBg isImgHidden items={requirements} />
      {/* <Title label="Benefits" />
      <Benefits items={benefits} /> */}
    </>
  );
}
