import React from "react";
import { motion } from "framer-motion";

import mail from "@/public/Images/mail.png";
import { useClickedComponent, useTrailerState } from "@/globalStates/states";
import { useHookstate } from "@hookstate/core";

const Mail = () => {
  const trailerState = useHookstate(useTrailerState());
  const clickedComponent = useHookstate(useClickedComponent());
  return (
    <motion.div
      onClick={() => {
        trailerState.set("trailerOpened");
        clickedComponent.set("mail");
      }}
      initial={{ width: 0, height: 0, top: "50%", left: "50%" }}
      animate={
        trailerState?.value != "trailerOpened"
          ? { width: "10%", height: "20%", top: "0", left: "90%" }
          : { width: "2%", height: "2%", top: "50%", left: "50%" }
      }
      transition={{ duration: 1, stiffness: 100, delay: 1, type: "spring" }}
      className="w-[10%] h-[20%] absolute top-0 left-full  p-2"
    >
      <motion.div
        initial={{ width: 0, height: 0 }}
        animate={
          trailerState?.value != "trailerOpened"
            ? { width: "522%", height: "4px" }
            : { width: 0, height: 0 }
        }
        transition={{ duration: 1, stiffness: 100, type: "spring", delay: 1 }}
        className="w-[512%] h-1 bg-[gray] -rotate-[25.5deg] top-[179px] right-0 absolute"
      ></motion.div>
      {/* {trailerState?.value != "trailerOpened" && (
        
      )} */}
      <img
        src={mail}
        alt="mail"
        className="absolute top-0 w-full h-full object-cover  hover:scale-125 transition-all cursor-pointer"
      />
    </motion.div>
  );
};

export default Mail;
