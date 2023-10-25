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
}

export default function SectionList({
  img = "/cash-on-hand.png",
  items = [],
  isReverse = false,
  isBg = false,
  isImgHidden = false,
  text,
}: ListItemProps) {
  return (
    <div
      className={
        " w-full mt-4 py-7 max-1-sm:px-3 " + (isBg ? "bg-primarytp" : "")
      }
    >
      <div
        className={
          "container  mx-auto flex justify-between gap-10 flex-wrap  " +
          (isReverse ? "flex-row-reverse" : "")
        }
      >
        {!!text ? (
          <div className="flex-1 flex gap-4 ">
            <div>
              <MdKeyboardDoubleArrowRight className="text-primary text-2xl" />
            </div>
            <p className="text-grey text-xl font-light">{text}</p>
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
        <p className="text-grey w-[80%] text-xl font-light">{label}</p>
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
