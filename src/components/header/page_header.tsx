"use client";
import AppBar from "./appBar";
import { NavBarHz, NavBarVertical } from "./navbar";
import Link from "next/link";
import { IconButton } from "../button";
import { BiMenuAltRight } from "react-icons/bi";
import NavBarContextProvider, { useNavBar } from "@/hooks/use-navbar";
import Image from "next/image";

export default function PageHeader() {
  return (
    <NavBarContextProvider>
      <header className="flex border-b bg-white sticky  top-0 z-20">
        <div className=" px-5 py-2  relative">
          <Link href={'/'}>
            <img
              src="/gibbank-logo.png"
              className="w-[200px] max-1-sm:w-[160px] h-full"
            />
          </Link>
        </div>
        <div className="flex-1 min-h-full  flex flex-col">
          <AppBar />
          <div className="flex max-1-md:hidden h-full">
            <NavBarHz />
          </div>
          <MenuBar />
        </div>
        <NavBarVertical />
      </header>
    </NavBarContextProvider>
  );
}

const MenuBar = () => {
  const { onCloseOrOpen } = useNavBar();
  return (
    <div className="max-1-md:visible max-1-md:flex hidden h-full   justify-end items-center ">
      <IconButton
        type="button"
        onClick={onCloseOrOpen}
        className="w-28 max-sm:w-fit max-sm:px-5 h-full flex justify-center items-center bg-primary max-sm:bg-transparent "
        content={
          <BiMenuAltRight className="text-4xl text-white max-sm:text-secondary" />
        }
      />
    </div>
  );
};
