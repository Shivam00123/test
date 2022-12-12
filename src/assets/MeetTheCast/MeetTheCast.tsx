import React, { memo, useEffect, useRef, useState } from "react";
import CastInfo from "../CastInfo/CastInfo";
import { cast } from "@/data/cast";

import CardsContainer from "./assets/CardsContainer";
import usedataHandler from "@/hooks/use-dataHandler";

const MeetTheCast = () => {
  const [showCardsInfo, setShowCardsInfo] = useState<boolean>(false);

  return (
    <div className="w-full h-full grid place-items-center">
      {showCardsInfo ? (
        <CastInfo />
      ) : (
        <CardsContainer setShowCardsInfo={setShowCardsInfo} />
      )}
    </div>
  );
};

export default memo(MeetTheCast);
