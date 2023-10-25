"use client";
import React, { Children, ReactNode } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
SwiperCore.use([Autoplay]);

interface SwiperProps {
  children: ReactNode;
  onPageChanged?: () => void;
  className?: string;
  direction?: "vertical" | "horizontal";
}

export function CustomerSwiper({
  children,
  className,
  onPageChanged,
  direction,
}: SwiperProps) {
  const arrayChildren = Children.toArray(children);
  return (
    <div>
      <Swiper
        direction={direction ?? "vertical"}
        className={"h-[500px] " + className}
        loop
        autoplay={{
          delay: 5000,
        }}
        pagination={{
          clickable: true,
          bulletElement: "div",

        }}
        modules={[Pagination]}
        onSlideChange={onPageChanged}
      >
        {Children.map(arrayChildren, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
