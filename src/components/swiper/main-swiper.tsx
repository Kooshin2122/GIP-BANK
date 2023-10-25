import Image from "next/image";
import React from "react";
import { TextButton } from "../button";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function MainSwiper({
  img = "/main-banner.png",
  title = "Serving to empower you",
  showContent = false,
  showLinierGradient = true
}: {
  img?: string;
  title?: string;
}) {
  return (
    <div className="relative w-full h-full">
      <Image priority src={img} alt="Picture of the author" fill />
      {
        showContent &&
        <div className={`absolute w-full h-full ${showLinierGradient && "linear-gradient-bg"} max-1-md:px-4`}>
          <div className="container mx-auto h-full flex items-start flex-col justify-center">
            <h1 className="text-white font-bold text-5xl leading-normal max-1-md:text-5xl max-1-md:leading-relaxed max-1-sm:text-4xl max-1-sm:leading-relaxed">
              Experience banking
            <br /> with a difference
          </h1>
            <p className="text-gray-400 my-5 text-2xl">{title}</p>

            {/* <TextButton
              icon={<MdKeyboardArrowRight className="text-white text-2xl" />}
            >
              Learn More
          </TextButton> */}
          </div>
        </div>
      }
    </div>
  );
}
