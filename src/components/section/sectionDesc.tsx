import Image from "next/image";
import {
    MdKeyboardArrowRight,
    MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { BsCheck2Square } from "react-icons/bs";
import Title from "../title";
interface ListItem {
    title: string;
    subtitles?: string[];
    checkIcon?: boolean;
}

interface ListItemProps {
    title?: string;
    desc?: string;
    features?: ListItem[];
    requirements?: ListItem[];
    isBg?: boolean;
}

export default function SectionDesc({
    title = "Title",
    desc = "description",
    features = [],
    requirements = [],
    isBg = false,
}: ListItemProps) {
    return (
        <div
            className={
                " w-full my-7 py-7 max-1-sm:px-3 " + (isBg ? "bg-primarytp" : "bg-blue-500")
            }
        >
            <div className={"container mx-auto flex flex-col gap-5 "}>
                <div className="flex items-center gap-5">
                    <div className="h-10 w-3 max-1-md:h-7 bg-primary" />
                    <h1 className={"text-2xl font-semibold capitalize text-secondary max-1-md:text-2xl  "}>
                        {title}
                    </h1>
                </div>
                <p className="text-lg font-normal sm:w-[80%] text-slate-900 max-1-md:text-base">
                    {desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-x-20 gap-y-5">
                    <div>
                        <h1 className={"text-xl font-semibold text-secondary max-1-md:text-xl  "}>
                            Features
                        </h1>
                        <ul>
                            {features.map((item, index) => (
                                <ListItem
                                    label={item.title}
                                    subtitles={item.subtitles}
                                    key={index}
                                    checkIcon={item.checkIcon}
                                />
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h1 className={"text-xl font-semibold text-secondary max-1-md:text-xl  "}>
                            Requirement
                        </h1>
                        <ul>
                            {requirements.map((item, index) => (
                                <ListItem
                                    label={item.title}
                                    subtitles={item.subtitles}
                                    key={index}
                                    checkIcon={item.checkIcon}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
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
                <p className="text-grey w-[100%] text-lg font-normal">{label}</p>
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
