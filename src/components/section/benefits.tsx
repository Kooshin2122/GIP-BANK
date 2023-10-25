import { Card } from "../cards/home-page-cards";
import { ReactNode } from "react";
interface ItemsProps {
  Icon: ReactNode;
  title: string;
  isPrimaryBg: boolean;
}
export default function Benefits({ items }: { items: ItemsProps[] }) {
  return (
    <div className="container my-10  mx-auto grid grid-cols-4 relative z-10  gap-10 max-sm:gap-5 max-1-sm:mt-10 max-1-sm:grid max-1-sm:grid-cols-2 max-1-sm:px-3">
      {items.map((item, index) => (
        <Card
          Icon={item.Icon}
          labelThick=""
          labelLight={item.title}
          isPrimaryBg={item.isPrimaryBg}
          className="w-full shadow-none"
          key={index}
        />
      ))}
    </div>
  );
}
