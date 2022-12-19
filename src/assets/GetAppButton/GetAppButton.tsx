import React from "react";
import whiteback from "@/public/Images/whiteback.svg";

const GetAppButton = () => {
  return (
    <div className="w-full h-full relative cursor-pointer">
      <div className="w-full h-full absolute top-0">
        <img
          src={whiteback}
          alt="download-button"
          className="w-full h-full object-fill"
        />
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl 2xl:text-3xl -rotate-2 font-bold">
        Download App
      </h1>
    </div>
  );
};

export default GetAppButton;
