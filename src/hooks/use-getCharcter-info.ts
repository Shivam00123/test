import React, { useState as ReactState, useMemo } from "react";
import { objectType } from "@/Interface/object";
import { createState, useState } from "@hookstate/core";
import { cast } from "@/data/cast";

const initialState: objectType = {
  id: null,
  name: "",
  img: "",
  gif: "",
  date: "",
  desc: "",
};

const castInfoArray = createState<objectType[]>([initialState]);
const clickedId = createState<objectType>({});

const useGetCharcterInfo = () => {
  const useCastInfoArray = useState<objectType[]>(castInfoArray);
  const useClickedId = useState<objectType>(clickedId);
  const [restartPoint, setRestartPoint] = ReactState<number>(0);
  const [startPoint, setStartPoint] = ReactState<number>(0);
  const [displayingCards, setDisplayingCards] = ReactState<objectType[]>([]);

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

  const searchCastById = (id: string) => {
    let Id = parseInt(id);
    let startPoint = 0;
    let endPoint = cast.length - 1;
    while (startPoint <= endPoint) {
      let midPoint = Math.floor((startPoint + endPoint) / 2);
      const currentElement = parseInt(cast[midPoint].id);
      console.log(currentElement < Id);
      if (currentElement < Id) {
        startPoint = midPoint + 1;
      } else if (currentElement > Id) {
        endPoint = midPoint - 1;
      } else {
        // clickedId.set(cast[midPoint].id);
        return cast[midPoint];
      }
    }
    console.log("return");
    return;
  };

  const filterCastArray = (id: string) => {
    console.log("filter", id);
    let clickedCard = searchCastById(id);
    console.log({ clickedCard: clickedCard });
    if (!clickedCard) return;
    let filteration = cast.filter(
      (character) => character.id != clickedCard?.id
    );
    castInfoArray.set(filteration);
    clickedId.set(clickedCard);
    return;
  };

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
    // setShowCardsInfo(true);
  };

  return {
    searchCastById,
    useCastInfoArray,
    useClickedId,
    filterCastArray,
    getCharacterInfo,
    changeDisplayingCards,
    displayingCards,
  };
};

export default useGetCharcterInfo;
