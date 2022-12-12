import React from "react";

import VideoHolderBG from "@/public/Images/boardElements/VideoHolderBG.png";

const VideoHolderBorder = () => {
  return (
    <img
      src={VideoHolderBG}
      alt="border"
      className="w-full h-full object-fill absolute top-0"
    />
  );
};

export default VideoHolderBorder;
