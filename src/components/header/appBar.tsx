import Link from "next/link";
import { IconButton, TextButton } from "../button";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

function AppBar() {
  return (
    <div className="bg-secondary max-sm:hidden flex gap-5 text-white pl-4 items-center py-2 max-sm:justify-end max-sm:px-6">
      <IconButton
        type="link"
        href="https://www.facebook.com/GIBbankSo"
        content={<FaFacebookF className="text-xl" />}
      />

      <IconButton
        type="link"
        href="https://twitter.com/Gibbankso"
        content={<FaTwitter className="text-xl" />}
      />
      <IconButton
        type="link"
        href="https://www.instagram.com/galaxyinternationalbank/"
        content={<FaInstagram className="text-xl" />}
      />
      {/* <IconButton type="link" content={<FaWhatsapp className="text-2xl" />} /> */}

      <ul className=" flex-1 flex gap-4 justify-end px-5">
        <AppBarLink label="About GIB" href="/about-us" />
        <Link
          className="bg-primary px-5 h-full flex justify-center gap-4 items-center text-white font-normal"
          href="tel:+252614987777"
        >
          <span className="text-base block">Call us </span>
          <small className="text-md font-medium">+252 614 987 777</small>
        </Link>
        {/* <AppBarLink label="Contact US" className="mr-10" /> */}
        {/* <AppBarLink label="Online Banking" /> */}
        {/* <AppBarLink label="FAQ" /> */}
      </ul>
    </div>
  );
}

export function AppBarSm() {
  return (
    <div className=" text-white  px-4 py-2">
      <ul className="pb-8 text-grey">
        <AppBarLink label="About GIB Bank" />
        <AppBarLink label="Contact US" className="mr-10" />
        <AppBarLink label="Online Banking" />
        <AppBarLink label="FAQ" />
      </ul>
      <div className="flex justify-around">
        <IconButton
          type="link"
          href="https://www.facebook.com/GIBbankSo"
          content={<FaFacebookF className="text-xl text-grey" />}
        />

        <IconButton
          type="link"
          href="https://twitter.com/Gibbankso"
          content={<FaTwitter className="text-xl text-grey" />}
        />
        <IconButton
          type="link"
          href="https://www.instagram.com/galaxyinternationalbank/"
          content={<FaInstagram className="text-xl text-grey" />}
        />
        <IconButton
          type="link"
          content={<FaWhatsapp className="text-xl text-grey" />}
        />
      </div>
    </div>
  );
}

const AppBarLink = ({
  href,
  label,
  className,
}: {
  href?: string;
  label?: string;
  className?: string;
}) => {
  return (
    <li>
      <Link className={`${className} `} href={href ?? "#"}>
        <small className="text-md max-sm:text-sm ">{label}</small>
      </Link>
    </li>
  );
};

export default AppBar;
