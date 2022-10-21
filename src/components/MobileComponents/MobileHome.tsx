import React, { useState } from "react";
import { motion } from "framer-motion";
import Trailer from "@/assets/Trailer/Trailer";

const MobileHome = () => {
  const [videoPlaying, setVideoPlaying] = useState<boolean>(false);

  const variants = {
    before: {
      transform: "scale(1)",
      gridTemplateColumns:
        "[col1-start] 20% [col2-start] 20% [col3-start] 20% [col4-start] 20% [col5-start] 20% [col5-end]",
      gridTemplateRows:
        "[row1-start] 12% [row2-start] 12% [row3-start] 12% [row4-start] 12% [row5-start] 12% [row6-start] 12% [row7-start] 12% [row8-start] 12% [row8-end]",
    },
    after: {
      transform: "scale(1)",
      gridTemplateColumns:
        "[col1-start] 20% [col2-start] 20% [col3-start] 20% [col4-start] 20% [col5-start] 20% [col5-end]",
      gridTemplateRows:
        "[row1-start] 33% [row2-start] 33% [row3-start] 33% [row4-start] 0% [row5-start] 0% [row6-start] 0% [row7-start] 0% [row8-start] 0% [row8-end]",
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
            "[row1-start] 12% [row2-start] 12% [row3-start] 12% [row4-start] 12% [row5-start] 12% [row6-start] 12% [row7-start] 12% [row8-start] 12% [row8-end]",
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

        <>
          <div className="thread1 relative">
            <div className="w-[1px] bg-[black] h-full absolute top-0 left-1/2"></div>
            <div className="w-[1.5px] bg-[black] h-full absolute top-0 left-[10%]"></div>
            <div className="w-[1.5px] bg-[black] h-full absolute top-0 left-[90%]"></div>
          </div>
          <div className="thread2 relative">
            <div className="w-[1.5px] bg-[black] h-full absolute top-0 left-1/2"></div>
          </div>
          <div className="thread3 relative">
            <div className="w-[1.5px] bg-[black] h-full absolute top-0 left-1/2"></div>
          </div>
          <div className="comp"></div>
          <div className="thread4 relative">
            <div className="absolute h-full w-[1px] bg-[black] top-0 left-1/2"></div>
          </div>
          <div className="comp2"></div>
          <div className="comp3"></div>
          <div className="thread5 relative">
            <div className="h-full w-[1.5px] bg-[black] absolute top-0 left-1/2"></div>
          </div>
          <div className="comp4"></div>
          <div className="thread6 relative">
            <div className="h-full w-[1.5px] bg-[black] absolute top-0 left-1/2"></div>
          </div>
          <div className="comp5"></div>
          <div className="comp6"></div>
        </>
      </motion.div>
    </div>
  );
};

export default MobileHome;
