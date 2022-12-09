import { objectType } from "@/Interface/object";
import React from "react";

interface detailsProp {
  characterdetails: { [key: string]: any };
}

const CharcterDetails: React.FC<detailsProp> = ({ characterdetails }) => {
  return (
    <div className="absolute top-[4%] left-[3%] flex flex-col w-[94%] h-[92%] items-center">
      <div className="w-[95%] h-[80%] bg-[gray]">
        <img
          src={characterdetails?.img}
          alt="character"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-3xl font-bold mt-5">{characterdetails?.name}</h1>
      <p className="uppercase font-bold text-xl absolute bottom-0 left-2">
        {characterdetails?.date}
      </p>
    </div>
  );
};

export default CharcterDetails;
