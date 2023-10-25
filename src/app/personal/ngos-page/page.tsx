import NormalHeros from "@/components/heros/normal-heros";
import Benefits from "@/components/section/benefits";
import SectionList from "@/components/section/section-list";
import Title from "@/components/title";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsBank2 } from "react-icons/bs";
import { AiFillFileText, AiOutlineTransaction } from "react-icons/ai";

const requirements = [
  {
    title: "1. Rules, By-laws, or constitution of the NGO.",
    checkIcon: true,
  },
  {
    title: "2. Copy of a valid NGO registration certificate",
    checkIcon: true,
  },
  {
    title: "3. Resolution from the institution on its letter head authorizing the opening of the account, stating signatories, currency type and signing instructions.",
    checkIcon: true,
  },
  {
    title: "4. Identification documents of the account signatories.",
    checkIcon: true,
  },
  {
    title: "5. Two passport photographs of each signatory.",
    checkIcon: true,
  },
  {
    title: "6. Completed account opening form.",
    checkIcon: true,
  },
  {
    title: "7. Proof of address of the institution ;(lease or rent agreement can be used).",
    checkIcon: true,
  },
];

const features = [
  {
    title: "One free cheque book supplied annually.",
  },
  {
    title: "Incoming SWIFT funds from international sources.",
    // subtitles: ["90 days.", "180 days.", "365 days."],
  },
  {
    title: "Free RTGS and ACH.",
  },
  {
    title: "No monthly management fees.",
  },
  {
    title: "Bulk mobile money transfers.",
  },
  {
    title: "A dedicated team of Relationship Managers.",
  },
  {
    title: "Multiple channels of access to funds on mobile banking, online banking and agent banking.",
  },
  {
    title: "Letters of Guarantee.",
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

export default function NGOSPage() {
  return (
    <>
      <NormalHeros
        img="/ngos.jpg"
        title="Banking For NGOs"
        subtitle="This is an account that is specially tailored to the needs of charitable and donation-
        oriented organisations both National and International NGOs."
      />
      <Title label="Features & Benefits of" labelC="banking for NGOs" />
      <SectionList isBg items={features} isImgHidden />
      <Title label="Requirements" />
      <SectionList isBg isImgHidden items={requirements} />
      {/* <Title label="Benefits" />
      <Benefits items={benefits} /> */}
    </>
  );
}
