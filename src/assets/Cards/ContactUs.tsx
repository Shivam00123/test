import { FiveColsEightRows } from "@/GridTemplate/grid-templete";
import React from "react";
import BackButton from "../BackButton/BackButton";
import VideoHolderBG from "@/public/Images/boardElements/VideoHolderBG.png";
import Title from "../Title/Title";
import holder from "@/public/Images/holder.png";
import youtubeIcon from "@/public/Images/youtube.svg";
import instagramIcon from "@/public/Images/instagram.svg";
import horizontalRope from "@/public/Images/ropehorizontal.png";

const ContactUs = () => {
  return (
    <div
      className="grid place-content-center w-full h-full relative"
      style={FiveColsEightRows}
    >
      <div className="backbutton relative">
        <BackButton />
      </div>
      <div className="titleBox relative p-2">
        <Title title="Contact Us" />
      </div>
      <div className="titleToIcon relative -z-10">
        <div className="titleToIconRope absolute w-full h-[5px]">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
      <div className="messageBox relative flex items-center justify-center">
        <div className="w-full h-full absolute top-5 rotate-1 flex items-center justify-center">
          <img
            src={VideoHolderBG}
            alt="border"
            className="w-full h-full object-fill"
          />
          <div className="w-[95%] h-[91%] absolute top-auto">
            <textarea
              className="w-full h-full p-5 text-base"
              placeholder="message"
              style={{ resize: "none" }}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="emailBox relative -rotate-3 -top-3">
        <div className="w-full h-full absolute top-0 flex items-center justify-start">
          <img
            src={VideoHolderBG}
            alt="border"
            className="w-full h-full object-fill"
          />
          <input
            type="email"
            className="w-[70%] h-[85%] absolute top-auto left-4  px-4 font-bold text-lg"
            placeholder="email"
          />
        </div>
      </div>
      <div className="youtubeIcon flex items-start justify-center">
        <div className="w-1/2 h-full relative">
          <img
            src={holder}
            alt="border"
            className="w-full h-full object-fill absolute"
          />
          <img
            src={youtubeIcon}
            alt="youtube-icon"
            className="w-[70%] h-full absolute left-1/2 -translate-x-[55%]"
          />
        </div>
      </div>
      <div className="twitterIcon flex items-start justify-center">
        <div className="w-1/2 h-full relative">
          <img
            src={holder}
            alt="border"
            className="w-full h-full object-fill absolute"
          />
          <img
            src={instagramIcon}
            alt="youtube-icon"
            className="w-[70%] h-full absolute left-1/2 -translate-x-[55%]"
          />
        </div>
      </div>
      <div className="instagramIcon flex items-start justify-center">
        <div className="w-1/2 h-full relative">
          <img
            src={holder}
            alt="border"
            className="w-full h-full object-fill absolute"
          />
        </div>
      </div>
      <div className="iconToEmailBox relative -z-10">
        <div className="iconToEmailBoxRope absolute w-full h-[5px]">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
