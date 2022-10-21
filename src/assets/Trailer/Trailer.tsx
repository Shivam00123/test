import React, { useState, useRef, useEffect, useCallback } from "react";
import video from "@/public/videos/dummy.mp4";
import playbutton from "@/public/Images/videocontrols/play.png";
import { useHookstate } from "@hookstate/core";
import { useDisplayingComponent } from "@/globalStates/states";

interface Props {
  pauseVideo?: boolean;
}

const Trailer: React.FC<Props> = ({ pauseVideo }) => {
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
    <div className="w-full h-full relative">
      <video
        ref={videoRef}
        onPlay={() => {
          changeVideoState("play");
        }}
        onPause={() => changeVideoState("paused")}
        controls={videoState === "play"}
        className="w-full h-full object-cover"
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
  );
};

export default Trailer;
