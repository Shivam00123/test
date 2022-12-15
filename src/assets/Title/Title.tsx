import React from "react";
import VideoHolderBG from "@/public/Images/boardElements/VideoHolderBG.png";
import redpin from "@/public/Images/MeetThecast/redpin.png";
import ColoredPins from "../ColoredPins/ColoredPins";

interface TitleProp {
  title: string;
}

const Title: React.FC<TitleProp> = ({ title }) => {
  return (
    <div className="w-full h-full relative">
      <ColoredPins classname="left-[10%] -top-[10%]" pin="red" />
      <img
        src={VideoHolderBG}
        alt="border"
        className="w-full h-full object-fill"
      />
      <h1 className="absolute text-xl font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {title}
      </h1>
    </div>
  );
};

export default Title;
