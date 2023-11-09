import NormalHeros from "@/components/heros/normal-heros";
import Benefits from "@/components/section/benefits";
import SectionList from "@/components/section/section-list";
import Title from "@/components/title";
import { BiTransfer } from "react-icons/bi";
import { BsBank2, BsCreditCard, BsQrCode } from "react-icons/bs";
import { PiArrowsInCardinalBold } from "react-icons/pi";
import { AiFillFileText, AiOutlineTransaction } from "react-icons/ai";
import { MdOutlineSendToMobile } from "react-icons/md";



const solutions = [
  {
    title: "Microlending",
  },
  {
    title: "Mobile banking",
  },
  {
    title: "Business advisory",
  },
  {
    title: "Skills training",
  },
  {
    title: "Savings Accounts",
  },
  {
    title: "Mobile payment solutions",
  },
];



export default function Microfinance() {
  return (
    <>
      <NormalHeros
        img="/GIB_Bank_Pics/micro_fnc/micro_fnc3.jpg"
        title="Microfinance"
        subtitle="
        We believe that every small step can lead to significant achievements.
        That's why we take pride in introducing our Microfinance banking 
        solution a robust financial tool designed to empower individuals 
        and small businesses. With GIB by your side, you can embark on the 
        journey to start or expand your enterprises, enhance your living 
        standards, and forge a brighter future for yourself and your families.
        "
      />
      <Title label="Our specialized solutions" labelC="for microfinance customers include" />
      <SectionList isBg items={solutions} isImgHidden />
    </>
  );
}
