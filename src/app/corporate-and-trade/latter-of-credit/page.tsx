import NormalHeros from "@/components/heros/normal-heros";
import Benefits from "@/components/section/benefits";
import SectionList from "@/components/section/section-list";
import Title from "@/components/title";
import React from "react";
import { AiFillFileText, AiOutlineTransaction } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { BsBank2, BsCreditCard, BsFillHandbagFill } from "react-icons/bs";
import { MdOutlineSendToMobile } from "react-icons/md";

const features = [
  {
    title: "Certificate of registration",
  },
  {
    title: "Proforma Invoice",
  },
  {
    title: "Import Declaration Form (IDF)",
  },
];

export default function LatterCreditPage() {
  return (
    <>
      <NormalHeros
        img="/personal-hero-account.png"
        title="Secured Outward LC"
        subtitle="To keep your trading partners at ease, it might be necessary to guarantee that your payment will arrive on time and for the agreed amount. Our Secured Outward Letter of Credit guarantees precisely that.
        There are various ways to secure your Letter of Credit, including:"
      />
      <Title label="Cash" />
      <SectionList items={features} img="/lpo-finance.png" />
    </>
  );
}
