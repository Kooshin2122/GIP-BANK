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

export default function WorkingCapitalFinance() {
  return (
    <>
      <NormalHeros
        img="/GIB_Bank_Pics/working_capt_fnc/working_cptl_fnc3.jpg"
        title="Working Capital Finance"
        subtitle="GIB offers Working Capital Finance to meet
        your day-to-day financial obligations and fund business growth.
        Cash flow challenges are common for successful businesses.
        At Galaxy International Bank, we offer Shari’ah-compliant financing
        solutions for your short-term and long-term working capital needs,
        supporting your business growth while upholding Islamic principles.
        "
      />
      <Title label="Benefits" labelC="for your business" />
      <SectionList
        isBg
        isImgHidden
        textTitle="Increased liquidity"
        text="With our working capital finance you can improve your cash flow and avoid liquidity problems."
      />
      <SectionList
        isBg
        isImgHidden
        textTitle="Business growth"
        text="Use GIB’s working capital finance to invest in inventory, hire new employees, and expand into new markets."
      />
      <SectionList
        isBg
        isImgHidden
        textTitle="Improved financial performance"
        text="Working capital finance can help businesses improve their financial ratios and profitability."
      />
      <SectionList
        isBg
        isImgHidden
        textTitle="Flexible repayment periods"
        text=""
      />
      <SectionList
        isBg
        isImgHidden
        textTitle="Competitive Profit rates"
        text=""
      />
      <div className="h-[15vh]" />
    </>
  );
}
