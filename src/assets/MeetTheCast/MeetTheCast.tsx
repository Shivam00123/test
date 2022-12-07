import React, { memo, useState } from "react";

import { useDisplayingComponent } from "@/globalStates/states";
import { useHookstate } from "@hookstate/core";
import CardsContainer from "./assets/CardsContainer";
import CardInfo from "./assets/CardInfo";

const MeetTheCast = () => {
  const dispayingCompState = useHookstate(useDisplayingComponent());
  const [showCardsInfo, setShowCardsInfo] = useState<boolean>(false);

  return (
    <div className="w-full h-full grid place-items-center">
      {/* <div className="absolute top-0 w-full h-[10%] flex items-center justify-start p-3">
        <button
          className="px-5 py-2 border border-border text-border text-lg rounded-xl"
          onClick={() => dispayingCompState.set("")}
        >
          back
        </button>
        <h1 className="text-border text-6xl font-normal ml-10">
          Meet the cast
        </h1>
      </div> */}
      {showCardsInfo ? (
        <CardInfo />
      ) : (
        <CardsContainer setShowCardsInfo={setShowCardsInfo} />
      )}
    </div>
  );
};

export default memo(MeetTheCast);
