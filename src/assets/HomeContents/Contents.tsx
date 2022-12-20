import React, { memo } from "react";
import horizontalRope from "@/public/Images/ropehorizontal.png";
import Pin from "../Pin/Pin";
import { functionPropString } from "@/Interface/function";
import blog from "@/public/Images/for website/homepage - web/blog.png";
import meetthecast from "@/public/Images/boardElements/meetthecast.png";
import MeetTheCastImage from "@/public/Images/boardElements/MeetTheCastImage.png";
import contactus from "@/public/Images/contactus.png";
import holder from "@/public/Images/holder.png";
import instagram from "@/public/Images/instagram.svg";
import comic from "@/public/Images/for website/homepage - web/comic.png";
import GetAppButton from "../GetAppButton/GetAppButton";

const Contents: React.FC<functionPropString> = ({ func }) => {
  return (
    <>
      {" "}
      <div className="blog cursor-pointer relative">
        <img
          src={blog}
          alt="blog"
          onClick={() => func("blog")}
          className="w-full h-full object-contain absolute top-[15%] -left-[10%]  z-20 cursor-pointer -rotate-12"
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
        <Pin props="top-[10%] left-[16%]" />
      </div>
      <div className="mail relative z-20">
        <div
          // onClick={() => func("mail")}
          className="w-[60%] h-full absolute top-[50%] -left-[30%] rotate-12 cursor-pointer"
        >
          <img
            src={holder}
            alt="background-image"
            className="w-full h-full object-cover"
          />
          <img
            src={instagram}
            alt="instagram-logo"
            className="w-[60%] h-[60%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-[55%] -rotate-3"
          />
        </div>
      </div>
      <div className="line2 h-[5px] w-full relative overflow-hidden">
        <img
          src={horizontalRope}
          alt="rope"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="line2 h-[5px] w-full relative z-50">
        <Pin props="top-[100%] right-[10%]" />
      </div>
      <div className="meet relative z-20">
        {/* <div
          onClick={() => func("meet")}
          className="w-full h-full bg-[white] absolute top-[10%] -left-[10%] rotate-6 cursor-pointer"
        ></div> */}
        <img
          src={meetthecast}
          alt="meetthecast"
          onClick={() => func("meet")}
          className="w-[90%] h-[90%] object-contain absolute -top-[12%] -left-[10%] cursor-pointer"
        />
        <img
          src={MeetTheCastImage}
          alt="meetthecast"
          className="w-[58%] h-[58%] object-contain absolute -top-[3%] -left-[1%] pointer-events-none"
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
          {/* <div className="meetToComicThreadRope h-[5px] w-full  flex-shrink-0 absolute z-50 ">
            <Pin props="top-[0%] right-[0%]" />
            <Pin props="top-[90%] -left-[8%]" />

         
            <Pin props="top-[30%] right-[50%]" /> 
          </div> */}
        </div>
      </div>
      <div className="comic relative z-20">
        <div
          onClick={() => func("comic")}
          className="w-2/3 h-full  absolute -top-[25%] left-[%]  -rotate-6 cursor-pointer"
        >
          <img
            onClick={() => func("comic")}
            src={comic}
            alt="picture"
            className="w-[125%] h-[125%] object-contain absolute top-[0%] left-[30%]  cursor-pointer rotate-12"
          />
        </div>
      </div>
      <div className="line4 h-[5px] w-full relative overflow-hidden">
        <img
          src={horizontalRope}
          alt="rope"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="line4 h-[5px] w-full relative z-50">
        <Pin props="top-[80%] left-[75%] invisible xl:visible" />
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
            <Pin props="top-[90%] -left-[10%]" />
            <Pin props="top-[0%] left-[52%]" />
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
            <Pin props="top-[90%] right-[45%]" />
            <Pin props="top-[50%] left-[13%]" />
          </div>
        </div>
      </div>
      <div className="playbutton  relative">
        <div className="w-[80%] h-3/4 absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer z-20">
          <Pin props="top-[25%] left-1/2 -translate-x-1/2" />
          <GetAppButton />
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
        <div className="w-full h-full absolute -top-[20%] -right-1/3 -rotate-3 z-20">
          <img
            onClick={() => func("contactus")}
            src={contactus}
            alt="picture"
            className="w-full h-full object-contain absolute left-[10%] top-[20%]  cursor-pointer"
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
