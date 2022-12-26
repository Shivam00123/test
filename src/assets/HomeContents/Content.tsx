import React from "react";

import auto from "@/public/Images/homepage/auto.png";
import blog from "@/public/Images/homepage/blog.png";
import contactus from "@/public/Images/homepage/contactus.png";
import missing from "@/public/Images/homepage/missing.png";
import insta from "@/public/Images/homepage/insta.png";
import rightnote from "@/public/Images/homepage/rightnote.png";
import meetthecast from "@/public/Images/homepage/meetthecast.png";
import comic from "@/public/Images/homepage/comic.png";
import contract from "@/public/Images/homepage/contract.png";
import portrait from "@/public/Images/homepage/portrait.png";
import playstore from "@/public/Images/homepage/playstore.png";
import appstore from "@/public/Images/homepage/appstore.png";

import horizontalRope from "@/public/Images/ropehorizontal.png";
import rope from "@/public/Images/rope.png";
import codepaper from "@/public/Images/homepage/codepaper.png";
import { functionPropString } from "@/Interface/function";
import HomepageTitleBar from "../HomepageTitleBar/HomepageTitleBar";
import ColoredPins from "../ColoredPins/ColoredPins";

const Content: React.FC<functionPropString> = ({ func }) => {
  const appLinkhref = (app: string) => {
    if (app == "playstore") {
      window.open(import.meta.env.VITE_PLAY_STORE_LINK);
    } else {
      window.open(import.meta.env.VITE_APP_STORE_LINK);
    }
  };

  return (
    <>
      <div className="titletotrailer relative -z-10">
        <div className="titletotrailerrope absolute w-[150%] h-[5px]">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="ricksaw relative">
        <div className="w-[123%] h-[123%] absolute -top-[20%] -left-[30%] rotate-[15deg] flex items-end justify-end">
          <img
            src={auto}
            alt="auto"
            className="w-full h-full object-contain z-20"
          />
        </div>
      </div>
      <div className="autoToblog relative -z-10">
        <div className="autoToblogrope absolute w-[150%] h-[5px]">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="autoToblog relative  z-50">
        <div className="autoToblogrope absolute w-[150%] h-[5px]">
          <ColoredPins pin="red" classname="-top-[150%] left-[12%]" />
        </div>
      </div>
      <div className="gridblog relative   z-50">
        <div className="w-[110%] h-[100%] absolute -right-[20%] -top-[16%] -rotate-12 flex items-start justify-start">
          <img
            onClick={() => func("blog")}
            src={blog}
            alt="auto"
            className="w-full h-full object-contain cursor-pointer"
          />
          <HomepageTitleBar
            borderColor="yellow"
            title="Behind the Scenes"
            classname="w-[95%] h-[15%] left-1/2 -translate-x-[52%] top-[6%]"
          />
          <ColoredPins pin="green" classname="top-[7%] left-[5%]" />
          <ColoredPins pin="yellow" classname="bottom-[17%] right-[8%]" />
        </div>
      </div>
      <div className="blogtovideo relative  -z-10">
        <div className="blogtovideorope absolute w-[110%] h-[5px]">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
      <div className="blogtocontactus relative  -z-10">
        <div className="blogtocontactusrope absolute w-[150%] h-[5px]">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="gridcontactus relative">
        <div className="w-[115%] h-[115%] bottom-[5%] absolute -right-[5%] flex items-start justify-start">
          <img
            onClick={() => func("contactus")}
            src={contactus}
            alt="auto"
            className="w-full h-full object-contain cursor-pointer"
          />
          <HomepageTitleBar
            title="Contact Us"
            classname="w-[90%] h-[15%] left-1/2 -translate-x-[64%] -top-[7%]"
          />
          <ColoredPins pin="purple" classname="-top-[7%] -left-[5%]" />
          <ColoredPins pin="red" classname="bottom-[25%] right-[7%]" />
        </div>
      </div>
      <div className="missingtocontactus relative  -z-10">
        <div className="missingtocontactusrope absolute w-[150%] h-[5px]">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="contactustovideo relative  -z-10">
        <div className="contactustovideorope absolute w-[150%] h-[5px]">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="missing relative">
        <div className="w-[120%] h-[120%] absolute bottom-[5%] xl:-bottom-[20%] -left-[20%] xl:-left-[50%] rotate-[70deg] flex items-end justify-end">
          <img
            src={missing}
            alt="auto"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="codepapertovideo relative  -z-10">
        <div className="codepapertovideorope absolute w-[110%] h-[5px]">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
      <div className="codepapertomeet relative  -z-10">
        <div className="codepapertomeetrope absolute w-[150%] h-[5px]">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="codepaper relative flex items-center justify-center">
        <div className="w-[65%] min-w-[89px] min-h-[80px] h-[65%] -rotate-6 absolute left-0">
          <img
            src={codepaper}
            alt="auto"
            className="w-full h-full object-contain"
          />
          <ColoredPins pin="purple" classname="-top-[2%] left-[15%]" />
        </div>
      </div>
      <div className="followus relative">
        <div className="w-[130%] h-[130%] absolute right-0 rotate-3 flex items-start justify-start">
          <img
            src={insta}
            alt="auto"
            className="w-full h-full object-contain cursor-pointer z-50"
          />
          <ColoredPins pin="yellow" classname="top-[3%] z-50 left-[40%]" />
        </div>
      </div>
      <div className="videotocodepaper relative -z-10">
        <div className="videotocodepaperrope absolute w-[110%] h-[5px] ">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
      <div className="rightcodepaper relative">
        <div className="w-[73%] h-[73%] absolute top-1/2 -translate-y-1/2 right-0 rotate-45 flex items-start justify-start">
          <img
            src={rightnote}
            alt="auto"
            className="w-full h-full object-contain"
          />
          <ColoredPins pin="red" classname="top-[3%] z-50 left-[40%]" />
        </div>
      </div>
      <div className="meettovideo relative  -z-10">
        <div className="meettovideorope absolute w-[110%] h-[5px]">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
      <div className="gridmeetthecast relative">
        <div className="w-[102%] h-[102%] absolute top-[40%] -translate-y-1/2 left-1/2 -translate-x-1/2 -rotate-12 flex items-start justify-start">
          <img
            onClick={() => func("meet")}
            src={meetthecast}
            alt="auto"
            className="w-full h-full object-contain cursor-pointer"
          />
          <HomepageTitleBar
            title="Meet the Cast"
            classname="w-full h-[15%] -left-[7%] -rotate-1"
          />
          <ColoredPins classname="top-[1%]" pin="red" />
        </div>
      </div>
      <div className="videotocomic relative -z-10">
        <div className="videotocomicrope absolute w-[110%] h-[5px] ">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
      <div className="videotocomic relative">
        <div className="videotocomicrope absolute w-[110%] h-[5px] "></div>
        <ColoredPins pin="yellow" classname="-right-[5%] top-[76%] z-50" />
      </div>
      <div className="gridcomic relative z-20 ">
        <div className="w-[140%] h-[140%] absolute -top-[50%] left-1/2 -translate-x-1/2 rotate-12  flex items-start justify-start">
          <img
            onClick={() => func("comic")}
            src={comic}
            alt="auto"
            className="w-full h-full object-contain cursor-pointer "
          />
          <HomepageTitleBar
            borderColor="yellow"
            title="Comics"
            classname="w-[90%] h-[15%] left-1/2 -translate-x-1/2 -top-[10%]"
          />
          <ColoredPins pin="purple" classname="-top-[10%] left-[15%]" />
        </div>
      </div>
      <div className="bottomrightpic relative">
        <div className="w-[120%] h-[120%] absolute -bottom-[20%] left-[40%] -rotate-[70deg] flex items-end justify-end">
          <img
            src={contract}
            alt="auto"
            className="w-full h-full object-contain -rotate-90"
          />
        </div>
      </div>
      <div className="portrait relative z-10">
        <div className="w-[110%] h-[100%] absolute top-[75%] left-0">
          <img
            src={portrait}
            alt="auto"
            className="w-full h-full object-fill rotate-[10deg]"
          />
        </div>
        <ColoredPins pin="purple" classname="top-[70%] left-[10%]" />
      </div>
      <div className="contacttoplaystore relative  -z-10">
        <div className="contacttoplaystorerope absolute w-[110%] h-[5px]">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
      <div
        className="playstore relative z-20"
        onClick={() => appLinkhref("playstore")}
      >
        <div className="w-[130%] h-[130%] absolute -top-[10%]  left-1/2 -translate-x-1/2">
          <img
            src={playstore}
            alt="auto"
            className="w-full h-full object-contain cursor-pointer"
          />
        </div>
        <ColoredPins
          pin="yellow"
          classname="-top-[10%] left-1/2 -translate-x-1/2"
        />
      </div>
      <div className="comictoappstore relative  -z-10">
        <div className="comictoappstorerope absolute w-[110%] h-[5px]">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
      <div className="playstoretoappstore relative -z-10">
        <div className="playstoretoappstorerope absolute w-[110%] h-[5px]">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
      <div
        className="appstore relative"
        onClick={() => appLinkhref("applestore")}
      >
        <div className="w-[95%] h-[95%] absolute top-[4px] left-1/2 -translate-x-1/2">
          <img
            src={appstore}
            alt="auto"
            className="w-full h-full object-contain cursor-pointer"
          />
        </div>
        <ColoredPins
          pin="red"
          classname="-top-[13%] left-1/2 -translate-x-1/2"
        />
      </div>
    </>
  );
};

export default Content;
