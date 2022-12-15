import React, { useState } from "react";
import sendbutton from "@/public/Images/send.png";
import VideoHolderBG from "@/public/Images/boardElements/VideoHolderBG.png";
import holder from "@/public/Images/holder.png";
import yellowpin from "@/public/Images/MeetThecast/yellowpin.png";
import purplepin from "@/public/Images/MeetThecast/purplepin.png";
import redpin from "@/public/Images/MeetThecast/redpin.png";

const EmailForm = () => {
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const sendEmail = () => {
    if (!email || !message) return;
    fetch("https://formsubmit.co/ajax/shivamrawat06994@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: {
          email,
          message,
        },
      }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
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
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="absolute -top-[5%] left-0 -translate-x-1/2 w-7 h-7">
              <img
                src={purplepin}
                alt="send"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -bottom-[5%] -right-[5%] -translate-x-1/2 w-7 h-7">
              <img
                src={redpin}
                alt="send"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="emailBox relative">
        <div className="w-full h-full absolute top-0 flex items-center justify-start">
          <img
            src={VideoHolderBG}
            alt="border"
            className="w-full h-full object-fill"
          />
          <input
            type="email"
            className="w-[70%] h-[85%] absolute top-auto left-4  px-4 font-bold text-lg bg-transparent"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="absolute -top-[8%] left-[4%] -translate-x-1/2 w-7 h-7">
            <img
              src={purplepin}
              alt="send"
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className="w-[26%] h-[110%] absolute right-0 top-0 flex items-start justify-center cursor-pointer"
            onClick={sendEmail}
          >
            <div className="w-1/2 h-full grid place-items-center relative">
              <img
                src={sendbutton}
                alt="send"
                className="w-full h-full object-contain"
              />
              <div className="absolute -top-[10%] -right-1/4 w-8 h-8">
                <img
                  src={yellowpin}
                  alt="send"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="w-1/2 h-full grid place-items-center">
              <img
                src={holder}
                alt="border"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default EmailForm;
