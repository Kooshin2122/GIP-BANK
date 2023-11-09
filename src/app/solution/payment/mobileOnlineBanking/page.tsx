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
    title: "Manage your accounts.",
  },
  {
    title: "Check balances.",
  },
  {
    title: "Deposit money.",
  },
  {
    title: "Withdraw Cash.",
  },
  {
    title: "Schedule payments.",
  },
  {
    title: "Order cheque books.",
  },
  {
    title: "Send Money.",
  },
  {
    title: "Review transaction history.",
  },
  {
    title: "Make payments such as bill payments, salaries and supplier payment.",
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

export default function MobileOnlineBanking() {
  return (
    <>
      <NormalHeros
        img="/GIB_Bank_Pics/mobile_online/mobile_online1.jpg"
        title="Mobile And Online Banking"
        subtitle="
        Experience banking convenience at your fingertips with GIB's 
        Mobile and Online Banking services. These services allows you to
        do various transactions and fulfil your banking needs using
        different devices such as mobile phone, tablet or a laptop.
        It gives you the convenience of banking whenever and wherever you are.
        Besides being secure and private, it is extremely convenient and easy
        to use. 
        "
      />
      <Title label="Features of" labelC="Mobile And Online Banking" />
      <SectionList isBg items={features} isImgHidden />
      <SectionList
        isBg isImgHidden
        text="Our user-friendly platforms provide you with 24/7 access to your finances."
      />
      <SectionList
        isBg isImgHidden
        text="Visit our branches or register online."
      />
      {/* <Title label="Benefits" /> */}
      {/* <Benefits items={benefits} /> */}
    </>
  );
}
