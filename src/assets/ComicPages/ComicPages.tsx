import React from "react";
import BackButton from "../BackButton/BackButton";
import comicpageback from "@/public/Images/Comic/comicpageback.png";

const ComicPage = () => {
  return (
    <div className="w-full h-full relative mt-5">
      <div className="w-full h-full absolute top-0">
        <img
          src={comicpageback}
          alt="comic-page"
          className="w-full h-full object-fill"
        />
      </div>
      <div className="absolute top-[5%] right-[5%] left-[5%] w-[87%] h-[85%] border-4 border-black"></div>
    </div>
  );
};

const ComicPages = () => {
  return (
    <div
      style={{
        gridTemplateColumns:
          "[col1-start] 10% [col2-start] 12% [col3-start] 3% [col4-start] 50% [col5-start] 3% [col6-start] 12% [col7-start] 10% [col7-end]",
        gridTemplateRows:
          "[row1-start] 10% [row2-start] 80% [row3-start] 10% [row3-end]",
      }}
      className="w-full h-full grid place-content-center"
    >
      <div className="backbutton relative">
        <BackButton />
      </div>
      <div className="comicfirstpage flex items-center justify-end">
        <div className="w-[90%] h-2/3 relative -rotate-3">
          <ComicPage />
        </div>
      </div>
      <div className="comiccenterpage flex items-center justify-start ">
        <ComicPage />
      </div>
      <div className="comicthirdpage flex items-center justify-start relative">
        <div className="w-[90%] h-2/3 relative rotate-6">
          <ComicPage />
        </div>
      </div>
    </div>
  );
};

export default ComicPages;
