import React from "react";

interface VideoProps {
  videoUrl?: string;
}

const VideoComponent: React.FC<VideoProps> = ({ videoUrl }) => {
  return (
    <div className="w-[94%] -translate-x-[0.8%] -translate-y-[1%] h-[92%] absolute  top-auto">
      <video
        src={videoUrl}
        controls
        className="w-full h-full object-fill"
      ></video>
    </div>
  );
};

export default VideoComponent;
