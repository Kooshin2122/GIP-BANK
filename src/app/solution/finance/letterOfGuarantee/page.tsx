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
    title: "Duly filled Bid Application Form",
    checkIcon: true,
  },
  {
    title: "Letter of Lien",
    checkIcon: true,
  },
  {
    title: "Letter of set off",
    checkIcon: true,
  },
  {
    title: "Approval Sheet",
    checkIcon: true,
  },
  {
    title: "Letter of Award/Letter containing the contract details",
    checkIcon: true,
  },
  {
    title: "Bank Guarantee format (where applicable)",
    checkIcon: true,
  },
  {
    title: "Duly filled Facility Application Form",
    checkIcon: true,
  },
  {
    title: "Copy of ID or Passport of all Directors/Authorized Signatories",
    checkIcon: true,
  },
  {
    title: "Copy of TIN Certificate",
    checkIcon: true,
  },
  {
    title: "Six months’ bank statements",
    checkIcon: true,
  },
  {
    title: "Call report to be done by Business Bank",
    checkIcon: true,
  },
  {
    title: "Certified Copy of the last 2 years’ Audited Account",
    checkIcon: true,
  },
  {
    title: "Latest Management Accounts",
    checkIcon: true,
  },
  {
    title: "Certified Copy of Memorandum and Articles of Association",
    checkIcon: true,
  },
  {
    title: "Business cashflow projections for the period",
    checkIcon: true,
  },
  {
    title: "Certificate of Incorporation",
    checkIcon: true,
  },
  {
    title: "Board Resolution authorizing the Bank Guarantee request (must be sealed)",
    checkIcon: true,
  },
  {
    title: "Latest CR 12",
    checkIcon: true,
  },
  {
    title: "Annual Returns receipt",
    checkIcon: true,
  },
  {
    title: "Copy of Log Book or Title Deed",
    checkIcon: true,
  },
  {
    title: "Valuation Report from the approved bank valuers",
    checkIcon: true,
  },
  {
    title: "Bank Guarantee Application Form",
    checkIcon: true,
  },
  {
    title: "Tender Notice/Tender Details",
    checkIcon: true,
  },
  {
    title: "Copy of the Bank Guarantee Format",
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

export default function LetterOfGuarantee() {
  return (
    <>
      <NormalHeros
        img="/GIB_Bank_Pics/letter_garuntee/LetterofGuarantee.jpg"
        title="Letter Of Guarantee"
        subtitle="
        At Galaxy International Bank, we understand that in business,
        trust and reliability are paramount. Whether you're engaging 
        in international trade, securing contracts, or participating 
        in government tenders, our Letter of Guarantee services are designed
        to provide you with the confidence and credibility you need to succeed.
        "
      />
      {/* <Title label="Features & Benefits of" labelC="Letter Of Guarantee" />
      <SectionList isBg items={features} isImgHidden /> */}
      <Title label="Our Letter of Guarantee" labelC="Solutions Includes" />
      <SectionList
        isBg isImgHidden
        textTitle="Performance Guarantees"
        text="Assure your clients that you'll fulfill your contractual obligations effectively"
      />
      <SectionList
        isBg isImgHidden
        textTitle="Bid Bonds"
        text="Secure government contracts and projects by demonstrating your financial commitment to bid."
      />
      <SectionList
        isBg isImgHidden
        textTitle="Custom Guarantees"
        text="We design specialized guarantees to meet your unique business needs and regulatory requirements"
      />
      <div className="h-[10vh]" />
      {/* <Title label="Benefits" /> */}
      {/* <Benefits items={benefits} /> */}
    </>
  );
}
