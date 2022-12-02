import GridLayout from "@/assets/Grid/GridLayout";
import MeetTheCast from "@/assets/MeetTheCast/MeetTheCast";
import { useTrailerState } from "@/globalStates/states";
import { useHookstate } from "@hookstate/core";
import React from "react";

const Home = () => {
  return (
    <div className="w-screen min-w-[1140px] h-screen min-h-[600px] bg-[#ef97a6] relative overflow-hidden flex items-center justify-center">
      {/* <GridLayout /> */}
      <MeetTheCast />
    </div>
  );
};

export default Home;
