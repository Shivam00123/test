import React from "react";

const useGenerateIndex = (maxIndex: number) => {
  let classindex: number = 0;

  const generateCardIndex = () => {
    classindex += 1;
    console.log({ classindex });
    if (classindex > maxIndex) {
      classindex = 1;
      return classindex;
    }
    return classindex;
  };

  const resetIndex = () => {
    classindex = 0;
    return;
  };

  return {
    generateCardIndex,
    resetIndex,
  };
};

export default useGenerateIndex;
