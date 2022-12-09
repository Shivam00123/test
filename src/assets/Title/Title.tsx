import React from "react";
import VideoHolderBG from "@/public/Images/boardElements/VideoHolderBG.png";
import redpin from "@/public/Images/MeetThecast/redpin.png";

interface TitleProp {
  title: string;
}

const Title: React.FC<TitleProp> = ({ title }) => {
  return (
    <div className="w-full h-full relative">
      <div className="absolute w-6 h-6 left-[10%]">
        <img src={redpin} alt="pin" className="w-full h-full object-contain" />
      </div>
      <img
        src={VideoHolderBG}
        alt="border"
        className="w-full h-full object-fill"
      />
      <h1 className="absolute text-2xl font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {title}
      </h1>
    </div>
  );
};

export default Title;
