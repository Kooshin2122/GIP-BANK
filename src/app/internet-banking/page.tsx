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


export default function InternetBanking() {
    //
    const securityTips = [
        { title: "Use a strong password and keep it confidential. Your password should be at least 8 characters long and include a mix of upper and lowercase letters, numbers, and special characters. Avoid using personal information in your password, such as your name, birthday, or address." },
        { title: "Enable two-factor authentication (2FA). 2FA adds an extra layer of security to your account by requiring you to enter a code from your phone in addition to your password when logging in." },
        { title: "Keep your software up to date. Software updates often include security patches that can help protect your devices from malware and other threats." },
        { title: "Be careful about what links you click on. Phishing scams are a common way for hackers to steal personal information. Be wary of emails or messages that appear to be from GIB bank but ask for personal information or urge you to click on a link. Banks typically do not request sensitive information via email." },
        { title: "Never use public Wi-Fi to access your online banking account. Public Wi-Fi networks are often unsecured, which makes them easy for hackers to intercept your data. If you must access your online banking account while you're out and about, use a cellular data connection instead. Or use a virtual private network (VPN) for added security when accessing your online banking accounts on public networks." },
        { title: "Be wary of unsolicited requests for personal information. GIB bank will never ask you for your personal information via email or text message. If you receive a request for personal information from someone claiming to be from Galaxy International Bank, do not provide it. Instead, contact your bank directly to verify the request." },
        { title: "Use a secure device. Avoid using public computers or shared devices to access your online banking account. If you must use a public computer, be sure to log out of your account completely when you're finished." },
        { title: "Be careful about what information you share online. Avoid sharing personal information, such as your account number on social media or other public websites." },
        { title: "Monitor your account activity regularly. Review your account statements and transaction history regularly for any suspicious activity. If you notice anything unusual, contact us immediately." }
    ];
    //
    return (
        <>
            <NormalHeros
                img="/personal-hero-account.png"
                title="Online Banking Safety Tips"
                subtitle="Online banking is a convenient way to manage your finances, but it's important to prioritize safety and security. While GIB Bank has implemented several  security measures, you can take some steps on your own to keep your financial and personal details out of the hands of hackers."
            />
            <div className="bg-white">
                <div className="bg-white sm:w-[80%] py-5 sm:px-10 gapy-5">
                    <Title label="Here are some online banking safety tips you need to know" />
                    <SectionList
                        isImgHidden
                        paddingY={false}
                        items={securityTips}
                    />
                    <div className="h-[10vh]" />
                </div>
            </div>
        </>
    );
}

