import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Trailer from "@/assets/Trailer/Trailer";
import { useHookstate } from "@hookstate/core";
import { useDisplayingComponent } from "@/globalStates/states";
import MobileCardsWrapper from "@/assets/MobileCardWrapper/MobileCardsWrapper";
import rope from "@/public/Images/rope.png";
import MobileContents from "@/assets/MobileHomeContents/MobileContents";
import boardImg from "@/public/Images/board.png";
import title from "@/public/Images/for website/homepage - web/title.png";

const MobileHome = () => {
  const [expandMainCard, setExpandingMainCard] = useState<boolean>(false);
  const dispayingCompState = useHookstate(useDisplayingComponent());

  useEffect(() => {
    if (!dispayingCompState?.value) {
      setExpandingMainCard(false);
    }
  }, [dispayingCompState?.value]);

  const variants = {
    before: {
      transform: "scale(1)",
      gridTemplateColumns:
        "[col1-start] 20% [col2-start] 20% [col3-start] 20% [col4-start] 20% [col5-start] 20% [col5-end]",
      gridTemplateRows:
        "[row1-start] 12% [row2-start] 12% [row3-start] 12% [row4-start] 4% [row5-start] 12% [row6-start] 4% [row7-start] 12% [row8-start] 4% [row9-start] 12% [row10-start] 4% [row11-start] 12% [row11-end]",
    },
    after: {
      transform: "scale(1)",
      gridTemplateColumns:
        "[col1-start] 20% [col2-start] 20% [col3-start] 20% [col4-start] 20% [col5-start] 20% [col5-end]",
      gridTemplateRows:
        "[row1-start] 33% [row2-start] 33% [row3-start] 33% [row4-start] 0% [row5-start] 0% [row6-start] 0% [row7-start] 0% [row8-start] 0% [row9-start] 0% [row10-start] 0% [row11-start] 0% [row11-end]",
    },
  };

  const changeDisplayComp = (comp: string) => {
    if (!comp) return;
    setExpandingMainCard(true);
    dispayingCompState.set(comp);
  };

  return (
    <div className="min-w-screen w-screen h-screen flex flex-col items-center justify-start space-y-4 p-3 lock-orientation relative">
      <img
        src={boardImg}
        alt="board"
        className="w-full h-full object-cover absolute top-0 -z-10"
      />
      <div className="w-full h-[15%] flex flex-col items-center justify-center z-50">
        <img src={title} alt="title" className="w-full h-full object-contain" />
      </div>
      <motion.div
        initial={{
          transform: "scale(0)",
          gridTemplateColumns:
            "[col1-start] 20% [col2-start] 20% [col3-start] 20% [col4-start] 20% [col5-start] 20% [col5-end]",
          gridTemplateRows:
            "[row1-start] 9% [row2-start] 9% [row3-start] 9% [row4-start] 9% [row5-start] 9% [row6-start] 9% [row7-start] 9% [row8-start] 9% [row9-start] 9% [row10-start] 9% [row11-start] 9% [row11-end]",
        }}
        variants={variants}
        animate={expandMainCard ? "after" : "before"}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="w-full h-full  grid place-content-center p-0"
      >
        <div
          className="relative mobileVideoTrailer rounded-md overflow-hidden "
          onClick={() => setExpandingMainCard(true)}
        >
          {expandMainCard && (
            <div
              className="absolute w-8 h-8 bg-[black] top-5 right-5 "
              onClick={(e) => {
                e.stopPropagation();
                dispayingCompState.set("");
                setExpandingMainCard(false);
              }}
            ></div>
          )}
          {!dispayingCompState?.value ||
          dispayingCompState?.value == "video" ? (
            <Trailer pauseVideo={expandMainCard} />
          ) : (
            <MobileCardsWrapper />
          )}
        </div>
        <MobileContents func={changeDisplayComp} />
      </motion.div>
    </div>
  );
};

export default MobileHome;
