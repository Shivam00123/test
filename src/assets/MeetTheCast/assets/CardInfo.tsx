import useGetCharcterInfo from "@/hooks/use-getCharcter-info";
import React from "react";

const CardInfo = () => {
  const { useCastInfoArray, useClickedId } = useGetCharcterInfo();
  return (
    <div className="w-full h-[90%] mt-[10%]  relative flex justify-between items-start">
      <div className="w-1/3 h-full  grid place-items-center">
        <div className="w-[65%] h-[80%] border border-border -translate-y-5 rounded-3xl -rotate-6 flex flex-col items-center justify-start relative p-2">
          <div className="w-[95%] h-[70%] bg-white mt-2 rounded-3xl"></div>
          <h1 className="text-border text-5xl mt-5">Jotson</h1>
          <h1 className="text-border text-2xl absolute bottom-0 left-5">
            12th nov 22
          </h1>
        </div>
      </div>
      <div className="w-[60%] h-[90%] flex flex-col justify-between items-center">
        <div className="w-[70%] h-[50%] border border-border grid place-items-center p-5">
          <p className="text-border text-lg text-left tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            eget sapien lectus. Vestibulum nisl ex, finibus ut placerat vitae,
            dictum at magna. Etiam id efficitur lectus. Praesent vitae elementum
            tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi semper sollicitudin condimentum. Donec ultrices sem erat. Duis
            at massa eu magna fringilla euismod. Curabitur vel sodales nisl.
            Nullam in velit dolor. Duis at eros dolor. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Aliquam vel tellus augue. Quisque sit amet viverra mi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
