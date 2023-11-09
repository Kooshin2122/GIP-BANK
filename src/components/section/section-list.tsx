import Image from "next/image";
import {
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { BsCheck2Square } from "react-icons/bs";
interface ListItem {
  title: string;
  subtitles?: string[];
  checkIcon?: boolean;
}

interface ListItemProps {
  img?: string;
  items?: ListItem[];
  isReverse?: boolean;
  isBg?: boolean;
  isImgHidden?: boolean;
  text?: string;
  textTitle?: string;
  paddingY?: boolean;
}

export default function SectionList({
  img = "/cash-on-hand.png",
  items = [],
  isReverse = false,
  isBg = false,
  isImgHidden = false,
  text,
  textTitle,
  paddingY = true
}: ListItemProps) {
  return (
    <div
      className={
        " w-full mt-4 max-1-sm:px-3 " + (isBg ? "bg-primarytp" : "") + (paddingY ? "py-7" : "")
      }
    >
      <div
        className={
          "container  mx-auto flex justify-between gap-10 flex-wrap  " +
          (isReverse ? "flex-row-reverse" : "")
        }
      >
        {!!text || !!textTitle ? (
          <div className="flex-1 flex flex-col gap-2 ">
            <h1 className="text-grey-800 w-[70%] text-xl font-medium">
              {textTitle}
            </h1>
            <p className="text-grey w-[90%] sm:w-[90%] text-xl font-light">
              {text}
            </p>
          </div>
        ) : (
          <ul>
            {items.map((item, index) => (
              <ListItem
                label={item.title}
                subtitles={item.subtitles}
                key={index}
                checkIcon={item.checkIcon}
              />
            ))}
          </ul>
        )}
        {isImgHidden ? (
          <></>
        ) : (
          <div className={(isReverse ? "flex" : "") + " max-1-sm:hidden block"}>
            <div
              className={
                "flex-1 flex   items-center relative max-1-sm:hidden " +
                (isReverse ? "justify-start" : "justify-end")
              }
            >
              <div className="relative w-[450px] max-1-md:w-[350px] max-1-md:h-[270px] h-[350px] max-1-md:mx-4">
                <Image
                  priority
                  src={img}
                  alt="Picture of the author"
                  fill
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ListItem({
  label,
  subtitles = [],
  checkIcon = false,
}: {
  label?: string;
  isSub?: boolean;
  subtitles?: string[];
  checkIcon?: boolean;
}) {
  return (
    <li className="my-4">
      <div className="flex gap-3 items-start">
        {checkIcon ? (
          <BsCheck2Square className="text-primary text-2xl" />
        ) : (
          <MdKeyboardDoubleArrowRight className="text-primary text-2xl" />
        )}
        <p className="text-grey w-[95%] text-xl font-light">{label}</p>
      </div>

      <ul className="ml-7">
        {subtitles?.map((subtitle, index) => (
          <li key={index} className="flex gap-1 items-center my-2">
            <MdKeyboardArrowRight className="text-primary text-2xl" />
            <p className="text-grey text-lg font-light">{subtitle}</p>
          </li>
        ))}
      </ul>
    </li>
  );
}
