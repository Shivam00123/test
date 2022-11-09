import React from "react";
import { useHookstate } from "@hookstate/core";

import { useDisplayingComponent } from "@/globalStates/states";
import backButton from "@/public/Images/back.png";

const BackButton = () => {
  const dispayingCompState = useHookstate(useDisplayingComponent());
  return (
    <div
      className="absolute top-5 left-5 w-12 h-12 z-50 cursor-pointer"
      onClick={() => dispayingCompState.set("")}
    >
      <img
        src={backButton}
        alt="back-button"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default BackButton;
