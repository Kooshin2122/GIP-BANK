import NormalHeros from "@/components/heros/normal-heros";
import Benefits from "@/components/section/benefits";
import SectionList from "@/components/section/section-list";
import Title from "@/components/title";
import { BiTransfer } from "react-icons/bi";
import { BsBank2, BsCreditCard, BsQrCode } from "react-icons/bs";
import { PiArrowsInCardinalBold } from "react-icons/pi";
import { AiFillFileText, AiOutlineTransaction } from "react-icons/ai";
import { MdOutlineSendToMobile } from "react-icons/md";

const usage = [
  {
    title: "Bulk payments",
  },
  {
    title: "Tax obligations",
  },
  {
    title: "Salary payments",
  },
  {
    title: "Settling supplier invoices",
  }
];

const benefits = [
  {
    title: "Transfers are quick",
  },
  {
    title: "Send money to any local bank",
  },
  {
    title: "It is a safe and secure system for funds transfer",
  },
  {
    title: "RTGS transactions / transfers have no amount cap set by CBS",
  },
  {
    title: "Initiate the remittances from anywhere using our internet banking",
  }
];


export default function RtgsForLocalPayments() {
  return (
    <>
      <NormalHeros
        img="/GIB_Bank_Pics/rtgs/rtgs.jpg"
        title="RTGS (Real-Time Gross Settlement)"
        subtitle="
        Streamline your local financial transactions with the 
        efficiency and precision of RTGS through GIB. Say goodbye
        to delays, risks of carrying cash and embrace the speed and accuracy
        of GIB's RTGS.
        "
      />
      <Title label="Benefits of using" labelC="RTGS" />
      <SectionList isBg items={benefits} isImgHidden />
      <Title label="Use our RTGS for" />
      <SectionList isBg items={usage} isImgHidden />

    </>
  );
}
