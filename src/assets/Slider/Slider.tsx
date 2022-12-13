import React from "react";
import VideoHolderBG from "@/public/Images/boardElements/VideoHolderBG.png";
import { objectType } from "@/Interface/object";

interface Cardsprops {
  item: objectType;
  changeCard: (id: string | number) => void;
}

const Cards: React.FC<Cardsprops> = ({ item, changeCard }) => {
  return (
    <div
      className="slides w-1/5 h-[80%] relative flex items-center justify-center cursor-pointer"
      onClick={() => changeCard(item?.id)}
    >
      <div className="absolute top-0 w-full h-full">
        <img
          src={VideoHolderBG}
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
  return (
    <div className="w-[90%] h-full flex items-center justify-around">
      {filteredArray?.map((item) => (
        <Cards item={item} changeCard={changeCard} />
      ))}
    </div>
  );
};

export default Slider;
