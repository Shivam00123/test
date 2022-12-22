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

import horizontalRope from "@/public/Images/ropehorizontal.png";
import rope from "@/public/Images/rope.png";
import codepaper from "@/public/Images/homepage/codepaper.png";
import { functionPropString } from "@/Interface/function";

const Content: React.FC<functionPropString> = ({ func }) => {
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
        <div className="w-[120%] h-[120%] absolute -top-[20%] -left-[30%] rotate-[15deg] flex items-end justify-end">
          <img src={auto} alt="auto" className="w-full h-full object-contain" />
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
      <div className="gridblog relative">
        <div className="w-[85%] h-[85%] absolute right-0 -top-[10%] -rotate-12 flex items-start justify-start">
          <img
            onClick={() => func("blog")}
            src={blog}
            alt="auto"
            className="w-full h-full object-contain cursor-pointer"
          />
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
        <div className="w-[90%] h-full absolute right-0 flex items-start justify-start">
          <img
            onClick={() => func("contactus")}
            src={contactus}
            alt="auto"
            className="w-full h-full object-contain cursor-pointer"
          />
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
        <div className="w-[200%] h-[200%] absolute -bottom-[30%] -left-[70%] rotate-[70deg] flex items-end justify-end">
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
        <div className="w-[70%] h-[70%] -rotate-6 absolute left-0">
          <img
            src={codepaper}
            alt="auto"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="followus relative">
        <div className="w-[90%] h-full absolute right-0 rotate-3 flex items-start justify-start">
          <img
            src={insta}
            alt="auto"
            className="w-full h-full object-contain cursor-pointer z-50"
          />
        </div>
      </div>
      <div className="videotocodepaper relative">
        <div className="videotocodepaperrope absolute w-[110%] h-[5px] -z-10">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
      <div className="rightcodepaper relative">
        <div className="w-[80%] h-[80%] absolute top-1/2 -translate-y-1/2 right-0 rotate-45 flex items-start justify-start">
          <img
            src={rightnote}
            alt="auto"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="meettovideo relative">
        <div className="meettovideorope absolute w-[110%] h-[5px] -z-10">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
      <div className="gridmeetthecast relative">
        <div className="w-[90%] h-[90%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -rotate-12 flex items-start justify-start">
          <img
            onClick={() => func("meet")}
            src={meetthecast}
            alt="auto"
            className="w-full h-full object-contain cursor-pointer"
          />
        </div>
      </div>
      <div className="videotocomic relative">
        <div className="videotocomicrope absolute w-[110%] h-[5px] -z-10">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
      <div className="gridcomic relative">
        <div className="w-[130%] h-[130%] absolute -top-[40%] left-1/2 -translate-x-1/2 rotate-12  flex items-start justify-start">
          <img
            onClick={() => func("comic")}
            src={comic}
            alt="auto"
            className="w-full h-full object-contain cursor-pointer"
          />
        </div>
      </div>
      <div className="bottomrightpic relative">
        <div className="w-[150%] h-[150%] absolute -bottom-[50%] -right-[70%] -rotate-[70deg] flex items-end justify-end">
          <img
            src={contract}
            alt="auto"
            className="w-full h-full object-contain -rotate-90"
          />
        </div>
      </div>
    </>
  );
};

export default Content;
