import { NineColsFourteenRows } from "@/GridTemplate/grid-templete";
import React from "react";
import BackButton from "../BackButton/BackButton";

import Title from "../Title/Title";
import holder from "@/public/Images/holder.png";
import youtubeIcon from "@/public/Images/youtube.svg";
import instagramIcon from "@/public/Images/instagram.svg";
import horizontalRope from "@/public/Images/ropehorizontal.png";
import yellowpin from "@/public/Images/MeetThecast/yellowpin.png";

import EmailForm from "../EmailForm/EmailForm";

const ContactUs = () => {
  return (
    <div
      className="grid place-content-center w-full h-full relative"
      style={NineColsFourteenRows}
    >
      <div className="backbutton relative">
        <BackButton />
      </div>
      <div className="titleBox relative p-2">
        <Title title="Contact Us" />
      </div>
      <div className="titleToIcon relative -z-10">
        <div className="titleToIconRope absolute w-full h-[5px] flex items-center">
          <img
            src={horizontalRope}
            alt="rope"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
      <div className="titleToIcon relative z-50">
        <div className="titleToIconRope absolute w-full h-[5px] flex items-center">
          <div className="absolute -right-0 w-7 h-7">
            <img
              src={yellowpin}
              alt="send"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      <EmailForm />
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-7 h-7">
            <img
              src={yellowpin}
              alt="send"
              className="w-full h-full object-contain"
            />
          </div>
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
      <div className="iconToEmailBox relative z-50">
        <div className="iconToEmailBoxRope absolute w-full h-[5px]">
          <div className="absolute -top-[70%] right-2 w-7 h-7">
            <img
              src={yellowpin}
              alt="send"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
