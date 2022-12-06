import React from "react";
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

  const searchCastById = (id: string) => {
    let startPoint = 0;
    let endPoint = cast.length - 1;
    while (startPoint <= endPoint) {
      let midPoint = Math.floor((startPoint + endPoint) / 2);
      if (cast[midPoint].id < id) {
        startPoint = midPoint;
      } else if (cast[midPoint].id > id) {
        endPoint = midPoint;
      } else {
        // clickedId.set(cast[midPoint].id);
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
    castInfoArray.set(filteration);
    clickedId.set(clickedCard);
    return;
  };

  return {
    searchCastById,
    useCastInfoArray,
    useClickedId,
    filterCastArray,
  };
};

export default useGetCharcterInfo;
