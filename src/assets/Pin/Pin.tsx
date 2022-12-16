import React from "react";
import pin from "@/public/Images/Pin.png";
import { useHookstate } from "@hookstate/core";
import { useDisplayingComponent } from "@/globalStates/states";

interface Props {
  props?: string;
}

const Pin: React.FC<Props> = ({ props }) => {
  const dispayingCompState = useHookstate(useDisplayingComponent());
  return (
    <div
      style={{ display: dispayingCompState?.value ? "none" : "" }}
      className={`absolute w-4  h-3  -translate-y-1/2 z-50  ${props}`}
    >
      <img src={pin} alt="pin" className="w-full h-full object-contain" />
    </div>
  );
};

export default Pin;
