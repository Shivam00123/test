import React from "react";
import VideoHolderBG from "@/public/Images/boardElements/VideoHolderBG.png";
import prevCardImg from "@/public/Images/MeetThecast/prev.png";
import { functionPropString } from "@/Interface/function";
import ColoredPins from "@/assets/ColoredPins/ColoredPins";

const PrevCard: React.FC<functionPropString> = ({ func }) => {
  return (
    <div
      className="prev1 z-50 -rotate-12 relative cursor-pointer translate-x-[30%] -translate-y-[10%]"
      onClick={() => func("prev")}
    >
      <ColoredPins pin="green" classname="top-0 left-[10%] z-50" />
      <div className="w-full h-full absolute top-0">
        <img
          src={VideoHolderBG}
          alt="border"
          className="w-full h-full object-fill"
        />
      </div>
      <div className="w-full h-full absolute top-0 rotate-12">
        <img
          src={VideoHolderBG}
          alt="border"
          className="w-full h-full object-fill"
        />
      </div>
      <div className="w-[80%] h-[50%] absolute -bottom-5   -right-0 z-50 rotate-12">
        <ColoredPins
          pin="yellow"
          classname="top-[20%] right-1/2 translate-x-1/2 z-50"
        />
        <img
          src={prevCardImg}
          alt="border"
          className="w-full h-full object-fill"
        />
      </div>
      <div className="w-[95%] h-[90%] absolute top-[5%] left-1/2 -translate-x-1/2 flex flex-col items-center justify-between">
        <div className="w-[95%] h-[80%] bg-[gray] overflow-hidden"></div>
        <h1 className="text-xl font-bold">prev</h1>
      </div>
    </div>
  );
};

export default PrevCard;
