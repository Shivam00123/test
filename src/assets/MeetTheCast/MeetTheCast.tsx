import React, { memo, useState } from "react";
import CastInfo from "../CastInfo/CastInfo";

import CardsContainer from "./assets/CardsContainer";

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
