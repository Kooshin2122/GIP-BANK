import NormalHeros from "@/components/heros/normal-heros";
import Benefits from "@/components/section/benefits";
import SectionList from "@/components/section/section-list";
import Title from "@/components/title";
import { BiMoneyWithdraw, BiTransfer } from "react-icons/bi";
import { BsBank2 } from "react-icons/bs";
import { AiFillFileText, AiOutlineTransaction } from "react-icons/ai";
import { FaHandshake, FaUserClock } from "react-icons/fa";
import { PiArrowsInCardinalBold } from "react-icons/pi";
import { GiPayMoney } from "react-icons/gi";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { MdOutlineSendToMobile } from "react-icons/md";
import SectionDesc from "@/components/section/sectionDesc";

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

const smeFeatures = [
  {
    title: "Access to SME Business Loans.",
  },
  {
    title: "24/7 payment solutions.",
  },
  {
    title: "Business advisory services.",
  },
  {
    title: "Online and mobile banking solutions.",
  },
];
const smeRequirements = [
  {
    title: "Trading license.",
  },
  {
    title: "Company's Partnership Deed (where applicable).",
  },
  {
    title: "IDs/passport of the Directors/Owners.",
  },
  {
    title: "Photos of account signatories.",
  },
];



export default function BankingForMyBusiness() {
  return (
    <>
      <NormalHeros
        img="/GIB_Bank_Pics/bankForBusiness/businessBank.jpg"
        title="Banking for my business"
        subtitle=""
      />
      <SectionDesc
        isBg
        title="Corporate current account"
        desc="This account will allow you to organize your finances while giving you access to your money from anywhere through online banking and any branch countrywide. That means you can focus on what matters – running your business smoothly."
        features={features}
        requirements={requirements}
      />
      <SectionDesc
        isBg
        title="SME account"
        desc="This account is tailored to the specific needs of small growing enterprises."
        features={smeFeatures}
        requirements={smeRequirements}
      />
    </>
  );
}
