import NormalHeros from "@/components/heros/normal-heros";
import Benefits from "@/components/section/benefits";
import SectionList from "@/components/section/section-list";
import Title from "@/components/title";
import { BiTransfer } from "react-icons/bi";
import { BsBank2, BsCreditCard, BsQrCode } from "react-icons/bs";
import { PiArrowsInCardinalBold } from "react-icons/pi";
import { AiFillFileText, AiOutlineTransaction } from "react-icons/ai";
import { MdOutlineSendToMobile } from "react-icons/md";

const TypesOfInsurance = [
  {
    title: "Medical Insurance.",
  },
  {
    title: "Car Insurance.",
  },
  {
    title: "Fire Insurance.",
  },
  {
    title: "Money Insurance.",
  },
  {
    title: "All Risk Insurance.",
  },
];

const InsurancePremiumFinance = [
  {
    title: "Medical Insurance.",
  },
  {
    title: "Car Insurance.",
  },
  {
    title: "Fire Insurance.",
  },
  {
    title: "Money Insurance.",
  },
  {
    title: "All Risk Insurance.",
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

export default function InsuranceForMyBusiness() {
  return (
    <>
      <NormalHeros
        img="/GIB_Bank_Pics/bussness_ins/bussness_ins.jpg"
        title="Insurance For My Business"
        subtitle="
        As your trusted banking partner, we are committed to providing
        you with the financial solutions you need to protect your 
        company's property, people and assets. That's why we're proud
        to introduce our comprehensive insurance services, provided
        in partnership with our trusted sister company, 
        Takaful Insurance.
        "
      />
      <Title label="Types of Insurance " labelC="we provide" />
      <SectionList isBg items={TypesOfInsurance} isImgHidden />
      <div className="h-[10vh]" />
    </>
  );
}
