import GridLayout from "@/assets/Grid/GridLayout";
import MeetTheCast from "@/assets/MeetTheCast/MeetTheCast";
import { useHookstate } from "@hookstate/core";
import React from "react";
import boardImg from "@/public/Images/board.png";

const Home = () => {
  return (
    <div className="w-screen min-w-[1312px] h-screen min-h-[701px] relative overflow-hidden flex items-center justify-center">
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
