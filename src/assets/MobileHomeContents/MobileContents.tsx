import React from "react";

import rope from "@/public/Images/rope.png";
import { functionType } from "@/Interface/function";
import Pin from "../Pin/Pin";

const MobileContents: React.FC<functionType> = ({ func }) => {
  return (
    <>
      <div className="thread1 relative ">
        <div className={`middleString w-1 h-1/4 absolute top-0 left-1/2 `}>
          <img src={rope} alt="rope" className="w-full h-full object-cover" />
        </div>
        <div className="leftString w-1  h-5/6 absolute top-0 left-[10%] -skew-x-[5deg]">
          <img src={rope} alt="rope" className="w-full h-full object-cover" />
        </div>
        <div className="rightString w-1  h-5/6 absolute top-0 left-[90%] skew-x-[5deg]">
          <img src={rope} alt="rope" className="w-full h-full object-cover" />
        </div>
        <div className="middleToLeftString w-[5px] h-1/4 absolute top-[10%] left-1/3 -skew-x-[30deg]">
          <img src={rope} alt="rope" className="w-full h-full object-cover" />
        </div>
        <div className="middleToRightString w-[5px] h-1/3 absolute top-1/4 right-[45%] skew-x-[10deg]">
          <img src={rope} alt="rope" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="comp relative" onClick={() => func("blog")}>
        <Pin props="top-[10%] left-[47%]" />
        <Pin props="-bottom-[2%] left-[47%]" />
        <Pin props="-bottom-[2%] left-[18%]" />
        <div className="absolute top-0 w-4/5 h-full bg-[yellow] left-1/2 -translate-x-1/2"></div>
      </div>
      <div className="comp2 relative" onClick={() => func("mail")}>
        <Pin props="top-[8%] left-[23%]" />
        <Pin props="bottom-[0%] left-[21%]" />
        <Pin props="top-[19%] right-[27%]" />
        <div className="absolute top-0 w-4/5 h-full bg-[aqua] left-1/2 -translate-x-1/2 rotate-6"></div>
      </div>
      <div className="comp3 relative" onClick={() => func("comic")}>
        <Pin props="top-[9%] right-[19%]" />
        <Pin props="-bottom-[5%] left-[28%]" />
        <Pin props="bottom-[0%] right-[17%]" />
        <div className="absolute top-0 w-4/5 h-full bg-[aqua] left-1/2 -translate-x-1/2  -rotate-3"></div>
      </div>
      <div className="thread2 relative">
        <div className="absolute h-full w-[6px] left-1/4 -skew-x-[30deg]">
          <img src={rope} alt="rope" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="comp4 relative" onClick={() => func("meet")}>
        <Pin props="top-[9%] right-[23%]" />
        <Pin props="top-[14%] left-[38.5%]" />
        <Pin props="top-[51%] left-[10%]" />
        <div className="absolute top-0 w-4/5 h-full bg-[green] left-1/2 -translate-x-1/2  -rotate-6"></div>
      </div>
      <div className="thread3 relative">
        <div className="absolute h-full w-[9px]  top-1/5 left-[40%] -skew-x-[57deg]">
          <img src={rope} alt="rope" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="comp5 relative">
        <Pin props="top-[10%] left-[10%]" />
        <Pin props="top-[8%] left-[31%]" />
        <div className="absolute top-0 w-4/5 h-full bg-[lemonchiffon] left-0 rotate-3"></div>
      </div>
      <div className="comp6 relative">
        <Pin props="top-[11%] right-[17%]" />
        <div className="absolute top-0 w-full h-full bg-[lemonchiffon] right-0 -rotate-6"></div>
      </div>
    </>
  );
};

export default MobileContents;
