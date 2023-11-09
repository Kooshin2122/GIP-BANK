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

const financingSolutions = [
  {
    title: "Home Electronics.",
  },
  {
    title: "Kitchen Appliances.",
  },
  {
    title: "Living Room and Bedroom Furniture.",
  },
];
const benefits = [
  {
    title: "Murabaha agreement.",
  },
  {
    title: "Flexible terms.",
  },
  {
    title: "Competitive pricing.",
  },
  {
    title: "Relationship-based banking.",
  },
];

const benefitshhhhh = [
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

export default function FinancingFurniture() {
  return (
    <>
      <NormalHeros
        img="/GIB_Bank_Pics/furniture_homeApl_fnc/furniture_homeApl_fnc2.jpg"
        title="Financing Furniture and Home Appliance"
        subtitle={`
        Transform Your Home with GIB’s Furniture and Home Appliances Financing.
        We understand that turning a house into a home often involves investing
        in quality furniture and essential appliances.
        `}
      />
      <Title label="Our financing solutions" labelC="include" />
      <SectionList isBg items={financingSolutions} isImgHidden />
      <Title label="Benefits" />
      <SectionList isBg items={benefits} isImgHidden />

      <div className="h-[7vh]" />
    </>
  );
}
