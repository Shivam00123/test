import React from "react";
import { motion } from "framer-motion";
import cast from "@/public/Images/cast.jpg";
import { useHookstate } from "@hookstate/core";
import { useTrailerState } from "@/globalStates/states";

const MeetCast = () => {
  const trailerState = useHookstate(useTrailerState());
  return (
    <motion.div
      onClick={() => trailerState.set("trailerOpened")}
      initial={{ width: 0, height: 0, top: "50%", left: "50%" }}
      animate={
        trailerState?.value != "trailerOpened"
          ? { width: "20%", height: "20%", top: "50%", left: "79%" }
          : { width: "2%", height: "2%", top: "50%", left: "50%" }
      }
      transition={{ duration: 1, stiffness: 100, delay: 1, type: "spring" }}
      className="w-[20%] h-[20%] absolute top-1/2 -translate-y-1/2 left-[79%]"
    >
      <motion.div
        initial={{ width: 0, height: 0 }}
        animate={
          trailerState?.value != "trailerOpened"
            ? { width: "245%", height: "4px" }
            : { width: 0, height: 0 }
        }
        transition={{ duration: 1, stiffness: 100, type: "spring", delay: 1 }}
        className="w-[245%] h-1 bg-[gray] -rotate-[2deg] top-14 right-0 absolute"
      ></motion.div>
      <img
        src={cast}
        alt="cast"
        className="absolute top-0 w-full h-full object-cover  hover:scale-125 transition-all cursor-pointer"
      />
    </motion.div>
  );
};

export default MeetCast;
