import React, { useState, useRef, useEffect, useCallback, memo } from "react";
import video from "@/public/videos/Trailer/trailer.mp4";
import playbutton from "@/public/Images/videocontrols/play.png";
import { useHookstate } from "@hookstate/core";
import { useDisplayingComponent } from "@/globalStates/states";
import VideoHolder from "@/public/Images/boardElements/VideoHolder.png";
import VideoHolderBG from "@/public/Images/boardElements/VideoHolderBG.png";

interface Props {
  pauseVideo?: boolean;
}

const Trailer: React.FC<Props> = ({ pauseVideo }) => {
  console.count("trailer");
  const [videoState, setVideoState] = useState<string>("paused");
  const videoRef = useRef<any>();
  const dispayingCompState = useHookstate(useDisplayingComponent());

  useEffect(() => {
    if (!pauseVideo) {
      changeVideoState("paused");
      videoRef.current.pause();
    }
  }, [pauseVideo]);

  useEffect(() => {
    if (videoState === "play") {
      dispayingCompState.set("video");
      videoRef.current.play();
    }
  }, [videoState]);

  const changeVideoState = (state: string) => {
    setVideoState(state);
  };

  return (
    <div className="w-full h-full -translate-y-1/2 absolute top-1/2  left-1/2 -translate-x-1/2 rounded-md z-50">
      {dispayingCompState?.value !== "video" && (
        <div className="absolute w-full h-full">
          <img
            src={VideoHolderBG}
            alt="border"
            className="w-full h-full object-fill absolute top-0"
          />
          {/* <img
          src={VideoHolder}
          alt="border"
          className="w-full h-full object-cover absolute top-0"
        /> */}
        </div>
      )}
      <div className="w-[95%] h-[91%] absolute top-[4%] left-1/2 -translate-x-1/2">
        <video
          ref={videoRef}
          onPlay={() => {
            changeVideoState("play");
          }}
          onPause={() => changeVideoState("paused")}
          controls={videoState === "play"}
          className="w-full h-full object-fill"
          src={video}
        ></video>
        {videoState != "play" && (
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 cursor-pointer"
            onClick={() => {
              changeVideoState("play");
            }}
          >
            <img
              src={playbutton}
              alt="play_button"
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Trailer);
