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

const benefits = [
  {
    title: "Pay your suppliers anywhere in the world.",
  },
  {
    title: "Receive incoming funds from partners and donors.",
  },
  {
    title: "Pocket friendly cost.",
  },
  {
    title: "Invest in foreign markets.",
  },
  {
    title: "Purchase property abroad.",
  },
];



export default function Switf() {
  return (
    <>
      <NormalHeros
        img="/GIB_Bank_Pics/SWIFT/swift4.jpg"
        title="SWIFT"
        subtitle="
        Experience global connectivity and secure international 
        transactions with SWIFT through GIB. Whether you're involved 
        in international trade, managing offshore investments, or conducting 
        cross-border business, our SWIFT services enable you to send and 
        receive funds swiftly and securely worldwide. With GIB, the world is
        your financial playground.
        "
      />
      <Title label="Benefits" />
      <SectionList isBg items={benefits} isImgHidden />
      <SectionList
        isBg isImgHidden
        textTitle="Note"
        text="As per regulator requirement, transactions at or above 
        the equivalent of US$ 10,000 require support documentation.
        "
      />
      <SectionList
        isBg isImgHidden
        textTitle="Help"
        text="If you have any questions about SWIFT transfers, please do not 
        hesitate to contact us on (+252-614-987-777) or visit our branches.
        "
      />
    </>
  );
}
