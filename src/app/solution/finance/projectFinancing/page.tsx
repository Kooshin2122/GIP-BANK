import NormalHeros from "@/components/heros/normal-heros";
import Benefits from "@/components/section/benefits";
import SectionList from "@/components/section/section-list";
import Title from "@/components/title";
import { BiTransfer } from "react-icons/bi";
import { BsBank2, BsCreditCard, BsQrCode } from "react-icons/bs";
import { PiArrowsInCardinalBold } from "react-icons/pi";
import { AiFillFileText, AiOutlineTransaction } from "react-icons/ai";
import { MdOutlineSendToMobile } from "react-icons/md";

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
    title: "Mobile banking for all your banking needs.",
  },
  {
    title: "Easy way to deposit and withdraw.",
  },
  {
    title: "Standing orders for regular payments.",
  },
  {
    title: "No monthly fee charged.",
  },
  {
    title: "Notifications for all transactions",
  },
];

const benefits = [
  {
    Icon: BsQrCode,
    isPrimaryBg: true,
    title: "SomQR Code",
  },
  {
    Icon: BsCreditCard,
    isPrimaryBg: false,
    title: "Access To Debit Card",
  },
  {
    Icon: PiArrowsInCardinalBold,
    isPrimaryBg: true,
    title: "Access To Financing",
  },
  {
    Icon: BiTransfer,
    isPrimaryBg: false,
    title: "Free Account Transfers To GIB Accounts",
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
    title: "Free Ordinary Statement",
  },
  {
    Icon: MdOutlineSendToMobile,
    isPrimaryBg: true,
    title: "Access To Mobile and Internet Banking",
  },
];

export default function ProjectFinancing() {
  return (
    <>
      <NormalHeros
        img="/GIB_Bank_Pics/project_fnc/Projectfinancing2.jpg"
        title="Project Financing"
        subtitle="At Galaxy International Bank, we recognize that ambitious goals require substantial resources. As your partner, we offer tailored financing solutions and access to the necessary capital, regardless of your project's size or complexity."
      />
      <Title label="How we can" labelC="help you" />
      <SectionList
        isBg
        isImgHidden
        text="Our Project Financing helps you in the development of infrastructure, energy, and real estate projects in a manner that upholds ethical and transparent financial practices. We encourage responsible investment and foster sustainable economic development while ensuring that investments are made in ventures that comply with Shariah guidelines."
      />
      <SectionList
        isBg
        isImgHidden
        text="Our Shariah-compliant project financing solutions include Mudarabah and Diminishing Musharakah. These solutions ensure that financial partnerships are structured in a manner that promotes equitable risk-sharing and ethical investment practices."
      />
      <div className="h-[7vh]" />
      {/* <Title label="Benefits" /> */}
      {/* <Benefits items={benefits} /> */}
    </>
  );
}
