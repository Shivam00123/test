import React from "react";
import VideoHolderBG from "@/public/Images/boardElements/VideoHolderBG.png";
import prevCardImg from "@/public/Images/MeetThecast/prev.png";
import { functionPropString } from "@/Interface/function";

const PrevCard: React.FC<functionPropString> = ({ func }) => {
  return (
    <div
      className="prev1 z-50 -rotate-12 relative cursor-pointer "
      onClick={() => func("prev")}
    >
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
      <div className="w-[90%] h-[70%] absolute -bottom-8 -right-0 z-50 rotate-12">
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
