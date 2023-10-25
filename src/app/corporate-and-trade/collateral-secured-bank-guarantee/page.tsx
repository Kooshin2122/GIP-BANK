import NormalHeros from "@/components/heros/normal-heros";
import SectionList from "@/components/section/section-list";
import Title from "@/components/title";

const features = [
  {
    title: "Duly filled Bid Application Form",
  },
  {
    title: "Letter of Lien",
  },
  {
    title: "Letter of set off",
  },
  {
    title: "Approval Sheet",
  },
  {
    title: "Letter of Award/Letter containing the contract details",
  },
  {
    title: "Bank Guarantee format (where applicable)",
  },
  {
    title: "Duly filled Facility Application Form",
  },
  {
    title: "Copy of ID or Passport of all Directors/Authorized Signatories",
  },
  {
    title: "Copy of TIN Certificate",
  },
  {
    title: "Six month’s bank statements",
  },
  {
    title: "Call report to be done by Business Bank",
  },
  {
    title: "Certified Copy of the last 2 years’ Audited Account",
  },
  {
    title: "Latest Management Accounts",
  },
  {
    title: "Certified Copy of Memorandum and Articles of Association",
  },
  {
    title: "Business cash flow projections for the period",
  },
  {
    title: "Certificate of Incorporation",
  },
  {
    title:
      "Board Resolution authorizing the Bank Guarantee request (must be sealed)",
  },
  {
    title: "Latest CR 12",
  },
  {
    title: "Annual Returns receipt",
  },
  {
    title: "Copy of Log Book or Title Deed",
  },
  {
    title: "Valuation Report from the approved bank valuers",
  },
  {
    title: "Bank Guarantee Application Form",
  },
  {
    title: "Tender Notice/Tender Details",
  },
  {
    title: "Copy of the Bank Guarantee Format",
  },
];

export default function CollateralPage() {
  return (
    <>
      <NormalHeros
        img="/personal-hero-account.png"
        title="Collateral Secured Bank Guarantee"
        subtitle="Things don’t always go the way we expect in international trade. We would love to act as your Guarantor in case the worst happens, and with our Collateral Secured Bank Guarantee, you can rest easy knowing you’re in good hands."
      />
      <Title
        label="General Requirement Of The"
        labelC="Collateral Secured Bank Guarantee Account"
      />
      <SectionList items={features} img="/lpo-finance.png" />
    </>
  );
}
