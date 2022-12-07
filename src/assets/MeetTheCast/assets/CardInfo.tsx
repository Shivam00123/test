import useGetCharcterInfo from "@/hooks/use-getCharcter-info";
import React from "react";
import Cards from "./Cards";
import InfoCard from "./InfoCard";

const CardInfo = () => {
  const { useCastInfoArray, useClickedId, filterCastArray } =
    useGetCharcterInfo();

  const getCharacterInfo = (id: string) => {
    console.log({ id });
    if (!id) return;
    filterCastArray(id);
  };

  return (
    <div className="w-full h-[90%] mt-[10%]  relative flex justify-between items-start">
      <div className="w-1/3 h-full  grid place-items-center">
        <div className="w-[65%] h-[80%] border border-border -translate-y-[10%] rounded-3xl -rotate-6 flex flex-col items-center justify-start relative p-2">
          <div className="w-[95%] h-[70%] bg-white mt-2 rounded-3xl overflow-hidden">
            <img
              src={useClickedId?.value?.gif}
              alt="gif"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-border text-5xl mt-5">
            {useClickedId?.value?.name}
          </h1>
          <h1 className="text-border text-2xl absolute bottom-0 left-5">
            12th nov 22
          </h1>
        </div>
      </div>
      <div className="w-[60%] h-[90%] flex flex-col justify-between items-center">
        <div className="w-[70%] h-[50%] border border-border grid place-items-center p-5">
          <p className="text-border text-lg text-left tracking-wide">
            {useClickedId?.value?.desc}
          </p>
        </div>
        <div className="w-full h-2/5 relative flex items-center justify-between overflow-hidden px-5">
          <div className="w-full h-2/3 bg-border absolute bottom-0 -left-[0]"></div>
          <div className="w-[60%] h-full flex items-center justify-between">
            {useCastInfoArray?.value?.slice(0, 2)?.map((card) => (
              <InfoCard
                data={card}
                classname="mt-[10%] infoseperateCards"
                func={getCharacterInfo}
              />
            ))}
          </div>
          <div className="w-2/5 h-full relative grid place-items-center ">
            {useCastInfoArray?.value?.slice(2)?.map((card) => (
              <InfoCard
                data={card}
                classname="absolute left-[40%] top-[5%] infogroupcards w-[55%]"
                func={getCharacterInfo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
