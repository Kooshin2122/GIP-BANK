"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { AppBarSm } from "./appBar";
import { useNavBar } from "@/hooks/use-navbar";
import Image from "next/image";
import { TextButton } from "../button";

export function NavBarHz() {
  return (
    <nav className="max-md:flex-1 md:w-full flex items-center justify-between px-14">
      <ul className="flex gap-14 items-center  max-md:gap-8">
        {/* <NavLinkLg label="Home" href="/" /> */}
        <NavLinkLg
          label="Solution"
          links={
            [
              {
                title: "Financing",
                subLinks: [
                  {
                    href: "/solution/finance/workingCapitalFinance",
                    label: "Working Capital Finance",
                  },
                  {
                    href: "/solution/finance/assetBasedFinancing",
                    label: "Asset Based Financing",
                  },
                  {
                    href: "/solution/finance/projectFinancing",
                    label: "Project Financing"
                  },
                  {
                    href: "/solution/finance/realEstateFinance",
                    label: "Real Estate Finance",
                  },
                  {
                    href: "/solution/finance/carFinance",
                    label: "Car Finance",
                  },
                  {
                    href: "/solution/finance/financingFurniture",
                    label: "Financing furniture and home appliance",
                  },
                  {
                    href: "/solution/finance/homeFinance",
                    label: "Home Finance",
                  },
                  {
                    href: "/solution/finance/letterOfGuarantee",
                    label: "Letter of Guarantee",
                  },
                ]
              },
              {
                title: "Payments",
                subLinks: [
                  {
                    href: "/solution/payment/swift",
                    label: "SWIFT",
                  },
                  {
                    href: "/solution/payment/mobileOnlineBanking",
                    label: "Mobile and Online Banking",
                  },
                  {
                    href: "/solution/payment/rtgsForLocalPayments",
                    label: "RTGS for Local Payments",
                  },
                ]
              },
              {
                title: "Insurance",
                subLinks: [
                  {
                    href: "/solution/insurance/insuranceForMyBusiness",
                    label: "Insurance For My Business",
                  },
                  {
                    href: "/solution/insurance/insurancePremiumFinance",
                    label: "Insurance Premium Finance",
                  },
                ]
              }
            ]
          }
        />
        <NavLinkLg
          label="Who We Serve"
          links={
            [
              {
                title: "Personal Banking",
                subLinks: [
                  {
                    href: "/whoWeServe/personalBanking/personalBankingServicesInclude",
                    label: "Personal banking services include",
                  },
                  {
                    href: "/whoWeServe/personalBanking/corporateBankingServicesInclude",
                    label: "Corporate banking services include",
                  },
                  {
                    href: "/whoWeServe/personalBanking/microfinance",
                    label: "Microfinance",
                  }
                ]
              },
            ]
          }
        />
      </ul>
      <ul className=" flex-1 flex gap-4 justify-end px-3">
        <TextButton className="py-[5px] text-[14px] rounded-md">
          Online Banking
        </TextButton>
      </ul>
    </nav>
  );
}

