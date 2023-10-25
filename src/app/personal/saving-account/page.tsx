import NormalHeros from "@/components/heros/normal-heros";
import Benefits from "@/components/section/benefits";
import SectionList from "@/components/section/section-list";
import Title from "@/components/title";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsBank2 } from "react-icons/bs";
import { AiFillFileText, AiOutlineTransaction } from "react-icons/ai";

const requirements = [
  {
    title: "ID/passport",
    checkIcon: true,
  },
  {
    title: "Passport photo (taken at the branch)",
    checkIcon: true,
  },
];

const features = [
  {
    title: "Free standing orders.",
  },
  {
    title: "No minimum amount to save",
    // subtitles: ["90 days.", "180 days.", "365 days."],
  },
  {
    title: "Preferential financing rates for your future investments",
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

export default function SavingAccountPage() {
  return (
    <>
      <NormalHeros
        img="/saving.jpg"
        title="Saving Account"
        subtitle="Save for the things that matter. Available for individuals and groups"
      />
      <Title label="Features & Benefits of" labelC="saving account" />
      <SectionList isBg items={features} isImgHidden />
      <Title label="Requirements" />
      <SectionList isBg isImgHidden items={requirements} />
      {/* <Title label="Benefits" />
      <Benefits items={benefits} /> */}
    </>
  );
}
