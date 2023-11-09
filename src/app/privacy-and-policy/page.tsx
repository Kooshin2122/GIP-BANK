// privacy-and-policy
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

export default function PrivacyPolicy() {
    return (
        <>
            <div className="bg-grey-500 py-5">
                <div className="bg-white sm:w-[70%] py-5 sm:px-10 gapy-5 m-auto">
                    <Title label="Privacy Policy" labelC="Galaxy International Bank" />
                    <SectionList
                        isImgHidden
                        paddingY={false}
                        textTitle="Privacy Policy"
                        text="Kindly read these Terms and Conditions carefully. The following Terms and Conditions govern your access and use of this website. These Terms and Conditions also govern the content and services offered to you through the website. By accessing, using, printing, installing, or downloading any material from this site, you agree to be bound by these Terms and Conditions."
                    />
                    <SectionList
                        isImgHidden
                        paddingY={false}
                        textTitle="Acceptance"
                        text="By accessing this site, you enter a binding agreement with Galaxy International Bank, governed by the most recent version of these conditions."
                    />
                    <SectionList
                        isImgHidden
                        paddingY={false}
                        textTitle="Online Services"
                        text="Our online services are subject to approval, guided by specific service terms available on relevant site sections. In case of conflict, the service terms supersede these conditions."
                    />
                    <SectionList
                        isImgHidden
                        paddingY={false}
                        textTitle="Nature of Information on the Site"
                        text="Information provided is for general understanding only and not as a direct offer. Projections are estimates and shouldn't be considered professional advice without consulting your own advisors."
                    />
                    <SectionList
                        isImgHidden
                        paddingY={false}
                        textTitle="Amendments to These Conditions"
                        text="We reserve the right to update these conditions, with the latest version binding each time you access the site."
                    />
                    <SectionList
                        isImgHidden
                        paddingY={false}
                        textTitle="Information Feeds"
                        text="We may use third-party services for information on the site, disclaiming any liability for its accuracy. Live feeds are delayed by 15 minutes; refresh to view the most current information."
                    />
                    <SectionList
                        isImgHidden
                        paddingY={false}
                        textTitle="Permission for Hyperlinks"
                        text="Establishing links to this site requires our prior written approval, with breach leading to legal action and associated costs."
                    />
                    <SectionList
                        isImgHidden
                        paddingY={false}
                        textTitle="Linked Third-Party Sites"
                        text="We do not endorse third-party websites linked on this site and disclaim responsibility for their content or practices."
                    />
                    <SectionList
                        isImgHidden
                        paddingY={false}
                        textTitle="Our Intellectual Property"
                        text="All materials on this site are copyrighted, and using them for commercial purposes requires written permission. Our trademarks require explicit consent for any use."
                    />
                    <SectionList
                        isImgHidden
                        paddingY={false}
                        textTitle="Software"
                        text="Use updated browsers for security. We are not liable for any damages resulting from the use of downloadable software."
                    />
                    <SectionList
                        isImgHidden
                        paddingY={false}
                        textTitle="General Provisions"
                        text="Headings are for reference only, and invalid provisions will be deleted, while the remaining conditions remain valid."
                    />
                    <SectionList
                        isImgHidden
                        paddingY={false}
                        textTitle="Transmission of Information"
                        text="Transmission via an unsecured link over the Internet is at risk of unlawful access; we are not liable for any resulting loss or damage."
                    />
                    <SectionList
                        isImgHidden
                        paddingY={false}
                        textTitle="Termination, Suspension, and Limitation"
                        text="We reserve the right to modify or discontinue the site or its services, with possible restrictions on access."
                    />
                    <SectionList
                        isImgHidden
                        paddingY={false}
                        textTitle="Disputes Resolution"
                        text="Disputes will be submitted to and decided by arbitration, conducted at our offices in Mogadishu, Somalia."
                    />
                    <SectionList
                        isImgHidden
                        paddingY={false}
                        textTitle="Capacity to Enter into Agreements"
                        text="You confirm your legal capacity to be bound by these conditions. Minors must have legal guardians' assistance."
                    />
                    <SectionList
                        isImgHidden
                        paddingY={false}
                        textTitle="Disclaimer and Limitation of Liability"
                        text="We provide the site and services 'as is' and are not liable for any direct or indirect damages or losses incurred."
                    />
                    <SectionList
                        isImgHidden
                        paddingY={false}
                        textTitle="Governing Law"
                        text="The conditions are governed by the laws of the Federal Republic of Somalia."
                    />
                    <div className="h-[10vh]" />
                </div>
            </div>
        </>
    );
}

