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
    title: "Shariah compliant deal.",
  },
  {
    title: "Fulfilling your dream of owning a house.",
  },
  {
    title: "Dedicated Relationship Manager.",
  },
  {
    title: "Reasonable Pricing.",
  },
];

const features = [
  {
    title: "It is Based on Diminishing Musharakah.",
  },
  {
    title: "The same House will be Taken as Security or Part of Security.",
  },
  {
    title: "Flexible Tenure.",
  },
  {
    title: "Client’s Contribution, Minimum 20%.",
  },
  {
    title: "Property Insurance.",
  },
];

export default function HomeFinance() {
  return (
    <>
      <NormalHeros
        img="/GIB_Bank_Pics/home_fnc/HomeFin.jpeg"
        title="Home Finance"
        subtitle="
        Galaxy International Bank’s Home Finance program enables you 
        to realize the opportunity to own your dream home through 
        a Shari’ah-compliant finance solutions. GIB will offer you
        with competitive rates to help you meet your expectations 
        for a stable and secure future for you and your family.
        "
      />
      <Title label="Home" labelC="Finance" />
      <SectionList
        isBg isImgHidden
        text="
        Our home financing product is structured under the Sharia compliant
        mode of Islamic Banking, Diminishing Musharakah. Through this structure
        the customer owns the house gradually until he/she eventually becomes
        the sole owner of such house."
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
