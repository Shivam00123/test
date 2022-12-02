import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { objectType } from "@/Interface/object";

import { cast } from "@/data/cast";

interface Props {
  classname?: string;
  data?: any;
  func?: any;
}

const Cards: React.FC<Props> = ({ classname, data, func }) => {
  return (
    <div
      onClick={() => func()}
      className={`cardContainer w-[13.5%] min-w-[200px] h-full border border-border rounded-3xl flex flex-col items-center justify-between p-2 bg-brown ${classname}`}
    >
      <div className="w-full h-[80%] bg-white rounded-3xl"></div>
      <h1 className="text-border font-semibold text-lg">
        {data?.name || "more"}
      </h1>
    </div>
  );
};

const MeetTheCast = () => {
  const [startPoint, setStartPoint] = useState<number>(0);
  const [displayingCards, setDisplayingCards] = useState<objectType[]>([]);
  const [restartPoint, setRestartPoint] = useState<number>(0);

  useMemo(() => {
    let array = cast.slice(startPoint, startPoint + 3);
    if (array.length >= 3) {
      setDisplayingCards(array);
    } else {
      setRestartPoint(3 - array.length);
      let leftoutArray = cast.slice(0, 3 - array.length);
      setDisplayingCards(array.concat(leftoutArray));
    }
  }, [startPoint]);

  const changeDisplayingCards = (move: string) => {
    if (move === "next") {
      if (restartPoint) {
        setStartPoint(restartPoint);
      } else {
        setStartPoint(startPoint + 3);
      }
    } else {
      console.log({ startPoint });
      if (startPoint >= 3) {
        setStartPoint(startPoint - 3);
      } else {
        setStartPoint(cast.length - (3 - startPoint));
      }
    }
    setRestartPoint(0);
  };

  return (
    <div className="w-full h-full bg-black grid place-items-center">
      <div className="absolute top-0 w-full h-[10%] flex items-center justify-start p-3">
        <button className="px-5 py-2 border border-border text-border text-lg rounded-xl">
          back
        </button>
        <h1 className="text-border text-6xl font-normal ml-10">
          Meet the cast
        </h1>
      </div>
      <div className="w-full h-[40%]  relative -translate-y-[25%]">
        <>
          {displayingCards.map((character) => (
            <Cards classname="absolute" data={character} />
          ))}
          <Cards classname="absolute top-[70%] left-[4%] -rotate-12 z-50" />
          <Cards classname="absolute top-[70%] left-[4%] -rotate-[2deg] -z-20" />
          <Cards classname="absolute top-[70%] left-[83%] rotate-12 z-50" />
          <Cards classname="absolute top-[70%] left-[83%] rotate-[20deg] -z-20" />
        </>
      </div>
      <button
        className="bg-white p-5 absolute bottom-0"
        onClick={() => changeDisplayingCards("next")}
      >
        next
      </button>
    </div>
  );
};

export default MeetTheCast;
