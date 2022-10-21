import React from "react";
import { motion } from "framer-motion";
import googleplaybutton from "@/public/Images/playstorebtn.png";
import { useHookstate } from "@hookstate/core";
import { useTrailerState } from "@/globalStates/states";

const GooglePlayButton = () => {
  const trailerState = useHookstate(useTrailerState());
  return (
    <motion.div
      onClick={() => trailerState.set("trailerOpened")}
      initial={{
        width: 0,
        height: 0,
        top: "50%",
        left: "50%",
      }}
      animate={
        trailerState?.value != "trailerOpened"
          ? {
              width: "20%",
              height: "fit-content",
              top: "84%",
              left: "41%",
            }
          : {
              width: "2%",
              height: "2%",
              top: "50%",
              left: "50%",
            }
      }
      transition={{ duration: 1, stiffness: 100, delay: 1, type: "spring" }}
      className="w-[20%] h-[20%] absolute top-[94%] left-[41%]"
    >
      <motion.div
        initial={{ width: 0, height: 0 }}
        animate={
          trailerState?.value != "trailerOpened"
            ? { width: "80%", height: "4px" }
            : { width: 0, height: 0 }
        }
        transition={{ duration: 1, stiffness: 100, type: "spring", delay: 1 }}
        className="w-full h-1 bg-[gray] rotate-90  -top-24 left-8 absolute"
      ></motion.div>
      <img
        src={googleplaybutton}
        alt="play_button"
        className="absolute top-0 w-full h-20  object-contain  hover:scale-125 transition-all cursor-pointer"
      />
    </motion.div>
  );
};

export default GooglePlayButton;
