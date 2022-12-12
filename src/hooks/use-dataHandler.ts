import { objectType } from "@/Interface/object";
import { createState, useState } from "@hookstate/core";
import React, { useEffect } from "react";

const data = createState<objectType[]>([]);

const usedataHandler = (incomingData: objectType[]) => {
  const useData = useState<objectType[]>(data);

  useEffect(() => {
    console.log({ incomingData });
    if (incomingData.length) {
      data.set(incomingData);
    }
  }, [incomingData]);

  const getData = () => {
    return useData?.value;
  };

  return {
    getData,
  };
};

export default usedataHandler;
