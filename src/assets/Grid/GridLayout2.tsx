import React from "react";
import auto from "@/public/Images/homepage/auto.png";
import blog from "@/public/Images/homepage/blog.png";

const GridLayout2 = () => {
  return (
    <div
      style={{
        gridTemplateColumns:
          "[col1-start] 9% [col2-start] 2% [col3-start] 9% [col4-start] 5% [col5-start] 5% [col6-start] 10% [col7-start] 17.5%[col8-start] 17.5% [col9-start] 5% [col10-start] 5% [col11-start] 5% [col12-start] 5% [col13-start] 5% [col14-start] 5%[col14-end]",
        gridTemplateRows:
          "[row1-start] 14% [row2-start] 5% [row3-start] 10% [row4-start] 18.5% [row5-start] 18.5% [row6-start] 9% [row7-start] 10%[row8-start] 5% [row9-start] 10% [row9-end]",
      }}
      className="w-full h-full grid place-content-center"
    >
      <div className="trailervideoContainer relative"></div>
      <div className="ricksaw relative">
        <div className="w-full h-full absolute -top-[10%] left-[2%] rotate-[20deg] flex items-end justify-end">
          <img src={auto} alt="auto" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="gridblog"></div>
      <div className="gridcontactus"></div>
      <div className="missing"></div>
      <div className="codepaper"></div>
      <div className="followus"></div>
      <div className="rightcodepaper"></div>
      <div className="gridmeetthecast"></div>
      <div className="gridcomic"></div>
    </div>
  );
};

export default GridLayout2;
