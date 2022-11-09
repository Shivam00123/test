import React from "react";
import { motion } from "framer-motion";

import horizontalRope from "@/public/Images/ropehorizontal.png";
import { objectType } from "@/Interface/object";

const GridLayout = () => {
  const variants: objectType = {
    before: {
      transform: "scale(1)",
      gridTemplateColumns:
        "[col1-start] 0% [col2-start] 0% [col3-start] 35% [col4-start] 0% [col5-start] 0% [col5-end]",
      gridTemplateRows:
        "[row1-start] 0% [row2-start] 0% [row3-start] 35% [row4-start] 0% [row5-start] 0% [row5-end]",
    },
    after: {
      transform: "scale(1)",
      gridTemplateColumns:
        "[col1-start] 16% [col2-start] 16% [col3-start] 35% [col4-start] 16% [col5-start] 16% [col5-end]",
      gridTemplateRows:
        "[row1-start] 16% [row2-start] 16% [row3-start] 35% [row4-start] 16% [row5-start] 16% [row5-end]",
    },
    expandfull: {
      transform: "scale(1)",
      gridTemplateColumns:
        "[col1-start] 0% [col2-start] 0% [col3-start] 100% [col4-start] 0% [col5-start] 0% [col5-end]",
      gridTemplateRows:
        "[row1-start] 0% [row2-start] 0% [row3-start] 100% [row4-start] 0% [row5-start] 0% [row5-end]",
    },
  };

  return (
    <motion.div
      initial={{
        transform: "scale(0)",
        gridTemplateColumns:
          "[col1-start] 0% [col2-start] 0% [col3-start] 35% [col4-start] 0% [col5-start] 0% [col5-end]",
        gridTemplateRows:
          "[row1-start] 0% [row2-start] 0% [row3-start] 35% [row4-start] 0% [row5-start] 0% [row5-end]",
      }}
      variants={variants}
      animate={"after"}
      transition={{ duration: 2, type: "spring", stiffness: 100 }}
      className="w-full h-full grid  place-content-center"
    >
      <motion.div className="trailervideo bg-[red] relative"></motion.div>{" "}
      <div className="blog z-50 relative">
        <div className="w-full h-full bg-[antiquewhite] absolute top-10 -right-1/4 rotate-12"></div>
      </div>
      <div className="line1 h-[5px] w-full relative overflow-hidden">
        <img
          src={horizontalRope}
          alt="rope"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mail relative z-50">
        <div className="w-1/2 h-full bg-[yellow] absolute top-16 -left-10 -rotate-12 cursor-pointer"></div>
      </div>
      <div className="line2 h-[5px] w-full  relative overflow-hidden">
        <img
          src={horizontalRope}
          alt="rope"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="meet relative z-50">
        <div className="w-full h-full bg-[white] absolute top-0 -left-5 rotate-6 cursor-pointer"></div>
      </div>
      <div className="line3 h-[5px] w-full  relative overflow-hidden">
        <img
          src={horizontalRope}
          alt="rope"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="blogcomic relative z-50">
        <div className="w-2/3 h-full bg-[green] absolute -top-6 right-[20%]  -rotate-6 cursor-pointer"></div>
      </div>
      <div className="line4 h-[5px] w-full relative overflow-hidden">
        <img
          src={horizontalRope}
          alt="rope"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="instagram relative  z-50">
        <div className="w-full h-full bg-[red] absolute -top-5 -right-1/4 -rotate-12  cursor-pointer "></div>
      </div>
      <div className="line6 h-[5px] w-full  relative overflow-hidden">
        <img
          src={horizontalRope}
          alt="rope"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default GridLayout;
