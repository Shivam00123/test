import React, { useState as ReactState, useMemo, useEffect } from "react";
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

const filteredcastInfoArray = createState<objectType[]>(cast);
const clickedId = createState<objectType>({});

const useGetCharcterInfo = () => {
  const useCastInfoArray = useState<objectType[]>(filteredcastInfoArray);
  const useClickedId = useState<objectType>(clickedId);
  const [restartPoint, setRestartPoint] = ReactState<number>(0);
  const [startPoint, setStartPoint] = ReactState<number>(0);
  const [displayingCards, setDisplayingCards] = ReactState<objectType[]>([]);

  useMemo(() => {
    let array = useCastInfoArray?.value.slice(startPoint, startPoint + 3);
    if (array.length >= 3) {
      setDisplayingCards(array);
    } else {
      setRestartPoint(3 - array.length);
      let leftoutArray = useCastInfoArray?.value.slice(0, 3 - array.length);
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

  const resetState = () => {
    filteredcastInfoArray.set(cast);
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
