import React, { useState, useRef, useEffect, useCallback, memo } from "react";
import video from "@/public/videos/Trailer/trailer.mp4";
import playbutton from "@/public/Images/videocontrols/play.png";
import { useHookstate } from "@hookstate/core";
import { useDisplayingComponent } from "@/globalStates/states";
import VideoHolderBG from "@/public/Images/boardElements/VideoHolderBG.png";
import close from "@/public/Images/homepage/close.png";

interface Props {
  pauseVideo?: boolean;
  expand: boolean;
}

const Trailer: React.FC<Props> = ({ pauseVideo, expand }) => {
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

  const closeVideo = () => {
    videoRef.current.pause();
    dispayingCompState.set("");
  };

  return (
    <div className="w-full h-full -translate-y-1/2 absolute top-1/2  left-1/2 -translate-x-1/2 rounded-md z-50">
      {!expand && (
        <div
          className="w-[2.5%] h-[5%] absolute top-[2%] right-[1%] z-50 cursor-pointer"
          onClick={closeVideo}
        >
          <img
            src={close}
            alt="close"
            className="w-full h-full object-contain"
          />
        </div>
      )}
      {dispayingCompState?.value !== "video" && (
        <div className="absolute w-full h-full">
          <img
            src={VideoHolderBG}
            alt="border"
            className="w-full h-full object-fill absolute top-0"
          />
        </div>
      )}
      <div
        style={{
          width: expand ? "95%" : "100%",
          height: expand ? "91%" : "100%",
          top: expand ? "4%" : "",
        }}
        className=" h-full absolute left-1/2 -translate-x-1/2"
      >
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
