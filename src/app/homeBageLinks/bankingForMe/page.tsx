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

const savingRequirements = [
  {
    title: "ID/passport",
    checkIcon: true,
  },
  {
    title: "Passport photo (taken at the branch)",
    checkIcon: true,
  },
];

const savingFeatures = [
  {
    title: "Free standing orders.",
  },
  {
    title: "No minimum amount to save",
    // subtitles: ["90 days.", "180 days.", "365 days."],
  },
  {
    title: "Preferential financing rates for your future investments",
  },
];



export default function BankingForMePage() {
  return (
    <>
      <NormalHeros
        img="/GIB_Bank_Pics/bankingMe/bankingforme.jpg"
        title="Banking for me"
        subtitle=""
      />
      <SectionDesc
        isBg
        title="Personal current account"
        desc="The free bank account that makes life easy. Spend, save and manage your money, all in one place."
        features={features}
        requirements={requirements}
      />
      <SectionDesc
        isBg
        title="Saving account"
        desc="Save for the things that matter. Available for individuals and groups."
        features={savingFeatures}
        requirements={savingFeatures}
      />
    </>
  );
}
