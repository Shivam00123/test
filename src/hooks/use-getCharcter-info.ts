import React, { useState as ReactState, useMemo } from "react";

import { createState, useState } from "@hookstate/core";
import { objectType } from "@/Interface/object";

const filteredcastInfoArray = createState<objectType[]>([]);
const clickedId = createState<objectType>({});

const useGetCharcterInfo = (
  cast: objectType[],
  maxDisplayingCards: number = 3
) => {
  const useCastInfoArray = useState<objectType[]>(filteredcastInfoArray);
  const useClickedId = useState<objectType>(clickedId);
  const [restartPoint, setRestartPoint] = ReactState<number>(0);
  const [startPoint, setStartPoint] = ReactState<number>(0);
  const [displayingCards, setDisplayingCards] = ReactState<objectType[]>([]);

  useMemo(() => {
    let array = cast.slice(startPoint, startPoint + maxDisplayingCards);
    if (array.length >= maxDisplayingCards) {
      setDisplayingCards(array);
    } else {
      setRestartPoint(maxDisplayingCards - array.length);
      let leftoutArray = cast.slice(0, maxDisplayingCards - array.length);
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
      if (currentElement < Id) {
        startPoint = midPoint + 1;
      } else if (currentElement > Id) {
        endPoint = midPoint - 1;
      } else {
        return cast[midPoint];
      }
    }

    return;
  };

  const filterCastArray = (id: string) => {
    let clickedCard = searchCastById(id);
    if (!clickedCard) return;
    let filteration = cast.filter(
      (character) => character.id != clickedCard?.id
    );
    filteredcastInfoArray.set(filteration);
    clickedId.set(clickedCard);
    return;
  };

  const changeDisplayingCards = (move: string) => {
    if (move === "next") {
      if (restartPoint) {
        setStartPoint(restartPoint);
      } else {
        setStartPoint(startPoint + maxDisplayingCards);
      }
    } else {
      if (startPoint >= maxDisplayingCards) {
        setStartPoint(startPoint - maxDisplayingCards);
      } else {
        setStartPoint(cast.length - (maxDisplayingCards - startPoint));
      }
    }
    setRestartPoint(0);
  };

  const getCharacterInfo = (id: string) => {
    if (!id) return;
    filterCastArray(id);
  };

  const resetState = () => {
    filteredcastInfoArray.set(cast);
    return;
  };

  return {
    searchCastById,
    useCastInfoArray,
    useClickedId,
    filterCastArray,
    getCharacterInfo,
    changeDisplayingCards,
    displayingCards,
    resetState,
  };
};

export default useGetCharcterInfo;