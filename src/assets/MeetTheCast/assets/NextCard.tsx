import React from "react";
import VideoHolderBG from "@/public/Images/boardElements/VideoHolderBG.png";
import nextCardImg from "@/public/Images/MeetThecast/next.png";
import { functionPropString } from "@/Interface/function";
import ColoredPins from "@/assets/ColoredPins/ColoredPins";

const NextCard: React.FC<functionPropString> = ({ func }) => {
  return (
    <div
      className="nextcard z-50 rotate-12 relative cursor-pointer -translate-x-[30%] -translate-y-[10%]"
      onClick={() => func("next")}
    >
      <ColoredPins pin="red" classname="top-0 right-[10%] z-50" />
      <div className="w-full h-full absolute top-0">
        <img
          src={VideoHolderBG}
          alt="border"
          className="w-full h-full object-fill"
        />
      </div>
      <div className="w-full h-full absolute top-0 -rotate-12">
        <img
          src={VideoHolderBG}
          alt="border"
          className="w-full h-full object-fill"
        />
      </div>
      <div className="w-[75%] h-[50%] absolute -bottom-5 left-0 z-50 -rotate-12">
        <ColoredPins
          pin="yellow"
          classname="top-[20%] right-1/2 translate-x-1/2 z-50"
        />
        <img
          src={nextCardImg}
          alt="border"
          className="w-full h-full object-fill"
        />
      </div>
      <div className="w-[95%] h-[90%] absolute top-[5%] left-1/2 -translate-x-1/2 flex flex-col items-center justify-between">
        <div className="w-[95%] h-[80%] bg-[gray] overflow-hidden"></div>
      </div>
    </div>
  );
};

export default NextCard;
