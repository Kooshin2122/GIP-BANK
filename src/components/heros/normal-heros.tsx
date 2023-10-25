import Image from "next/image";

export default function NormalHeros({
  img,
  subtitle,
  title,
  showList = true
}: {
  img?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="relative w-full min-h-[550px] max-1-sm:h-[300px]">
      <Image
        priority
        src={img ?? "/main-banner.png"}
        alt="Picture of the author"
        className="h-[364]"
        fill
      />
      <div className="absolute w-full h-full linear-gradient-bg max-1-md:px-4">
        <div className="container mx-auto h-full flex items-start flex-col justify-center">
          <h1 className="text-white font-bold text-5xl  leading-normal max-1-md:text-5xl max-1-md:leading-relaxed max-1-sm:text-3xl max-1-sm:leading-relaxed ">
            {title}
          </h1>
          <p className="text-gray-300  my-5 text-2xl max-1-sm:text-lg sm:w-[70%]">
            {subtitle}
          </p>
          {
            showList &&
            <div>
              <p>
                1)  Living Room and Bedroom Furniture
            </p>
              <p>
                2)  Kitchen Appliances
            </p>
              <p>
                3)  Home Electronics
            </p>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
