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

export default function PersonalCurrentAccount() {
  return (
    <>
      <NormalHeros
        img="/personalAcnt.jpg"
        
        title="Personal Current Account"
        subtitle="The free bank account that makes life easy. Spend, save and manage your money, all in 
        one place"
      />
      <Title label="Features & Benefits of" labelC="personal current account" />
      <SectionList isBg items={features} isImgHidden />
      <Title label="Requirements" />
      <SectionList isBg isImgHidden items={requirements} />
      {/* <Title label="Benefits" /> */}
      {/* <Benefits items={benefits} /> */}
    </>
  );
}
