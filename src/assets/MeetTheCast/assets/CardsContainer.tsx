import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

import Cards from "./Cards";
import useGetCharcterInfo from "@/hooks/use-getCharcter-info";
import horizontalRope from "@/public/Images/ropehorizontal.png";
import NextCard from "./NextCard";
import PrevCard from "./PrevCard";
import Title from "@/assets/Title/Title";
import BackButton from "@/assets/BackButton/BackButton";
import { cast } from "@/data/cast";
import useGenerateIndex from "@/hooks/use-generateIndex";

interface Props {
  setShowCardsInfo: (value: boolean) => void;
}

let classindex: number = 0;

const CardsContainer: React.FC<Props> = ({ setShowCardsInfo }) => {
  const IndexRef = useRef(useGenerateIndex(5));
  const { displayingCards, getCharacterInfo, changeDisplayingCards } =
    useGetCharcterInfo(cast, 5);

  useEffect(() => {
    return () => {
      IndexRef.current.resetIndex();
    };
  }, []);

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
          "[col1-start] 10% [col2-start] 3% [col3-start] 9% [col4-start] 13% [col5-start] 9% [col6-start] 13% [col7-start] 9% [col8-start] 6% [col9-start] 6% [col10-start] 9% [col11-start] 13% [col11-end]",
        gridTemplateRows:
          "[row1-start] 5% [row2-start] 5% [row3-start] 18% [row4-start] 18% [row5-start] 18% [row6-start] 18% [row7-start] 18% [row7-end]",
      }}
      className="w-full h-[100%] relative  grid place-content-center"
    >
      <div className="backbuttonCardContainer relative">
        <BackButton />
      </div>
      <div className="titleBoxCardContainer ml-5 rotate-1 z-50 flex items-end justify-end">
        <div className="w-full h-2/3 relative">
          <Title title="Meet the cast" />
        </div>
      </div>
      <div className="titleBoxTocard2Thread w-full h-full relative overflow-hidden">
        <div className="w-[105%] h-[5px] titleBoxTocard2Threadrope">
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

      {/* <PrevCard func={changeDisplayingCards} /> */}

      {displayingCards?.map((character: any) => (
        <div
          key={character?.id}
          className={`card${IndexRef.current.generateCardIndex()} z-50 relative cursor-pointer`}
          onClick={(e) => getCardInfo(e)}
        >
          <Cards character={character} />
        </div>
      ))}
      {/* <NextCard func={changeDisplayingCards} /> */}
    </motion.div>
  );
};

export default CardsContainer;
