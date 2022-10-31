import React, { useState } from "react";
import { motion } from "framer-motion";
import Trailer from "@/assets/Trailer/Trailer";
import { useHookstate } from "@hookstate/core";
import { useDisplayingComponent } from "@/globalStates/states";

const MobileHome = () => {
  const [videoPlaying, setVideoPlaying] = useState<boolean>(false);
  const dispayingCompState = useHookstate(useDisplayingComponent());

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

  return (
    <div className="min-w-screen w-screen h-screen bg-[pink] flex flex-col items-center justify-start space-y-4 p-3 lock-orientation ">
      <div className="w-full h-fit flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl">Detective</h1>
        <h2 className="font-bold text-2xl">Dotson</h2>
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
        animate={videoPlaying ? "after" : "before"}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="w-full h-full  grid place-content-center p-0"
      >
        <div
          className="relative mobileVideoTrailer rounded-md overflow-hidden "
          onClick={() => setVideoPlaying(true)}
        >
          {videoPlaying && (
            <div
              className="absolute w-8 h-8 bg-[black] top-5 right-5 z-50"
              onClick={(e) => {
                e.stopPropagation();
                setVideoPlaying(false);
              }}
            ></div>
          )}
          <Trailer pauseVideo={videoPlaying} />
        </div>
        <div className="thread1 relative ">
          <div className="middleString w-[1.5px] bg-[black] h-1/4 absolute top-0 left-1/2"></div>
          <div className="leftString w-[1.5px] bg-[black] h-5/6 absolute top-0 left-[10%] -skew-x-[5deg]"></div>
          <div className="rightString w-[1.5px] bg-[black] h-5/6 absolute top-0 left-[90%] skew-x-[5deg]"></div>
          <div className="middleToLeftString w-[1.5px] bg-[black] h-1/4 absolute top-[10%] left-1/3 -skew-x-[30deg]"></div>
          <div className="middleToRightString w-[1.5px] bg-[black] h-1/3 absolute top-1/4 right-[45%] skew-x-[10deg]"></div>
        </div>
        <div className="comp relative">
          <div className="absolute top-0 w-4/5 h-full bg-[yellow] left-1/2 -translate-x-1/2"></div>
        </div>
        <div className="comp2 relative">
          <div className="absolute top-0 w-4/5 h-full bg-[aqua] left-1/2 -translate-x-1/2 rotate-6"></div>
        </div>
        <div className="comp3 relative">
          <div className="absolute top-0 w-4/5 h-full bg-[aqua] left-1/2 -translate-x-1/2  -rotate-3"></div>
        </div>
        <div className="thread2 relative">
          <div className="absolute h-full w-[1.5px] bg-[black] left-1/4 -skew-x-[30deg]"></div>
        </div>
        <div className="comp4 relative">
          <div className="absolute top-0 w-4/5 h-full bg-[green] left-1/2 -translate-x-1/2  -rotate-6"></div>
        </div>
        <div className="thread3 relative">
          <div className="absolute h-full w-[2.5px] bg-[black] top-1/5 left-[40%] -skew-x-[57deg]"></div>
        </div>
        <div className="comp5 relative">
          <div className="absolute top-0 w-4/5 h-full bg-[lemonchiffon] left-0 rotate-3"></div>
        </div>
        <div className="comp6 relative">
          <div className="absolute top-0 w-full h-full bg-[lemonchiffon] right-0 -rotate-6"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileHome;
