import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useHookstate } from "@hookstate/core";
import { useClickedComponent, useTrailerState } from "@/globalStates/states";
import video from "@/public/videos/dummy.mp4";
import Wrapper from "../TrailerComp/Wrapper";

const TrailerComp = () => {
  const trailerState = useHookstate(useTrailerState());
  const clickedComponent = useHookstate(useClickedComponent());

  const trailerStateMemo = useMemo(() => {
    switch (trailerState?.value) {
      case "starting":
        return {
          width: "40%",
          height: "40%",
          transition: {
            duration: 0.3,
            stiffness: 80,
            type: "spring",
          },
        };
      case "trailerOpened":
        return {
          transform: "rotateY(180deg)",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          transition: {
            duration: 1,
            stiffness: 80,

            delay: 2,
          },
        };

      case "trailerClosed":
        return {
          transform: "rotateY(0deg)",
          width: "40%",
          height: "40%",
          top: "30%",
          left: "30%",

          transition: {
            duration: 1,
            stiffness: 100,
          },
        };
      default:
        return;
    }
  }, [trailerState?.value]);

  const changeState = () => {
    if (trailerState?.value === "trailerOpened") {
      trailerState?.set("trailerClosed");
    } else {
      trailerState?.set("trailerOpened");
    }
  };

  return (
    <motion.div
      initial={{ width: 0, height: 0 }}
      animate={trailerStateMemo}
      className="w-1/3 h-1/4 bg-[gray] rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] hover:scale-125 transition-all cursor-pointer"
      onClick={() => changeState()}
    >
      <div className="w-full h-full relative card z-30">
        <div className="absolute top-0 w-full h-full videoContainer z-30">
          <video
            controls
            src={video}
            style={{
              transform:
                trailerState?.value === "trailerOpened"
                  ? "rotateY(180deg)"
                  : "",
            }}
            className="absolute top-0 w-full h-full object-cover z-50"
          ></video>
        </div>
        {clickedComponent?.value === "mail" && <Wrapper />}
      </div>
    </motion.div>
  );
};

export default TrailerComp;
