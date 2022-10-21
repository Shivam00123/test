import React from "react";
import { motion } from "framer-motion";
import instagram from "@/public/Images/instagram.webp";
import { useTrailerState } from "@/globalStates/states";
import { useHookstate } from "@hookstate/core";

const Social = () => {
  const trailerState = useHookstate(useTrailerState());
  return (
    <motion.div
      onClick={() => trailerState.set("trailerOpened")}
      initial={{ width: 0, height: 0, top: "50%", left: "50%" }}
      animate={
        trailerState?.value != "trailerOpened"
          ? {
              width: "20%",
              height: "fit-content",
              top: "80%",
              left: "10px",
            }
          : {
              width: "2%",
              height: "2%",
              top: "50%",
              left: "50%",
            }
      }
      transition={{ duration: 1, stiffness: 100, delay: 1, type: "spring" }}
      className="w-[20%] h-[20%] absolute top-[90%] left-5"
    >
      <motion.div
        initial={{ width: 0, height: 0 }}
        animate={
          trailerState?.value != "trailerOpened"
            ? { width: "255%", height: "4px" }
            : { width: 0, height: 0 }
        }
        transition={{ duration: 1, stiffness: 100, type: "spring", delay: 1 }}
        className="w-[255%] h-1 bg-[gray] -rotate-[20deg] -top-20 left-0 absolute"
      ></motion.div>
      <img
        src={instagram}
        alt="play_button"
        className="absolute top-0 w-32 h-32 object-contain  hover:scale-125 transition-all cursor-pointer"
      />
    </motion.div>
  );
};

export default Social;
