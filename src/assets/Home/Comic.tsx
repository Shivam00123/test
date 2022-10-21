import React from "react";
import { motion } from "framer-motion";
import comic from "@/public/Images/comic.webp";
import { useHookstate } from "@hookstate/core";
import { useTrailerState } from "@/globalStates/states";

const Comic = () => {
  const trailerState = useHookstate(useTrailerState());
  return (
    <motion.div
      onClick={() => trailerState.set("trailerOpened")}
      initial={{ width: 0, height: 0, top: "50%", left: "50%" }}
      animate={
        trailerState?.value != "trailerOpened"
          ? {
              width: "12%",
              height: "26%",
              top: "72%",
              left: "87%",
            }
          : {
              width: "2%",
              height: "2%",
              top: "50%",
              left: "50%",
            }
      }
      transition={{ duration: 1, stiffness: 100, delay: 1, type: "spring" }}
      className="w-[10%] h-[20%] absolute top-[48%] left-[45%]"
    >
      <motion.div
        initial={{ width: 0, height: 0 }}
        animate={
          trailerState?.value != "trailerOpened"
            ? { width: "395%", height: "4px" }
            : { width: 0, height: 0 }
        }
        transition={{ duration: 1, stiffness: 100, type: "spring", delay: 1 }}
        className="w-[395%] h-1 bg-[gray] rotate-[18.5deg]  -top-10 right-10 absolute"
      ></motion.div>
      <img
        src={comic}
        alt="comic"
        className="absolute top-0 w-full h-full object-cover  hover:scale-125 transition-all cursor-pointer"
      />
    </motion.div>
  );
};

export default Comic;
