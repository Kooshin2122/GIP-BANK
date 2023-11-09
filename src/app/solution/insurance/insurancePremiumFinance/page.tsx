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

export default function InsurancePremiumFinance() {
  return (
    <>
      <NormalHeros
        img="/GIB_Bank_Pics/premium_ins/premium_ins.jpg"
        title="Insurance Premium Finance"
        subtitle="
        Unlock financial flexibility with Galaxy International Bank 
        insurance premium finance at Galaxy International Bank,
        we understand that managing your business's finances is a balancing act.
        One aspect of financial management that can present challenges is paying
        annual or semi-annual insurance premiums in one lump sum. That's why we
        offer our corporate clients a seamless solution: Insurance Premium
        Finance.
        "
      />
      <Title label="Why Choose GIB’s" labelC="Insurance Premium Finance?" />
      <SectionList
        isBg isImgHidden
        textTitle="Cash Flow Management"
        text="Our premium finance services allow you to spread the cost of your insurance premiums over manageable installments, easing the strain on your working capital and preserving cash flow for other essential business needs."
      />
      <SectionList
        isBg isImgHidden
        textTitle="No Need for Upfront Payments"
        text="Say goodbye to the burden of large upfront premium payments. With our premium finance option, you can keep your cash working for you while maintaining the insurance coverage your business requires."
      />
      <SectionList
        isBg isImgHidden
        textTitle="Customized Solutions"
        text="We tailor our premium finance packages to fit your specific insurance needs. Whether you require coverage for property or other commercial policies, we've got you covered."
      />
      <SectionList
        isBg isImgHidden
        textTitle="Transparent"
        text="The plans are transparent to the company insured and Shariah Compliant."
      />
      <div className="h-[10vh]" />
    </>
  );
}
