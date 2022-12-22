import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import titleback from "@/public/Images/homepage/titleback.png";
import title from "@/public/Images/homepage/title.png";
import {
  setContentStartingText,
  useDisplayingComponent,
} from "@/globalStates/states";
import { objectType } from "@/Interface/object";
import { useHookstate } from "@hookstate/core";
import Trailer from "../Trailer/Trailer";
import CardsWrapper from "../CardsWrapper/CardsWrapper";
import Content from "../HomeContents/Content";

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
        "[col1-start] 0% [col2-start] 0% [col3-start] 0% [col4-start] 0% [col5-start] 0% [col6-start] 0% [col7-start] 18%[col8-start] 18% [col9-start] 0% [col10-start] 0% [col11-start] 0% [col12-start] 0% [col13-start] 0% [col14-start] 0%[col14-end]",
      gridTemplateRows:
        "[row1-start] 0% [row2-start] 0% [row3-start] 0% [row4-start] 21% [row5-start] 21% [row6-start] 0% [row7-start] 0%[row8-start] 0% [row9-start] 0% [row9-end]",
    },
    after: {
      transform: "scale(1)",
      opacity: opacityNumber,
      gridTemplateColumns:
        "[col1-start] 8% [col2-start] 2% [col3-start] 8% [col4-start] 2% [col5-start] 2% [col6-start] 10% [col7-start] 18%[col8-start] 18% [col9-start] 7% [col10-start] 5% [col11-start] 5% [col12-start] 5% [col13-start] 5% [col14-start] 5%[col14-end]",
      gridTemplateRows:
        "[row1-start] 7% [row2-start] 12% [row3-start] 10% [row4-start] 21% [row5-start] 21% [row6-start] 9% [row7-start] 10%[row8-start] 5% [row9-start] 5% [row9-end]",
    },
    expandfull: {
      transform: "scale(1)",
      opacity: opacityNumber,
      gridTemplateColumns:
        "[col1-start] 0% [col2-start] 0% [col3-start] 0% [col4-start] 0% [col5-start] 0% [col6-start] 0% [col7-start] 50%[col8-start] 50% [col9-start] 0% [col10-start] 0% [col11-start] 0% [col12-start] 0% [col13-start] 0% [col14-start] 0%[col14-end]",
      gridTemplateRows:
        "[row1-start] 0% [row2-start] 0% [row3-start] 0% [row4-start] 50% [row5-start] 50% [row6-start] 0% [row7-start] 0%[row8-start] 0% [row9-start] 0% [row9-end]",
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
        gridTemplateColumns:
          "[col1-start] 0% [col2-start] 0% [col3-start] 0% [col4-start] 0% [col5-start] 0% [col6-start] 0% [col7-start] 18%[col8-start] 18% [col9-start] 0% [col10-start] 0% [col11-start] 0% [col12-start] 0% [col13-start] 0% [col14-start] 0%[col14-end]",
        gridTemplateRows:
          "[row1-start] 0% [row2-start] 0% [row3-start] 0% [row4-start] 21% [row5-start] 21% [row6-start] 0% [row7-start] 0%[row8-start] 0% [row9-start] 0% [row9-end]",
      }}
      variants={variants}
      animate={
        !showCards && !isMountingState
          ? "expandfull"
          : expandCards
          ? "after"
          : "before"
      }
      transition={{ duration: 3, type: "spring", stiffness: 100 }}
      className="w-full h-full grid place-content-center"
    >
      <div className="gridtitleBox relative">
        <div className="w-full h-[70%] relative flex items-center justify-center">
          <div className="absolute top-0 w-full h-full">
            <img
              src={titleback}
              alt="auto"
              className="w-full h-full object-fill"
            />
          </div>
          <div className="w-[80%] h-[80%] absolute top-0 left-1/2 -translate-x-1/2">
            <img src={title} alt="auto" className="w-full h-full object-fill" />
          </div>
        </div>
      </div>
      <motion.div className="trailervideoContainer relative">
        {!dispayingCompState?.value || dispayingCompState?.value == "video" ? (
          <Trailer />
        ) : (
          <CardsWrapper />
        )}
      </motion.div>
      {showCards && <Content func={switchComponentTo} />}
    </motion.div>
  );
};

export default GridLayout;