export const NavBarVertical = () => {
  //
  const { isVisible, onCloseOrOpen } = useNavBar();
  if (!isVisible) return <></>;
  //
  return (
    <div className="fixed  w-full h-full max-md:flex justify-end  z-50 hidden max-1-md:visible">
      <div onClick={onCloseOrOpen} className="bg-black/50 flex-1" />
      <nav className="animate-navbar z-50 bg-white h-full w-3/5 border-l-4 border-primary flex  flex-col">
        <div className="border-b px-5 py-2 ">
          <img
            src="/gibbank-logo.png"
            className="w-[250px] max-1-sm:w-[170px] h-full"
          />
        </div>
        <ul className="divide-y-[0.5px] flex-1">
          <MobileNavLink
            label="Solution"
            links={
              [
                {
                  title: "Financing",
                  subLinks: [
                    {
                      href: "/personal/personal-current-account",
                      label: "Personal Current Account",
                    },
                    {
                      href: "/personal/saving-account",
                      label: "Saving Account",
                    },
                    { href: "/personal/govt-and-institution", label: "Gov`t And Institution" },
                    {
                      href: "/personal/ngos-page",
                      label: "Banking For NGO`s",
                    },
                    {
                      href: "/personal/education-and-institutions",
                      label: "Banking For Educational Institutions",
                    },
                  ]
                },
                {
                  title: "Payments",
                  subLinks: [
                    {
                      href: "/personal/personal-current-account",
                      label: "Personal Current Account",
                    },
                    {
                      href: "/personal/saving-account",
                      label: "Saving Account",
                    },
                    { href: "/personal/govt-and-institution", label: "Gov`t And Institution" },
                    {
                      href: "/personal/ngos-page",
                      label: "Banking For NGO`s",
                    },
                    {
                      href: "/personal/education-and-institutions",
                      label: "Banking For Educational Institutions",
                    },
                  ]
                },
                {
                  title: "Insurance",
                  subLinks: [
                    {
                      href: "/personal/personal-current-account",
                      label: "Personal Current Account",
                    },
                    {
                      href: "/personal/saving-account",
                      label: "Saving Account",
                    },
                  ]
                }
              ]
            }
          />
          <MobileNavLink
            label="Who We Serve"
            links={
              [
                {
                  title: "Personal Banking",
                  subLinks: [
                    {
                      href: "/personal/personal-current-account",
                      label: "Personal Current Account",
                    },
                    {
                      href: "/personal/saving-account",
                      label: "Saving Account",
                    },
                    { href: "/personal/govt-and-institution", label: "Gov`t And Institution" },
                    {
                      href: "/personal/ngos-page",
                      label: "Banking For NGO`s",
                    },
                    {
                      href: "/personal/education-and-institutions",
                      label: "Banking For Educational Institutions",
                    },
                  ]
                },
              ]
            }
          />
        </ul>

        <AppBarSm />
        <Link
          className="bg-primary px-5  py-3 flex flex-col justify-center items-center text-white font-normal"
          href="tel:+252614987777"
        >
          <span className="text-sm block">Call Us</span>
          <small className="text-sm">+252614987777</small>
        </Link>
      </nav>
    </div>
  );
};

const NavLinkLg = ({
  label,
  href,
  links = [],
  subLinks = [],
}: {
  href?: string;
  label?: string;
  subLinks?: { href: string; label: string }[];
}) => {
  const pathname = usePathname();
  const [toggleDropDown, setToggleDropDown] = useState<boolean>(false);

  const className = useMemo(() => {
    if (href == pathname) return "text-primary font-semibold";
    return "text-secondary font-normal";
  }, [pathname]);

  const isSubLinks = useMemo(() => links?.length != 0, [links]);

  const onToggle = () => {
    if (!isSubLinks) return;
    setToggleDropDown(!toggleDropDown);
  };

  return (
    <li
      className="max-sm:px-4 max-sm:py-2 "
      onMouseEnter={onToggle}
      onMouseLeave={onToggle}
      onClick={onToggle}
    >
      <Link
        href={href ?? "#"}
        className={
          "text-md max-sm:text-base flex items-center gap-2 max-sm:justify-between " +
          className
        }
      >
        {label ?? "Label"} {isSubLinks && <MdKeyboardArrowDown />}
      </Link>

      {isSubLinks && toggleDropDown && (
        <ul
          className={
            "max-sm:relative max-sm:divide-y-[0.3px] max-sm:shadow-none absolute  bg-white shadow-sm py-3 flex flex-row  gap-1 rounded-md animate-wiggle"
          }
        >
          {links.map((link) => (
            <li
              key={link.title.replace(" ", "")}
              className="text-primary text-grey px-4 py-2 text-md max-sm:text-base"
            >
              <p className="text-lg font-semibold px-4">
                {link.title}
              </p>
              {link.subLinks.map((subLink) => (
                <li
                  key={subLink.label.replace(" ", "")}
                  className="hover:bg-primarytp hover:text-primary text-grey px-4 py-2 text-base max-sm:text-base"
                >
                  <Link href={subLink.href}>{subLink.label}</Link>
                </li>
              ))}
            </li>
          ))}
          {/* {subLinks.map((link) => (
            <li
              key={link.label.replace(" ", "")}
              className="hover:bg-primarytp hover:text-primary text-grey px-4 py-2 text-lg max-sm:text-base"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))} */}
        </ul>
      )}
    </li>
  );
};

