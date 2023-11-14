import NormalHeros from "@/components/heros/normal-heros";
import Benefits from "@/components/section/benefits";
import SectionList from "@/components/section/section-list";
import Title from "@/components/title";
import { BiTransfer } from "react-icons/bi";
import { BsBank2, BsCreditCard, BsQrCode } from "react-icons/bs";
import { PiArrowsInCardinalBold } from "react-icons/pi";
import { AiFillFileText, AiOutlineTransaction } from "react-icons/ai";
import { MdOutlineSendToMobile } from "react-icons/md";

const benefits = [
  {
    title: "Competitive fixed profit rate",
  },
  {
    title: "Flexible repayment options",
  },
  {
    title: "Reasonable Turnaround time",
  },
  {
    title: "Transparent process",
  },
  {
    title: "The asset forms part of the security",
  },
  {
    title: "Dedicated relationship manager",
  },
  {
    title: "No penalty on early repayment",
  }
];

const features = [
  {
    title: "Asset Based.",
  },
  {
    title: "Flexible terms.",
  },
  {
    title: "New and Used Asset.",
  },
];


export default function AssetBasedFinancing() {
  return (
    <>
      <NormalHeros
        img="/GIB_Bank_Pics/asset_fnc/asset6.jpg"
        title="Asset Based Financing"
        subtitle="Asset Finance can help you purchase essential 
        equipment to drive your   business forward without 
        tying up your cash.
        Using our asset-based financing solution, grow your business and achieve your financial goals. This financing allows you to borrow money using your assets as collateral. This can include inventory, machinery, equipment, or real estate.
        "
      />
      <Title label="Features" />
      <SectionList isBg items={features} isImgHidden />
      <Title label="Benefits" />
      <SectionList isBg isImgHidden items={benefits} />
      {/* <Title label="Benefits" /> */}
      {/* <Benefits items={benefits} /> */}
    </>
  );
}
