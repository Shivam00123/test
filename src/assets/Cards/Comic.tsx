import React from "react";
import BackButton from "../BackButton/BackButton";
import Title from "../Title/Title";
import background from "@/public/Images/Comic/background.png";
import horizontalRope from "@/public/Images/ropehorizontal.png";
import ColoredPins from "../ColoredPins/ColoredPins";

const Comic = () => {
  return (
    <div
      style={{
        gridTemplateColumns:
          "[col1-start] 10% [col2-start] 16% [col3-start] 18% [col4-start] 23% [col5-start] 15% [col6-start] 20% [col6-end]",
        gridTemplateRows:
          "[row1-start] 10% [row2-start] 10% [row3-start] 30% [row4-start] 30% [row5-start] 10% [row6-start] 10% [row6-end]",
      }}
      className="w-full h-full grid place-content-center"
    >
      <div className="backbutton relative">
        <BackButton />
      </div>
      <div className="comictitle relative p-1">
        <div className="w-[90%] h-[90%] rotate-1 absolute bottom-0 z-50">
          <Title title="Dot city comic reader" />
        </div>
      </div>
      <div className="comicsubtitle relative">
        <div className="w-3/4 h-[90%] -rotate-1 absolute -bottom-2 right-0 ">
          <Title title="select a Story" />
        </div>
      </div>
      <div className="comicPages flex items-center justify-center">
        <div className="comicCard w-1/3 h-[97%] relative">
          <div className="absolute top-0 w-full h-full">
            <img
              src={background}
              alt="background"
              className="w-full h-full object-fill"
            />
          </div>
          <div className="w-[92%] h-[10%] absolute top-[5%] left-1/2 -translate-x-1/2 flex flex-col items-center justify-between">
            <h1 className="text-3xl font-bold">DotCity Comics</h1>
            <div className="w-[90%] h-[10%] flex items-center justify-end text-xl font-bold">
              2nd Issue
            </div>
          </div>
          <h1 className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xl font-bold">
            Let's try English
          </h1>
        </div>
        <div className="comicCard w-1/3 h-[98%] relative">
          <div className="absolute top-0 w-full h-full">
            <img
              src={background}
              alt="background"
              className="w-full h-full object-fill"
            />
          </div>
          <div className="w-[92%] h-[10%] absolute top-[5%] left-1/2 -translate-x-1/2 flex flex-col items-center justify-between">
            <h1 className="text-3xl font-bold">DotCity Comics</h1>
            <div className="w-[90%] h-[10%] flex items-center justify-end text-xl font-bold">
              2nd Issue
            </div>
          </div>
          <h1 className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xl font-bold">
            Let's try English
          </h1>
        </div>
        <div className="comicCard w-1/3 h-[97%] relative">
          <div className="absolute top-0 w-full h-full">
            <img
              src={background}
              alt="background"
              className="w-full h-full object-fill"
            />
          </div>
          <div className="w-[92%] h-[10%] absolute top-[5%] left-1/2 -translate-x-1/2 flex flex-col items-center justify-between">
            <h1 className="text-3xl font-bold">DotCity Comics</h1>
            <div className="w-[90%] h-[10%] flex items-center justify-end text-xl font-bold">
              2nd Issue
            </div>
          </div>
          <h1 className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xl font-bold">
            Let's try English
          </h1>
        </div>
      </div>
      <div className="titleToComicOneCard relative">
        <div className="titleToComicOneCardRope absolute w-full h-[5px] bg-black">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-fill"
          />
          <ColoredPins pin="purple" classname="top-0 z-50" />
        </div>
      </div>
      <div className="titleToComicOneCard relative z-50">
        <div className="titleToComicOneCardRope absolute w-full h-[5px]">
          <ColoredPins pin="purple" classname="-top-full -left-[2%]" />
        </div>
      </div>
      <div className="CardOneToBottom relative">
        <div className="CardOneToBottomRope absolute w-full h-[5px] bg-black">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Comic;
