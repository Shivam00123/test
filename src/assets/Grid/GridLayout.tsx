import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useHookstate } from "@hookstate/core";
import { useDisplayingComponent } from "@/globalStates/states";
import { objectType } from "@/Interface/object";
import CardsWrapper from "../CardsWrapper/CardsWrapper";
import Trailer from "../Trailer/Trailer";

const GridLayout = () => {
  const [showCards, setShowCards] = useState<boolean>(false);
  const [expandCards, setExpandCards] = useState<boolean>(false);
  const [isMountingState, setIsMountingState] = useState<boolean>(true);
  const dispayingCompState = useHookstate(useDisplayingComponent());

  useEffect(() => {
    if (!dispayingCompState?.value) {
      setTimeout(() => {
        setExpandCards(true);
        setShowCards(true);
      }, 300);
    } else {
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
      gridTemplateColumns:
        "[col1-start] 0% [col2-start] 0% [col3-start] 35% [col4-start] 0% [col5-start] 0% [col5-end]",
      gridTemplateRows:
        "[row1-start] 0% [row2-start] 0% [row3-start] 35% [row4-start] 0% [row5-start] 0% [row5-end]",
    },
    after: {
      transform: "scale(1)",
      gridTemplateColumns:
        "[col1-start] 16% [col2-start] 16% [col3-start] 35% [col4-start] 16% [col5-start] 16% [col5-end]",
      gridTemplateRows:
        "[row1-start] 16% [row2-start] 16% [row3-start] 35% [row4-start] 16% [row5-start] 16% [row5-end]",
    },
    expandfull: {
      transform: "scale(1)",
      gridTemplateColumns:
        "[col1-start] 0% [col2-start] 0% [col3-start] 100% [col4-start] 0% [col5-start] 0% [col5-end]",
      gridTemplateRows:
        "[row1-start] 0% [row2-start] 0% [row3-start] 100% [row4-start] 0% [row5-start] 0% [row5-end]",
    },
  };

  const switchComponentTo = (comp: string) => {
    if (!comp) return;
    dispayingCompState.set(comp);
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
      <motion.div className="trailervideo relative z-50">
        <div
          className="absolute top-10 right-10 w-10 h-10 bg-[black] z-20"
          onClick={() => dispayingCompState.set("")}
        ></div>
        {!dispayingCompState?.value || dispayingCompState?.value == "video" ? (
          <Trailer />
        ) : (
          <CardsWrapper />
        )}
      </motion.div>

      {showCards && (
        <>
          {" "}
          <div className="blog cursor-pointer z-50 relative">
            <div
              onClick={() => switchComponentTo("blog")}
              className="w-full h-full bg-[antiquewhite] absolute top-3 left-3 rotate-3"
            ></div>
          </div>
          <div className="line1 diagonal rightToleft relative overflow-hidden"></div>
          <div className="mail  z-50 relative">
            <div
              onClick={() => switchComponentTo("mail")}
              className="w-1/2 h-full bg-[yellow] absolute top-16 -left-0 -rotate-12 cursor-pointer"
            ></div>
          </div>
          <div className="line2 diagonal leftToright relative overflow-hidden"></div>
          <div className="meet  z-50 relative">
            <div
              onClick={() => switchComponentTo("meet")}
              className="w-full h-full bg-[white] absolute top-0 -left-5 rotate-6 cursor-pointer"
            ></div>
          </div>
          <div className="line3  relative overflow-hidden">
            <div className="absolute top-[30%] right-0 h-[1px] w-full bg-[black] -skew-y-[12deg] "></div>
          </div>
          <div className="comic z-50 relative">
            <div
              onClick={() => switchComponentTo("comic")}
              className="w-2/3 h-full bg-[green] absolute -top-5 left-[10%]  -rotate-6 cursor-pointer"
            ></div>
          </div>
          <div className="line4 diagonal rightToleft relative overflow-hidden"></div>
          <div className="playbutton  z-50 relative">
            <div className="w-1/2 h-3/4 bg-[black] absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer"></div>
          </div>
          <div className="line5 w-full h-full  relative overflow-hidden ">
            <div className="absolute top-0 right-1/2 h-full w-[1px] bg-[black] rounded-md"></div>
          </div>
          <div className="instagram z-50 relative">
            <div className="w-full h-full bg-[red] absolute -top-5 -right-1/4 -rotate-12  cursor-pointer "></div>
          </div>
          <div className="line6 diagonal leftToright w-[120%] h-[120%] -translate-y-2 -translate-x-3 relative overflow-hidden"></div>
        </>
      )}
    </motion.div>
  );
};

export default GridLayout;
