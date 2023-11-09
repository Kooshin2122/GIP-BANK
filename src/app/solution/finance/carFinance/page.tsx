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
    title: "Maintain an active account with GIB",
    checkIcon: true,
  },
  {
    title: "Down payment up to 20%",
    checkIcon: true,
  },
  {
    title: "Access purchase invoice and proof of any payment made to a chequebook",
    checkIcon: true,
  },
  {
    title: "for more than USD 10, 000 applicant brings Land or property as collateral",
    checkIcon: true,
  },
  {
    title: "Satisfied guarantor for less than USD 10,000",
    checkIcon: true,
  },
];

const features = [
  {
    title: "Free financial planning and expert advice",
  },
  {
    title: "Finance both new and used cars",
  },
  {
    title: "Financing starts from USD 3000",
  },
  {
    title: "Up to 36 months of repayment period for new cars and 24 months of repayment period for used cars",
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

export default function CarFinance() {
  return (
    <>
      <NormalHeros
        img="/GIB_Bank_Pics/car_fnc/car_fnc3.jpg"
        title="Car Finance"
        subtitle="
        At GIB, we believe that owning your dream car should be an exciting and
        hassle-free experience. We will ensure that you will get the right financing solution at the best rate along with the best car Takaful to protect your car.
        "
      />
      <Title label="Features & Benefits of" labelC="Car Finance" />
      <SectionList isBg items={features} isImgHidden />
      <Title label="Requirements" />
      <SectionList isBg isImgHidden items={requirements} />
      {/* <Title label="Benefits" /> */}
      {/* <Benefits items={benefits} /> */}
    </>
  );
}
