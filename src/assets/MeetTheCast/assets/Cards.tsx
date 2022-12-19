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
      <div className="w-full h-full absolute top-0 z-10" id={character?.id}>
        <img
          src={castcard}
          alt="border"
          className="w-full h-full object-fill  pointer-events-none"
        />
      </div>
      <div className="w-[95%] h-[90%] absolute top-[5%] left-1/2 -translate-x-1/2 flex flex-col items-center justify-between  pointer-events-none p-1">
        <div className="w-[81%] h-[76%] overflow-hidden mt-1 bg-[gray]">
          <img
            src={character?.img}
            alt="character"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h1 className="absolute bottom-[5%] left-1/2 -translate-x-1/2 text-base font-bold -translate-y-2 z-50">
        {character?.name}
      </h1>
    </>
  );
};

export default Cards;
