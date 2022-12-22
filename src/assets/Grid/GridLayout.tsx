import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useHookstate } from "@hookstate/core";
import {
  setContentStartingText,
  useDisplayingComponent,
} from "@/globalStates/states";
import { objectType } from "@/Interface/object";
import CardsWrapper from "../CardsWrapper/CardsWrapper";
import Trailer from "../Trailer/Trailer";
import BackButton from "../BackButton/BackButton";
import Contents from "../HomeContents/Contents";
import Title from "../Title/Title";
import titleImg from "@/public/Images/for website/homepage - web/title.png";
import Content2 from "../HomeContents/Content2";

const GridLayout = () => {
  const [showCards, setShowCards] = useState<boolean>(false);
  const [expandCards, setExpandCards] = useState<boolean>(false);
  const [isMountingState, setIsMountingState] = useState<boolean>(true);
  const dispayingCompState = useHookstate(useDisplayingComponent());
  const [opacityNumber, setOpacityNumber] = useState<number>(1);

  useEffect(() => {
    if (!dispayingCompState?.value) {
      setOpacityNumber(1);
      setTimeout(() => {
        setExpandCards(true);
        setShowCards(true);
      }, 300);
    } else {
      setTimeout(() => {
        setOpacityNumber(0);
      }, 500);
      setTimeout(() => {
        setOpacityNumber(1);
      }, 500);
      setIsMountingState(false);
      setExpandCards(false);
      setTimeout(() => {
        setShowCards(false);
      }, 200);
    }
  }, [dispayingCompState?.value]);

  const variants: objectType = {
    before: {
      transform: "scale(1)",
      opacity: opacityNumber,
      gridTemplateColumns:
        "[col1-start] 0% [col2-start] 0% [col3-start] 35% [col4-start] 0% [col5-start] 0% [col5-end]",
      gridTemplateRows:
        "[row1-start] 0% [row2-start] 0% [row3-start] 35% [row4-start] 0% [row5-start] 0% [row5-end]",
    },
    after: {
      transform: "scale(1)",
      opacity: opacityNumber,
      gridTemplateColumns:
        "[col1-start] 16% [col2-start] 16% [col3-start] 35% [col4-start] 16% [col5-start] 16% [col5-end]",
      gridTemplateRows:
        "[row1-start] 16% [row2-start] 16% [row3-start] 35% [row4-start] 16% [row5-start] 16% [row5-end]",
    },
    expandfull: {
      transform: "scale(1)",
      opacity: opacityNumber,
      gridTemplateColumns:
        "[col1-start] 0% [col2-start] 0% [col3-start] 100% [col4-start] 0% [col5-start] 0% [col5-end]",
      gridTemplateRows:
        "[row1-start] 0% [row2-start] 0% [row3-start] 100% [row4-start] 0% [row5-start] 0% [row5-end]",
    },
  };

  const switchComponentTo = (comp: string) => {
    if (!comp) return;
    dispayingCompState.set(comp);
    setContentStartingText(comp);
  };

  return (
    <motion.div
      initial={{
        transform: "scale(0)",
        gridTemplateColumns:
          "[col1-start] 0% [col2-start] 0% [col3-start] 35% [col4-start] 0% [col5-start] 0% [col5-end]",
        gridTemplateRows:
          "[row1-start] 0% [row2-start] 0% [row3-start] 35% [row4-start] 0% [row5-start] 0% [row5-end]",
      }}
      variants={variants}
      animate={
        !showCards && !isMountingState
          ? "expandfull"
          : expandCards
          ? "after"
          : "before"
      }
      transition={{ duration: 2, type: "spring", stiffness: 100 }}
      className="w-full h-full grid  place-content-center"
    >
      {!dispayingCompState?.value && (
        <div className="absolute top-5 w-[30%] h-[15%] left-1/2 -translate-x-1/2">
          <img
            src={titleImg}
            alt="title"
            className="w-full h-full object-contain"
          />
        </div>
      )}
      <motion.div className="trailervideo relative">
        {!dispayingCompState?.value || dispayingCompState?.value == "video" ? (
          <Trailer />
        ) : (
          <CardsWrapper />
        )}
      </motion.div>

      {showCards && <Content2 />}
    </motion.div>
  );
};

export default GridLayout;
// func={switchComponentTo}
