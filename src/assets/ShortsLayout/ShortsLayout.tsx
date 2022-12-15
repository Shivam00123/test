import React from "react";

import { SixColThreeRows } from "@/GridTemplate/grid-templete";
import BackButton from "../BackButton/BackButton";
import Title from "../Title/Title";
import VideoHolderBorder from "../VideoHolderBorder/VideoHolderBorder";
import horizontalRope from "@/public/Images/ropehorizontal.png";
import Slider from "../Slider/Slider";
import CharacterDesc from "../CharacterDesc";
import VideoComponent from "../VideoComponent/VideoComponent";
import { objectType } from "@/Interface/object";
import greenpin from "@/public/Images/MeetThecast/greenpin.png";
import yellowpin from "@/public/Images/MeetThecast/yellowpin.png";
import ColoredPins from "../ColoredPins/ColoredPins";

interface ShortsProps {
  cardInfo?: objectType;
  changeCard: (id: string | number) => void;
  filteredArray?: objectType[];
}

const ShortsLayout: React.FC<ShortsProps> = ({
  cardInfo,
  changeCard,
  filteredArray,
}) => {
  return (
    <div
      style={SixColThreeRows}
      className="w-full h-full grid place-content-center"
    >
      <div className="backbutton relative">
        <BackButton />
      </div>
      <div className="titleBox relative p-2 rotate-1">
        <Title title="Behind the scenes" />
      </div>
      <div className="title_to_desc relative">
        <div className="title_to_desc_rope w-full h-[5px] absolute -z-10">
          <img
            src={horizontalRope}
            alt="thread"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
      {/* <div className="title_to_desc relative">
        <div className="title_to_desc_rope w-full h-[5px] absolute z-50 flex items-center">
          
        </div>
      </div> */}
      <div className="desc_to_videoholder relative">
        <div className="desc_to_videoholder_rope w-full h-[5px] absolute">
          <img
            src={horizontalRope}
            alt="thread"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
      <div className="videoContainer relative flex items-center justify-center">
        <div className="w-[80%] h-[80%] flex items-center justify-center relative">
          <VideoHolderBorder />
          <VideoComponent videoUrl={cardInfo?.videoUrl} />
          <ColoredPins classname="-top-[3%] right-10" pin="green" />
          <ColoredPins classname="-bottom-[3%] left-10" pin="yellow" />
        </div>
      </div>
      <div className="descContainer relative flex items-center justify-center">
        <div className="w-[70%] h-[80%] relative">
          <VideoHolderBorder />
          <div className="w-full h-full absolute top-0  flex flex-col items-end justify-around">
            <ColoredPins pin="purple" classname="top-[10%] right-[10%]" />
            <CharacterDesc
              charactername={cardInfo?.title}
              characterdesc={cardInfo?.desc}
            />
          </div>
        </div>
      </div>
      <div className="carouselHolder relative grid place-items-center">
        <Slider filteredArray={filteredArray} changeCard={changeCard} />
      </div>
    </div>
  );
};

export default ShortsLayout;
