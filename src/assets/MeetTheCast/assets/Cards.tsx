import React from "react";
import castcard from "@/public/Images/castcard.png";
import VideoHolderBG from "@/public/Images/boardElements/VideoHolderBG.png";
import { objectType } from "@/Interface/object";

interface Props {
  character?: objectType;
}

const Cards: React.FC<Props> = ({ character }) => {
  return (
    <>
      <div
        className="w-[124%] h-[105%] min-h-[269px] min-w-[247px] absolute top-0 z-10"
        id={character?.id}
      >
        <img
          src={castcard}
          alt="border"
          className="w-full h-full object-fill  pointer-events-none"
        />
        <h1 className="absolute whitespace-nowrap bottom-[10%] left-1/2  -translate-x-[50%] text-base font-bold -translate-y-2 z-50">
          {character?.name}
        </h1>
      </div>
      <div className="w-[124%] h-[105%]  min-h-[269px] min-w-[247px] absolute top-[6%] left-[0%] flex flex-col items-center justify-between  pointer-events-none p-1">
        <div className="w-[81%] h-[68%] overflow-hidden mt-1 bg-[gray]">
          <img
            src={character?.img}
            alt="character"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Cards;
