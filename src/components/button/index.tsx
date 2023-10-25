"use client";
import Link from "next/link";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";

type ButtonType = "link" | "button";

interface ButtonProperties {
  type: ButtonType;
  onClick?: () => void;
  content: ReactNode;
  href?: string;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}

export function IconButton(props: ButtonProperties) {
  if (props.type == "link")
    return (
      <Link
        className={props.className}
        href={props.href ?? "/"}
        target={props.target}
      >
        {props.content}
      </Link>
    );

  return (
    <button
      className={"outline-none focus:bg-none " + props.className}
      onClick={props.onClick}
    >
      {props.content}
    </button>
  );
}

export const TextButton = ({
  icon,
  children,
  className,
}: {
  onClick?: () => void;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={
        "flex justify-between items-center gap-2 text-white bg-primary px-10 text-xl font-medium py-3 max-sm:text-base " +
        className
      }
    >
      {children} {icon}
    </button>
  );
};