const MobileNavLink = ({
  label,
  href,
  links = [],
  subLinks = [],
}: {
  href?: string;
  label?: string;
  subLinks?: { href: string; label: string }[];
}) => {
  const pathname = usePathname();
  const [toggleDropDown, setToggleDropDown] = useState<boolean>(false);
  const [subToggleDropDown, setSubToggleDropDown] = useState<boolean>(false);
  //
  const className = useMemo(() => {
    if (href == pathname) return "text-primary font-semibold";
    return "text-secondary font-normal";
  }, [pathname]);

  const isSubLinks = useMemo(() => links?.length != 0, [links]);
  // const isLinks = useMemo(() => links?.length != 0, [links]);


  const onToggle = () => {
    if (!isSubLinks) return;
    setToggleDropDown(!toggleDropDown);
  };
  const onSubToggle = () => {
    if (!isSubLinks) return;
    setSubToggleDropDown(prev => !prev);
  };
  return (
    <li
      className="max-sm:px-4  max-sm:py-2 "
    >
      <Link
        onClick={onToggle}
        href={href ?? "#"}
        className={
          "text-sm font-semibold flex items-center justify-between " +
          className
        }
      >
        {label ?? "Label"} {toggleDropDown ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
      </Link>

      {isSubLinks && toggleDropDown && (
        <ul
          className={
            "max-sm:relative max-sm:divide-y-[0.3px] max-sm:shadow-none absolute  bg-white shadow-sm py-1 flex flex-col gap-1 rounded-md animate-wiggle"
          }
        >
          {links.map((link) => (
            <li
              key={link.title.replace(" ", "")}
              className="text-primary bg-primarytp rounded-md  w-full text-grey text-3xl"
            >
              <Link
                onClick={onSubToggle}
                href={href ?? "#"}
                className={
                  "text-sm font-semibold p-2  text-orange-500 flex items-center gap-2 max-sm:justify-between " +
                  className
                }
              >
                {link.title} {subToggleDropDown ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
              </Link>

              {isSubLinks && subToggleDropDown && (
                <ul
                  className={
                    "max-sm:relative max-sm:divide-y-[0.3px] max-sm:shadow-none absolute  bg-white shadow-sm py-1 flex flex-col gap-1 rounded-md animate-wiggle"
                  }
                >
                  {link.subLinks.map((subLink) => (
                    <li
                      key={subLink.label.replace(" ", "")}
                      className="px-1 text-secondary py-1 text-xs"
                    >
                      <Link
                        href={subLink.href}
                      >
                        {subLink.label}
                      </Link>
                    </li>
                  ))}
                </ul>)}
            </li>
          ))}
          {/* {subLinks.map((link) => (
            <li
              key={link.label.replace(" ", "")}
              className="hover:bg-primarytp hover:text-primary text-grey px-4 py-2 text-lg max-sm:text-base"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))} */}
        </ul>
      )}
    </li>
  );
};






















{/* <NavLinkLg
          label="Business"
          subLinks={[
            {
              href: "/business/corporate-current-account",
              label: "Corporate Current Account",
            },
            {
              href: "/business/sme-account",
              label: "SME Account",
            },

          ]}
        />
        <NavLinkLg
          label="Financing"
          subLinks={[
            { href: "/financing/trade-financing", label: "Trade Financing" },
            { href: "/financing/land-financing", label: "Land Financing" },
            {
              href: "/financing/construction-and-mortgage-financing",
              label: "Construction and mortgage Financing",
            },
            { href: "/financing/auto-financing", label: "Auto Financing" },
            {
              href: "/financing/microfinance-account",
              label: "Microfinance Account",
            },
          ]}
        />
        <NavLinkLg
          label="Corporate & trade"
          subLinks={[
            {
              href: "/corporate-and-trade/lpo-financing",
              label: "LPO Financing",
            },
            {
              href: "/corporate-and-trade/latter-of-credit",
              label: "Latter Of Credit",
            },
            {
              href: "/corporate-and-trade/collateral-secured-bank-guarantee",
              label: "Collateral Secured Bank Guarantee",
            },
          ]}
        /> */}