import React, { useRef, useState, useEffect } from "react";
import morevidholder from "@/public/Images/for website/blogstuff/morevidholder.png";
import { objectType } from "@/Interface/object";
import useGenerateIndex from "@/hooks/use-generateIndex";
import ColoredPins from "../ColoredPins/ColoredPins";

interface Cardsprops {
  item: objectType;
  changeCard: (id: string | number) => void;
  pinIndex?: number | string;
}

const Cards: React.FC<Cardsprops> = ({ item, changeCard, pinIndex }) => {
  const [pinColor, setPinColor] = useState<string>("");

  useEffect(() => {
    if (pinIndex === 1 || pinIndex === 3) {
      setPinColor("yellow");
    } else if (pinIndex === 2) {
      setPinColor("purple");
    } else {
      setPinColor("red");
    }
  }, [pinIndex]);

  return (
    <div
      className="slides w-1/5 h-[80%] relative flex items-center justify-center cursor-pointer"
      onClick={() => changeCard(item?.id)}
    >
      <div
        className={`slidePin${pinIndex} absolute w-fit h-fit -top-[5%] z-50`}
      >
        <ColoredPins pin={pinColor} />
      </div>
      <div className="absolute top-0 w-full h-full">
        <img
          src={morevidholder}
          alt="border"
          className="w-full h-full object-fill"
        />
      </div>
      <div className="absolute top-auto w-[95%] h-[90%] bg-[gray] flex items-end justify-start px-3 py-2 text-xl font-bold">
        <h1>{item?.title}</h1>
        <h1>,</h1>
        <h1>Date</h1>
      </div>
      <div></div>
    </div>
  );
};
interface SliderProps {
  filteredArray?: objectType[];
  changeCard: (id: string | number) => void;
}

const Slider: React.FC<SliderProps> = ({ filteredArray, changeCard }) => {
  const IndexRef = useRef(useGenerateIndex(4));

  return (
    <div className="w-[90%] h-full flex items-center justify-around">
      {filteredArray?.map((item) => (
        <Cards
          key={item.id}
          item={item}
          changeCard={changeCard}
          pinIndex={IndexRef.current.generateCardIndex()}
        />
      ))}
    </div>
  );
};

export default Slider;
