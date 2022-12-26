import React from "react";
import titleImg from "@/public/Images/for website/Meet the cast page 2/title.png";
import ColoredPins from "../ColoredPins/ColoredPins";

interface TitleProp {
  title: string;
}

const Title: React.FC<TitleProp> = ({ title }) => {
  return (
    <div className="w-full h-full relative">
      <ColoredPins classname="left-[10%] -top-[10%]" pin="red" />
      <img src={titleImg} alt="border" className="w-full h-full object-fill" />
      <h1 className="absolute text-2xl font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {title}
      </h1>
    </div>
  );
};

export default Title;
