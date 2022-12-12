import React from "react";
import VideoHolderBG from "@/public/Images/boardElements/VideoHolderBG.png";
import { objectType } from "@/Interface/object";

interface Props {
  character?: objectType;
}

const Cards: React.FC<Props> = ({ character }) => {
  return (
    <>
      <div className="w-full h-full absolute top-0" id={character?.id}>
        <img
          src={VideoHolderBG}
          alt="border"
          className="w-full h-full object-fill  pointer-events-none"
        />
      </div>
      <div className="w-[95%] h-[90%] absolute top-[5%] left-1/2 -translate-x-1/2 flex flex-col items-center justify-between  pointer-events-none">
        <div className="w-[95%] h-[80%] border border-black overflow-hidden">
          <img
            src={character?.img}
            alt="character"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-xl font-bold">{character?.name}</h1>
      </div>
    </>
  );
};

export default Cards;
