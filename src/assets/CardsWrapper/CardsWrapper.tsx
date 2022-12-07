import { memo } from "react";
import { useDisplayingComponent } from "@/globalStates/states";
import { useHookstate } from "@hookstate/core";
import React from "react";
import Blog from "../Cards/Blog";
import Comic from "../Cards/Comic";
import Mail from "../Cards/Mail";
import Meet from "../Cards/Meet";

const CardsWrapper = () => {
  const displayingComponentState = useHookstate(useDisplayingComponent());
  return (
    <div className="w-full h-full relative bg-transparent">
      {displayingComponentState?.value == "blog" && <Blog />}
      {displayingComponentState?.value == "mail" && <Mail />}
      {displayingComponentState?.value == "meet" && <Meet />}
      {displayingComponentState?.value == "comic" && <Comic />}
    </div>
  );
};

export default memo(CardsWrapper);
