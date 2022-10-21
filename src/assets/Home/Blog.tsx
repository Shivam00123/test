import React from "react";
import { motion } from "framer-motion";
import blog from "@/public/Images/blog.jpg";
import { useHookstate } from "@hookstate/core";
import { useTrailerState } from "@/globalStates/states";

const Blog = () => {
  const trailerState = useHookstate(useTrailerState());
  return (
    <motion.div
      onClick={() => trailerState.set("trailerOpened")}
      layout
      initial={{ width: 0, height: 0, top: "50%", left: "50%" }}
      animate={
        trailerState?.value != "trailerOpened"
          ? {
              width: "15%",
              height: "45%",
              top: "0px",
              left: "0px",
            }
          : {
              width: "2%",
              height: "2%",
              top: "50%",
              left: "50%",
            }
      }
      transition={{ duration: 1, stiffness: 100, delay: 1, type: "spring" }}
      className="w-20 h-20  absolute left-5 top-5 bg-[red] z-30"
    >
      <motion.div
        initial={{ width: 0, height: 0 }}
        animate={
          trailerState?.value != "trailerOpened"
            ? { width: "350%", height: "4px" }
            : { width: 0, height: 0 }
        }
        transition={{ duration: 1, stiffness: 100, type: "spring", delay: 1 }}
        className="w-[355%] h-1 bg-[gray] rotate-[26deg] top-44 left-0 absolute"
      ></motion.div>
      {/* <div className="absolute top-0 h-full w-1 bg-[gray] -rotate-45"></div> */}
      <img
        src={blog}
        alt="comic"
        className="absolute top-0 w-full h-full object-cover hover:scale-125 transition-all cursor-pointer"
      />
    </motion.div>
  );
};

export default Blog;
