import React from "react";
import { useHookstate } from "@hookstate/core";

import { useDisplayingComponent } from "@/globalStates/states";
import horizontalRope from "@/public/Images/ropehorizontal.png";
import holder from "@/public/Images/holder.png";
import VideoHolderBG from "@/public/Images/boardElements/VideoHolderBG.png";
import useGetCharcterInfo from "@/hooks/use-getCharcter-info";

const BackButton = () => {
  const dispayingCompState = useHookstate(useDisplayingComponent());
  const { resetState } = useGetCharcterInfo([]);

  const Onclick = () => {
    dispayingCompState.set("");
    resetState();
  };

  return (
    <div onClick={Onclick}>
      <div className="w-2/3 h-1 backbuttonline overflow-hidden absolute cursor-pointer">
        <img
          src={horizontalRope}
          alt="rope"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 h-[80%] absolute right-0 top-3 -rotate-6 grid place-items-center cursor-pointer">
        <img src={holder} alt="border" className="w-full h-full object-fill" />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[30%] font-bold text-xl">
          back
        </h1>
      </div>
    </div>
  );
};

export default BackButton;
