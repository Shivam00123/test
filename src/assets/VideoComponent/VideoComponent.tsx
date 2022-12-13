import React from "react";

interface VideoProps {
  videoUrl?: string;
}

const VideoComponent: React.FC<VideoProps> = ({ videoUrl }) => {
  return (
    <div className="w-[95%] h-[91%] absolute top-auto">
      <video
        src={videoUrl}
        controls
        className="w-full h-full object-fill"
      ></video>
    </div>
  );
};

export default VideoComponent;
