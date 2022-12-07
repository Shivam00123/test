import React, { useState, useMemo, memo } from "react";
import { motion } from "framer-motion";

import Cards from "./Cards";
import { objectType } from "@/Interface/object";
import { cast } from "@/data/cast";
import useGetCharcterInfo from "@/hooks/use-getCharcter-info";
import horizontalRope from "@/public/Images/ropehorizontal.png";
import VideoHolderBG from "@/public/Images/boardElements/VideoHolderBG.png";

interface Props {
  setShowCardsInfo?: any;
}

const CardsContainer: React.FC<Props> = ({ setShowCardsInfo }) => {
  const {
    filterCastArray,
    useClickedId,
    displayingCards,
    getCharacterInfo,
    changeDisplayingCards,
  } = useGetCharcterInfo();

  return (
    <motion.div
      initial={{
        transform: "scale(0)",
        gridTemplateColumns:
          "[col1-start] 0% [col2-start] 0% [col3-start] 0% [col4-start] 0% [col5-start] 0% [col6-start] 0% [col7-start] 0% [col8-start] 0% [col9-start] 0% [col9-end]",
        gridTemplateRows:
          "[row1-start] 0% [row2-start] 0% [row3-start] 0% [row4-start] 0% [row5-start] 0% [row6-start] 0% [row6-end]",
      }}
      animate={{
        transform: "scale(1)",
        gridTemplateColumns:
          "[col1-start] 12% [col2-start] 8% [col3-start] 12% [col4-start] 8% [col5-start] 12% [col6-start] 8% [col7-start] 12% [col8-start] 8% [col9-start] 12% [col9-end]",
        gridTemplateRows:
          "[row1-start] 16% [row2-start] 16% [row3-start] 16% [row4-start] 16% [row5-start] 16% [row6-start] 16% [row6-end]",
      }}
      className="w-full h-[100%] relative  grid place-content-center p-5"
    >
      <div className="backbutton relative">
        <div className="w-2/3 h-1 backbuttonline overflow-hidden absolute">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 h-[80%] bg-white absolute right-0 top-0 -rotate-6"></div>
      </div>
      <div className="titleBox bg-border ml-5 rotate-1 z-50"></div>
      <div className="titleBoxTocard2Thread w-full h-full relative overflow-hidden">
        <div className="w-full h-1 titleBoxTocard2Threadrope">
          <img
            src={horizontalRope}
            alt="thread"
            className="w-full h-full object-fill"
          />
        </div>
      </div>

      <div className="centercardtoprev relative">
        <div className="centercardtoprevrope w-full h-1 absolute">
          <img
            src={horizontalRope}
            alt="thread"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
      <div className="prev1 z-50 -rotate-12 bg-white"></div>
      <div className="card1 z-50 -rotate-6 relative">
        <div className="w-full h-full absolute top-0">
          <img
            src={VideoHolderBG}
            alt="border"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
      <div className="card2 z-50 bg-white"></div>
      <div className="card3 z-50 rotate-6 bg-white"></div>
      <div className="nextcard z-50 rotate-12 bg-white"></div>
    </motion.div>
  );
};

export default CardsContainer;
{
  /* <>
{displayingCards.map((character) => (
  <Cards
    key={character?.id}
    classname="absolute"
    data={character}
    func={getCharacterInfo}
  />
))}

<Cards
  classname="absolute top-[70%] left-[4%] -rotate-12 z-50"
  placeholderText="prev"
  func={changeDisplayingCards}
/>
<Cards classname="absolute top-[70%] left-[4%] -rotate-[2deg] -z-20" />

<Cards
  classname="absolute top-[70%] left-[83%] rotate-12 z-50"
  placeholderText="next"
  func={changeDisplayingCards}
/>
<Cards classname="absolute top-[70%] left-[83%] rotate-[20deg] -z-20 pointer-events-none" />
</> */
}
