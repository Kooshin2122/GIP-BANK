import NormalHeros from "@/components/heros/normal-heros";
import Benefits from "@/components/section/benefits";
import SectionList from "@/components/section/section-list";
import Title from "@/components/title";
import { BiTransfer } from "react-icons/bi";
import { BsBank2, BsCreditCard, BsQrCode } from "react-icons/bs";
import { PiArrowsInCardinalBold } from "react-icons/pi";
import { AiFillFileText, AiOutlineTransaction } from "react-icons/ai";
import { MdOutlineSendToMobile } from "react-icons/md";
import Link from "next/link";

const requirements = [
  {
    title: "Maintain an active account with GIB",
    checkIcon: true,
  },
  {
    title: "Down payment up to 30%",
    checkIcon: true,
  },
  {
    title: "Satisfied gurantor for less than USD 10,000",
    checkIcon: true,
  },
  {
    title: "For more than USD 10,000 applicant brings Land or property as collateral",
    checkIcon: true,
  },
  {
    title: "Certified bank statements for the last six months",
    checkIcon: true,
  },
];

const features = [
  {
    title: "Free financial planning and expert advice",
  },
  {
    title: "Up to 3 years repayment for personal mortgage and 2 years for plot financing",
  },
  {
    title: "Financing up to 80% of plot/land value",
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

export default function RealEstateFinance() {
  return (
    <>
      <NormalHeros
        img="/GIB_Bank_Pics/real_estate_fnc/real_estate_fnc2.jpg"
        title="Real Estate Finance"
        subtitle="
        Whether you’re constructing, purchasing or renovating a property, we can help develop a solution that works for you. When it comes to real estate financing, you need a bank that knows the property sector and understands the local market.
        "
      />
      <Title label="Features & Benefits of" labelC="Real Estate Finance" />
      <SectionList isBg items={features} isImgHidden />
      <Title label="Requirements" />
      <SectionList isBg isImgHidden items={requirements} />
      <div className="py-5 px-7" >
        <Link href="#" className="underline underline-offset-2 text-gray-700  my-5 text-xl max-1-sm:text-lg sm:w-[70%] ">
          Visit us for a real estate banking solutions to meet your needs.
        </Link>
      </div>
      {/* <Title label="Benefits" /> */}
      {/* <Benefits items={benefits} /> */}
    </>
  );
}
