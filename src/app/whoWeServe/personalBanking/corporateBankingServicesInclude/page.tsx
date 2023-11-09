import NormalHeros from "@/components/heros/normal-heros";
import Benefits from "@/components/section/benefits";
import SectionList from "@/components/section/section-list";
import Title from "@/components/title";
import { BiTransfer } from "react-icons/bi";
import { BsBank2, BsCreditCard, BsQrCode } from "react-icons/bs";
import { PiArrowsInCardinalBold } from "react-icons/pi";
import { AiFillFileText, AiOutlineTransaction } from "react-icons/ai";
import { MdOutlineSendToMobile } from "react-icons/md";

const features = [
  {
    title: "Access to corporate internet banking.",
  },
  {
    title: "Access to a dedicated Business Banker.",
  },
  {
    title: "Customized cheque book.",
  },
  {
    title: "Reliable international payment solutions.",
  },
  {
    title: "RTGS and other local bulk payment solutions.",
  },
  {
    title: "Business advisory services.",
  },
  {
    title: "Access to Insurance services.",
  },
];
const requirements = [
  {
    title: "Application form duly completed",
  },
  {
    title: "Board of Directors resolution to open accounts",
  },
  {
    title: "Certificate of incorporation/Registration.",
  },
  {
    title: "ID/passport copies of all directors .",
  },
  {
    title: "Photos of account signatories.",
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

export default function CorporateBankingServicesInclude() {
  return (
    <>
      <NormalHeros
        img="/GIB_Bank_Pics/corporate_bank/corporate_bank.jpg"
        title="Corporate Banking Services Include"
        subtitle="
        This account will allow you to organize your finances while giving
        you access to your money from anywhere through online banking and any
        branch countrywide. That means you can focus on what matters
        running your business smoothly.
        "
      />
      <Title label="Features & Benefits of" labelC="Corporate Banking Services Include" />
      <SectionList isBg items={features} isImgHidden />

      <Title label="Requirements" />
      <SectionList isBg isImgHidden items={requirements} />

    </>
  );
}
