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
import ColoredPins from "../ColoredPins/ColoredPins";
import descBackMeet from "@/public/Images/for website/Meet the cast page 2/descBackMeet.png";
import videoholder from "@/public/Images/for website/blogstuff/videobackholder.png";
import blogvideoholder from "@/public/Images/blogvideoholder.png";

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
        <div className="w-[70%] h-[90%] flex items-center justify-center relative">
          <img
            src={blogvideoholder}
            alt="border"
            className="w-full h-full object-fill absolute top-0 z-10"
          />
          <VideoComponent videoUrl={cardInfo?.videoUrl} />
          <ColoredPins classname="-top-[3%] right-10" pin="green" />
          <ColoredPins classname="-bottom-[3%] left-10 z-50" pin="yellow" />
        </div>
      </div>
      <div className="descContainer relative flex items-center justify-center">
        <div className="w-[78%] h-[125%] relative">
          <img
            src={descBackMeet}
            alt="border"
            className="w-full h-full object-fill absolute top-0"
          />
          <div className="w-[90%] h-[90%] absolute top-0 left-[2%]  flex flex-col items-end justify-around p-5">
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
