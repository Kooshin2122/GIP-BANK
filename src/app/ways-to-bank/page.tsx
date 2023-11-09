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

const benefits = [
    {
        Icon: FaUserClock,
        isPrimaryBg: true,
        title: "Dedicated support around the clock",
    },
    {
        Icon: PiArrowsInCardinalBold,
        isPrimaryBg: false,
        title: "Access To Financing",
    },
    {
        Icon: BiTransfer,
        isPrimaryBg: true,
        title: "Free Account Transfers To GIB Accounts",
    },

    {
        Icon: BsBank2,
        isPrimaryBg: false,
        title: "RTGS Transfers",
    },
    {
        Icon: AiOutlineTransaction,
        isPrimaryBg: false,
        title: "SWIFT International Transfers",
    },
    {
        Icon: GiPayMoney,
        isPrimaryBg: true,
        title: "Payroll Services",
    },

    {
        Icon: FaHandshake,
        isPrimaryBg: false,
        title:
            "Dedicated Relationship Officer to provide personalised customer service",
    },
    {
        Icon: LiaMoneyCheckAltSolid,
        isPrimaryBg: true,
        title: "Access to insurance",
    },
    {
        Icon: MdOutlineSendToMobile,
        isPrimaryBg: true,
        title: "Access To Mobile and Internet Banking",
    },
];


export default function WaysToBankPage() {
    return (
        <>
            <NormalHeros
                img="/personal-hero-account.png"
                title="Ways to Bank"
            />
            <Title label="Ways to Bank" />
            <div className="flex flex-col p-7 sm:flex-row flex-wrap  gap-5">
                <div className="p-4 w-[100%] sm:w-[45%] shadow-lg">
                    <h1 className="text-base sm:text-xl text-primary font-semibold">
                        Branches
                    </h1>
                    <h1 className="text-xs sm:text-sm text-secondary font-lite">
                        KM4, Afrik Hotel
                    </h1>
                    <p className="text-base sm:text-lg mt-2 font-normal">
                        Weekdays 8.30am - 4pm | Thursday 8.30am – 3.30pm |Fridays & Holidays Closed
                    </p>
                </div>
                <div className="p-4 w-[100%] sm:w-[45%] shadow-lg">
                    <h1 className="text-base sm:text-xl text-primary font-semibold">
                        Online Banking
                    </h1>
                    <h1 className="text-xs sm:text-sm text-secondary font-lite">
                        Services Offered
                    </h1>
                    <p className="text-base sm:text-lg mt-2 font-normal">
                        Deposit money, withdraw money, RTGS for banks to bank transfers, pay school fees, make retailer payments, Schedule payments, order cheque books, send money and SWIFT
                    </p>
                </div>
                <div className="p-4 w-[100%] sm:w-[45%] shadow-lg">
                    <h1 className="text-base sm:text-xl text-primary font-semibold">
                        Mobile banking
                    </h1>
                    <h1 className="text-xs sm:text-sm text-secondary font-lite">
                        Services Offered
                    </h1>
                    <p className="text-base sm:text-lg mt-2 font-normal">
                        Account to account funds transfer, account Details, cheque request, account management,
                        RTGS, bill payments, view statement, send money withdraw cash                    </p>
                </div>
                <div className="p-4 w-[100%] sm:w-[45%] shadow-lg">
                    <h1 className="text-base sm:text-xl text-primary font-semibold">
                        Agency banking
                    </h1>
                    <h1 className="text-xs sm:text-sm text-secondary font-lite">
                        Services Offered
                    </h1>
                    <p className="text-base sm:text-lg mt-2 font-normal">
                        Cash deposits, cash withdrawals, Balance inquiries Mini statements: account transfers
                   </p>
                </div>
            </div>
        </>
    );
}
