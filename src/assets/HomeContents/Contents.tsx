import React, { memo } from "react";
import horizontalRope from "@/public/Images/ropehorizontal.png";
import Pin from "../Pin/Pin";
import { functionType } from "@/Interface/function";
import blog from "@/public/Images/boardElements/Blog.png";
import BlogImage from "@/public/Images/boardElements/BlogImage.png";
import meetthecast from "@/public/Images/boardElements/meetthecast.png";
import MeetTheCastImage from "@/public/Images/boardElements/MeetTheCastImage.png";
import Social from "@/public/Images/boardElements/social.png";
import SocialImage from "@/public/Images/boardElements/SocialImage.png";

import pin from "@/public/Images/Pin.png";

const Contents: React.FC<functionType> = ({ func }) => {
  return (
    <>
      {" "}
      <div className="blog cursor-pointer relative ">
        {/* <Pin props="top-[30.9%] -right-[10%]" /> */}
        {/* <di
          onClick={() => func("blog")}
          className="w-full h-full bg-[antiquewhite] absolute top-3 left-[8%] rotate-3"
        > */}
        <img
          src={blog}
          alt="blog"
          onClick={() => func("blog")}
          className="w-full h-full object-contain absolute -right-[20%] -top-[10%] z-20 cursor-pointer"
        />

        <img
          src={BlogImage}
          alt="blog"
          className="w-1/2 h-1/2 object-contain absolute right-[6%] top-[22%] z-20 pointer-events-none"
        />
      </div>
      <div className="line1 h-[5px] w-full relative ">
        <img
          src={horizontalRope}
          alt="rope"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="line1 h-[5px] w-full relative z-50">
        <Pin props="top-[10%] -left-[7%]" />
      </div>
      <div className="mail relative  z-20">
        <div
          onClick={() => func("mail")}
          className="w-1/2 h-full bg-[yellow] absolute top-[50%] -left-[20%] -rotate-12 cursor-pointer"
        ></div>
        <img src="" alt="" />
      </div>
      <div className="line2 h-[5px] w-full relative overflow-hidden">
        <img
          src={horizontalRope}
          alt="rope"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="line2 h-[5px] w-full relative z-50">
        <Pin props="-top-[10%] -right-[1%]" />
      </div>
      <div className="meet  relative z-20">
        {/* <div
          onClick={() => func("meet")}
          className="w-full h-full bg-[white] absolute top-[10%] -left-[10%] rotate-6 cursor-pointer"
        ></div> */}
        <img
          src={meetthecast}
          alt="meetthecast"
          onClick={() => func("meet")}
          className="w-[120%] h-[120%] object-contain absolute top-0 -left-[10%] cursor-pointer"
        />
        <img
          src={MeetTheCastImage}
          alt="meetthecast"
          className="w-[78%] h-[78%] object-contain absolute top-[12%] -left-[8%] pointer-events-none"
        />
      </div>
      <div className="line3 h-[5px] w-full  relative overflow-hidden">
        <img
          src={horizontalRope}
          alt="rope"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="line3 h-[5px] w-full  relative z-50">
        <Pin props="top-[33%] -right-[7%]" />
      </div>
      <div className="meetToComicThread relative w-[90%] lg:w-[75%] xl:w-[50%]  2xl:w-[40%] h-full">
        <div className="absolute  w-full h-full  right-[20%]">
          <div className="meetToComicThreadRope h-[5px] w-full absolute">
            <img
              src={horizontalRope}
              alt="rope"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="meetToComicThreadRope h-[5px] w-full  flex-shrink-0 absolute z-50 ">
            <Pin props="top-[0%] right-[0%]" />
            <Pin props="top-[90%] -left-[8%]" />

            {/* 
            <Pin props="top-[30%] right-[50%]" /> */}
          </div>
        </div>
      </div>
      <div className="comic relative z-20">
        <div
          onClick={() => func("comic")}
          className="w-2/3 h-full bg-[green] absolute -top-[20%] left-[10%]  -rotate-6 cursor-pointer"
        ></div>
      </div>
      <div className="line4 h-[5px] w-full relative overflow-hidden">
        <img
          src={horizontalRope}
          alt="rope"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="line4 h-[5px] w-full relative z-50">
        <Pin props="top-[80%] left-[85%] invisible xl:visible" />
      </div>
      <div className="comicToButtonThread relative">
        <div className="absolute top-0 w-1/2 h-full  -right-[12%]">
          <div className="h-[5px] w-full absolute top-[20%]">
            <img
              src={horizontalRope}
              alt="rope"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[5px] w-full absolute top-[20%] z-50">
            <Pin props="top-[90%] -right-[2%]" />
            <Pin props="top-[90%] left-[20%]" />
          </div>
        </div>
        <div className="absolute top-0 w-full h-full -left-[37%]">
          <div className="h-[5px] w-full  absolute top-[20%]">
            <img
              src={horizontalRope}
              alt="rope"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[5px] w-full  absolute top-[20%] z-50">
            <Pin props="top-[90%] right-[33%]" />
            <Pin props="top-[50%] left-[0%]" />
          </div>
        </div>
      </div>
      <div className="playbutton  relative">
        <div className="w-1/2 h-3/4 bg-[black] absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer z-20">
          <Pin props="top-[15%] left-1/2 -translate-x-1/2" />
        </div>
      </div>
      <div className="line5 h-[5px] w-1/3  relative overflow-hidden">
        <img
          src={horizontalRope}
          alt="rope"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="instagram relative">
        <div className="w-full h-full absolute -top-[20%] -right-1/4 -rotate-12  cursor-pointer z-20">
          <img
            src={Social}
            alt="picture"
            className="w-full h-full object-contain absolute left-[10%] top-[20%]"
          />
          <img
            src={SocialImage}
            alt="picture"
            className="w-[70%] h-[70%] object-contain absolute left-[23%] top-[27%]"
          />
        </div>
      </div>
      <div className="line6 h-[5px] w-full relative overflow-hidden">
        <img
          src={horizontalRope}
          alt="rope"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="line6 h-[5px] w-full relative z-50">
        <Pin props="top-[50%] left-[2%]" />
      </div>
    </>
  );
};

export default memo(Contents);
