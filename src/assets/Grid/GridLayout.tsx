import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useHookstate } from "@hookstate/core";
import { useDisplayingComponent } from "@/globalStates/states";
import { objectType } from "@/Interface/object";
import CardsWrapper from "../CardsWrapper/CardsWrapper";
import Trailer from "../Trailer/Trailer";
import horizontalRope from "@/public/Images/ropehorizontal.png";
import BackButton from "../BackButton/BackButton";

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
        {dispayingCompState?.value && <BackButton />}
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
              className="w-full h-full bg-[antiquewhite] absolute top-3 left-[8%] rotate-3"
            ></div>
          </div>
          <div className="line1 h-[5px] w-full relative overflow-hidden">
            <img
              src={horizontalRope}
              alt="rope"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mail  z-50 relative">
            <div
              onClick={() => switchComponentTo("mail")}
              className="w-1/2 h-full bg-[yellow] absolute top-[50%] -left-[20%] -rotate-12 cursor-pointer"
            ></div>
          </div>
          <div className="line2 h-[5px] w-full relative overflow-hidden">
            <img
              src={horizontalRope}
              alt="rope"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="meet  z-50 relative">
            <div
              onClick={() => switchComponentTo("meet")}
              className="w-full h-full bg-[white] absolute top-[10%] -left-[10%] rotate-6 cursor-pointer"
            ></div>
          </div>
          <div className="line3 h-[5px] w-full  relative overflow-hidden">
            <img
              src={horizontalRope}
              alt="rope"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="meetToComicThread relative">
            <div className="absolute -top-1 w-full h-full  right-[20%] overflow-hidden">
              <div className="meetToComicThreadRope h-[5px] w-full absolute">
                <img
                  src={horizontalRope}
                  alt="rope"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="comic z-50 relative">
            <div
              onClick={() => switchComponentTo("comic")}
              className="w-2/3 h-full bg-[green] absolute -top-[20%] left-[10%]  -rotate-6 cursor-pointer"
            ></div>
          </div>
          <div className="line4 h-[5px] w-full relative overflow-hidden">
            <img
              src={horizontalRope}
              alt="rope"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="comicToButtonThread relative">
            <div className="absolute top-0 w-1/2 h-full  -right-[12%]">
              <div className="h-[5px] w-full absolute top-[20%]">
                <img
                  src={horizontalRope}
                  alt="rope"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute top-0 w-full h-full -left-[37%]">
              <div className="h-[5px] w-full  absolute top-[20%]">
                <img
                  src={horizontalRope}
                  alt="rope"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="playbutton  z-50 relative">
            <div className="w-1/2 h-3/4 bg-[black] absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer"></div>
          </div>
          <div className="line5 h-[5px] w-1/3  relative overflow-hidden ">
            <img
              src={horizontalRope}
              alt="rope"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="instagram z-50 relative">
            <div className="w-full h-full bg-[red] absolute -top-[20%] -right-1/4 -rotate-12  cursor-pointer "></div>
          </div>
          <div className="line6 h-[5px] w-full relative overflow-hidden">
            <img
              src={horizontalRope}
              alt="rope"
              className="w-full h-full object-cover"
            />
          </div>
        </>
      )}
    </motion.div>
  );
};

export default GridLayout;
