import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

import BackButton from "../BackButton/BackButton";
import comicpageback from "@/public/Images/Comic/comicpageback.png";
import { objectType } from "@/Interface/object";
import useGenerateIndex from "@/hooks/use-generateIndex";

interface ComicPageProps {
  card?: objectType;
}

const ComicPage: React.FC<ComicPageProps> = ({ card }) => {
  console.log({ card });
  return (
    <div className="w-full h-full relative mt-5">
      <div className="w-full h-full absolute top-0">
        <img
          src={comicpageback}
          alt="comic-page"
          className="w-full h-full object-fill"
        />
      </div>
      <div className="absolute top-[5%] right-[5%] left-[5%] w-[87%] h-[85%] border-4 border-black">
        <img
          src={card?.page}
          alt="comicpage"
          className="w-full h-full object-fill"
        />
      </div>
    </div>
  );
};

interface Props {
  setOpenComic: (set: boolean) => void;
  data?: objectType;
}

const ComicPages: React.FC<Props> = ({ setOpenComic, data }) => {
  const IndexRef = useRef(useGenerateIndex(3));
  console.log({ useClickedId: data });
  const backToCollection = (set: boolean) => {
    setOpenComic(set);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
      style={{
        gridTemplateColumns:
          "[col1-start] 10% [col2-start] 12% [col3-start] 3% [col4-start] 50% [col5-start] 3% [col6-start] 12% [col7-start] 10% [col7-end]",
        gridTemplateRows:
          "[row1-start] 10% [row2-start] 80% [row3-start] 10% [row3-end]",
      }}
      className="w-full h-full grid place-content-center"
    >
      <div className="backbutton relative">
        <BackButton OnclickFunc={backToCollection} action={false} />
      </div>
      {data?.pages?.map((card: any) => (
        <div
          className={`comicpage${IndexRef.current.generateCardIndex()}in flex items-center justify-end`}
        >
          <div className="comicpagechild relative">
            <ComicPage card={card} />
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default ComicPages;
