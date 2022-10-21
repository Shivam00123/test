import GridLayout from "@/assets/Grid/GridLayout";
import Blog from "@/assets/Home/Blog";
import Comic from "@/assets/Home/Comic";
import GooglePlayButton from "@/assets/Home/GooglePlayButton";
import Mail from "@/assets/Home/Mail";
import MeetCast from "@/assets/Home/MeetCast";
import Social from "@/assets/Home/Social";
import TrailerComp from "@/assets/Home/TrailerComp";
import { useTrailerState } from "@/globalStates/states";
import { useHookstate } from "@hookstate/core";
import React from "react";

const Home = () => {
  const trailerState = useHookstate(useTrailerState());
  return (
    <div className="w-screen min-w-[1140px] h-screen min-h-[600px] bg-[pink] relative overflow-hidden flex items-center justify-center">
      {/* <div className="absolute top-0 h-1/2 w-1 bg-[gray] left-1/2"></div> */}
      {/* <TrailerComp /> */}
      {/* <div className="absolute top-0 left-1/2 h-4/5 bg-[gray] w-1 skew-y-12"></div> */}
      {/* <Blog />
      <Mail />
      <MeetCast />
      <Social />
      <GooglePlayButton />
      <Comic /> */}
      <GridLayout />
    </div>
  );
};

export default Home;
