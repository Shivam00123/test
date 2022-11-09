import { useDisplayingComponent } from "@/globalStates/states";
import { useHookstate } from "@hookstate/core";
import React from "react";
import BackButton from "../BackButton/BackButton";

const MobileCardsWrapper = () => {
  const dispayingCompState = useHookstate(useDisplayingComponent());
  return (
    <div className="w-full h-full bg-[red]">
      <BackButton />
      <span>{dispayingCompState?.value}</span>
    </div>
  );
};

export default MobileCardsWrapper;
