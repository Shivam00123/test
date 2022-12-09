import React from "react";
import { motion } from "framer-motion";

import Cards from "./Cards";
import useGetCharcterInfo from "@/hooks/use-getCharcter-info";
import horizontalRope from "@/public/Images/ropehorizontal.png";
import NextCard from "./NextCard";
import PrevCard from "./PrevCard";
import Title from "@/assets/Title/Title";
import BackButton from "@/assets/BackButton/BackButton";

interface Props {
  setShowCardsInfo: (value: boolean) => void;
}

let classindex: number = 0;

const CardsContainer: React.FC<Props> = ({ setShowCardsInfo }) => {
  const { displayingCards, getCharacterInfo, changeDisplayingCards } =
    useGetCharcterInfo();

  const generateCardIndex = () => {
    classindex += 1;
    if (classindex > 3) {
      classindex = 1;
      return classindex;
    }
    return classindex;
  };

  const getCardInfo = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLDivElement;
    getCharacterInfo(target?.id);
    setShowCardsInfo(true);
    return;
  };

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
          "[col1-start] 12% [col2-start] 9% [col3-start] 13% [col4-start] 9% [col5-start] 13% [col6-start] 9% [col7-start] 13% [col8-start] 9% [col9-start] 13% [col9-end]",
        gridTemplateRows:
          "[row1-start] 16.6% [row2-start] 16.6% [row3-start] 16.6% [row4-start] 16.6% [row5-start] 16.6% [row6-start] 16.6% [row6-end]",
      }}
      className="w-full h-[100%] relative  grid place-content-center py-5 px-10"
    >
      <div className="backbutton relative">
        <BackButton />
      </div>
      <div className="titleBox ml-5 rotate-1 z-50 flex items-end justify-end">
        <div className="w-full h-2/3 relative">
          <Title title="Meet the cast" />
        </div>
      </div>
      <div className="titleBoxTocard2Thread w-full h-full relative overflow-hidden">
        <div className="w-full h-[5px] titleBoxTocard2Threadrope">
          <img
            src={horizontalRope}
            alt="thread"
            className="w-full h-full object-fill"
          />
        </div>
      </div>

      <div className="centercardtoprev relative">
        <div className="centercardtoprevrope w-full h-[5px] absolute">
          <img
            src={horizontalRope}
            alt="thread"
            className="w-full h-full object-fill"
          />
        </div>
      </div>

      <PrevCard func={changeDisplayingCards} />

      {displayingCards?.map((character) => (
        <div
          key={character?.id}
          className={`card${generateCardIndex()} z-50 relative cursor-pointer`}
          onClick={(e) => getCardInfo(e)}
        >
          <Cards character={character} />
        </div>
      ))}
      <NextCard func={changeDisplayingCards} />
    </motion.div>
  );
};

export default CardsContainer;
