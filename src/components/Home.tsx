import GridLayout from "@/assets/Grid/GridLayout";
import MeetTheCast from "@/assets/MeetTheCast/MeetTheCast";
import { useTrailerState } from "@/globalStates/states";
import { useHookstate } from "@hookstate/core";
import React from "react";
import boardImg from "@/public/Images/board.png";

const Home = () => {
  return (
    <div className="w-screen min-w-[1140px] h-screen min-h-[600px] relative overflow-hidden flex items-center justify-center">
      <img
        src={boardImg}
        alt="board"
        className="w-full h-full object-cover absolute top-0 -z-50"
      />
      <GridLayout />
      {/* <MeetTheCast /> */}
    </div>
  );
};

export default Home;
