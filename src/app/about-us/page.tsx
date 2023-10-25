import NormalHeros from "@/components/heros/normal-heros";
import SectionList from "@/components/section/section-list";
import Title from "@/components/title";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <>
      <NormalHeros
        img="/personal-hero-account.png"
        title="About Us"
        subtitle="Galaxy International Bank (GIB)"
      />
      <Title label="Welcome To" labelC="Galaxy International Bank " />
      <div className="mt-10" />
      <SectionList
        isBg
        text="Galaxy International Bank (GIB) is a premier fully-fledged Islamic bank that is licensed and regulated by the Central bank of Somalia to offer banking and financial services under sharia’h principles. GIB offers a full range of financial services focused on sustainable development and wealth creation to inspire economic growth of Somali population."
        img="/about-1.png"
      />
      <Title label="Our governing" labelC="board" />
      <div className="mt-10" />

      <SectionList
        text="The organizational structure of GIB takes cognizance of principles whose main aim will be to facilitate efficiency and effectiveness in service delivery by having a clear span of control and the need for unity of command to enhance speedy decision-making while retaining accountability at every stage. The Company has designed a structure that is flexible enough to enable it realize its objectives."
        img="/about-2.png"
        isReverse
      />

      <div className="container  mx-auto mt-36 flex justify-around flex-wrap">
        <div className="flex flex-col items-center">
          <div className="relative w-[180px] h-[190px] ">
            <Image
              priority
              src={"/mission.svg"}
              alt="Picture of the author"
              fill
              className="rounded-lg"
            />
          </div>
          <Title
            label="Our"
            labelC="Mission"
            hideSide
            textCenter
            className="justify-center"
          />
          <div className="w-96 my-4  max-1-sm:w-full  max-1-sm:px-4">
            <p className="text-grey text-xl font-light text-center">
              We are a bank providing innovative and customer-focused financial
              services that socially and economically empower the people of
              Somalia.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center max-1-sm:mt-10">
          <div className="relative w-[180px] h-[190px] ">
            <Image
              priority
              src={"/vission.svg"}
              alt="Picture of the author"
              fill
              className="rounded-lg"
            />
          </div>
          <Title
            label="Our"
            labelC="Vision"
            hideSide
            textCenter
            className="justify-center"
          />
          <div className="w-96 my-4 max-1-sm:w-full  max-1-sm:px-4">
            <p className="text-grey text-xl font-light text-center">
              To empower people by providing financial solutions that transform
              the lives of the people of Somalia.
            </p>
          </div>
        </div>
      </div>
      <Title label="Our core" labelC="values" />
      <div className="relative w-full   container  mx-auto mt-20 ">
        <img
          src={"/core-value.svg"}
          alt="Picture of the author"
          className="rounded-lg"
        />
      </div>

      <Title label="Our" labelC="Stakeholders" />
    </>
  );
}
