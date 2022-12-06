import React, { useState, useMemo, memo } from "react";

import Cards from "./Cards";
import { objectType } from "@/Interface/object";
import { cast } from "@/data/cast";
import useGetCharcterInfo from "@/hooks/use-getCharcter-info";

const CardsContainer = () => {
  const [startPoint, setStartPoint] = useState<number>(0);
  const [displayingCards, setDisplayingCards] = useState<objectType[]>([]);
  const [restartPoint, setRestartPoint] = useState<number>(0);
  const { filterCastArray, useClickedId } = useGetCharcterInfo();

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
      if (startPoint >= 3) {
        setStartPoint(startPoint - 3);
      } else {
        setStartPoint(cast.length - (3 - startPoint));
      }
    }
    setRestartPoint(0);
  };

  const getCharacterInfo = (id: string) => {
    if (!id) return;
    filterCastArray(id);
  };
  return (
    <div className="w-full h-[40%]  relative -translate-y-[25%]">
      <>
        {displayingCards.map((character) => (
          <Cards
            key={character?.id}
            classname="absolute"
            data={character}
            func={getCharacterInfo}
          />
        ))}

        <Cards
          classname="absolute top-[70%] left-[4%] -rotate-12 z-50"
          placeholderText="prev"
          func={changeDisplayingCards}
        />
        <Cards classname="absolute top-[70%] left-[4%] -rotate-[2deg] -z-20" />

        <Cards
          classname="absolute top-[70%] left-[83%] rotate-12 z-50"
          placeholderText="next"
          func={changeDisplayingCards}
        />
        <Cards classname="absolute top-[70%] left-[83%] rotate-[20deg] -z-20" />
      </>
    </div>
  );
};

export default CardsContainer;
