import React, { useState, useRef, useMemo, useEffect } from "react";
import { motion } from "framer-motion";

import titleImg from "@/public/Images/for website/Meet the cast page 2/title.png";
import BackButton from "../BackButton/BackButton";
import comicpageback from "@/public/Images/Comic/comicpageback.png";
import { objectType } from "@/Interface/object";
import useGenerateIndex from "@/hooks/use-generateIndex";
import useGetCharcterInfo from "@/hooks/use-getCharcter-info";
import buttonbg from "@/public/Images/Comic/Buttons/buttonback.png";
import arrowback from "@/public/Images/Comic/Buttons/arrowback.svg";
import arrowfront from "@/public/Images/Comic/Buttons/arrowfront.svg";
import ColoredPins from "../ColoredPins/ColoredPins";

interface ComicPageProps {
  card?: objectType;
}

interface ButtonProps {
  classname?: string;
  action: string;
  func: (action: string) => void;
}

const Buttons: React.FC<ButtonProps> = ({ classname, action, func }) => {
  return (
    <div
      className={`${classname} relative cursor-pointer`}
      onClick={() => {
        func(action);
      }}
    >
      <div className="absolute left-1/2 -translate-x-1/2 w-1/2 h-full">
        <img
          src={buttonbg}
          alt="button-bg"
          className="w-full h-full object-fill absolute"
        />
        {action === "next" ? (
          <img
            src={arrowfront}
            alt="button"
            className="absolute w-[80%] h-[80%] object-contain z top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2"
          />
        ) : (
          <img
            src={arrowback}
            alt="button"
            className="absolute w-[80%] h-[80%] object-contain z top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2"
          />
        )}
      </div>
    </div>
  );
};

const ComicPage: React.FC<ComicPageProps> = ({ card }) => {
  return (
    <div className="w-full h-full relative mt-5">
      <div className="w-full h-full absolute top-0">
        <img
          src={comicpageback}
          alt="comic-page"
          className="w-full h-full object-fill"
        />
      </div>
      <div className="absolute top-[5%] right-[5%] left-[5%] w-[87%] h-[85%] border-4 border-black">
        <img
          src={card?.page}
          alt="comicpage"
          className="w-full h-full object-fill"
        />
      </div>
    </div>
  );
};

interface Props {
  setOpenComic: (set: boolean) => void;
  data: objectType;
}

let maxShow: number = 3;

const ComicPages: React.FC<Props> = ({ setOpenComic, data }) => {
  const { displayingCards, changeStartingPoint, resetState, searchCastById } =
    useGetCharcterInfo(data?.pages, maxShow);
  const IndexRef = useRef(useGenerateIndex(3));
  const [clickedData, setClickedData] = useState<objectType>({});
  const [divisor, setDivisor] = useState<number>(maxShow);
  const [startPoint, setStartPoint] = useState<number>(data?.pages?.length - 1);
  const [leaveFirst, setLeaveFirst] = useState<boolean>(true);
  const [leftoutpages, setLeftoutPages] = useState<number>(1);

  useMemo(() => {
    changeStartingPoint(startPoint);
  }, [startPoint]);

  const getClickedComic = (id: number | string) => {
    if (!id) return;
    let getData = searchCastById(id.toString());
    if (getData) {
      setClickedData(getData);
    }
  };

  useMemo(() => {
    getClickedComic(displayingCards?.[0]?.id.toString());
  }, [displayingCards]);

  const changeLeftOutPagesTitle = (action: string) => {
    if (action === "next") {
      if (leftoutpages > data?.pages.length - 1) {
        setLeftoutPages(1);
      } else {
        setLeftoutPages(leftoutpages + 1);
      }
    } else {
      if (divisor <= maxShow) {
        setDivisor(data?.pages?.length);
      } else {
        setDivisor(divisor - maxShow);
      }
    }
  };

  const changeCards = (action: string) => {
    if (!action) return;
    if (action === "next") {
      if (startPoint > data?.pages?.length) {
        setStartPoint(data?.pages?.length - 1);
      } else {
        if (!leaveFirst) {
          setStartPoint(startPoint + 1);
        } else {
          setStartPoint(0);
          setLeaveFirst(false);
        }
      }
    } else {
      if (startPoint <= 0) {
        setStartPoint(data?.pages?.length - 1);
      } else {
        if (!leaveFirst) {
          setStartPoint(startPoint - 1);
        } else {
          setStartPoint(data?.pages?.length - 2);
          setLeaveFirst(false);
        }
      }
    }
    changeLeftOutPagesTitle(action);
  };

  const backToCollection = (set: boolean) => {
    resetState();
    setOpenComic(set);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
      style={{
        gridTemplateColumns:
          "[col1-start] 10% [col2-start] 12% [col3-start] 3% [col4-start] 50% [col5-start] 3% [col6-start] 12% [col7-start] 10% [col7-end]",
        gridTemplateRows:
          "[row1-start] 10% [row2-start] 80% [row3-start] 10% [row3-end]",
      }}
      className="w-full h-full grid place-content-center"
    >
      <div className="backbutton relative">
        <BackButton OnclickFunc={backToCollection} action={false} />
      </div>
      {displayingCards?.map((card: any, index: any) => (
        <div
          key={card?.id}
          className={`comicpage${IndexRef.current.generateCardIndex()}in flex items-center justify-end`}
        >
          <div className="comicpagechild relative">
            <ComicPage card={card} />
          </div>
        </div>
      ))}
      {/* <div className={`comicpagecenter flex items-center justify-end`}>
        <div className="comicpagechild relative">
          <ComicPage func={() => {}} card={clickedData} />
        </div>
      </div> */}
      <div className="leftcomicpages relative">
        <div className="w-[150%] h-full absolute -right-[50%] top-[30%] -rotate-3">
          <img
            src={titleImg}
            alt="background-image"
            className="w-full h-full object-fill"
          />

          <h1 className="absolute top-1/2 -translate-y-1/2 left-5 font-bold text-3xl">
            {leftoutpages} of {data?.pages?.length}
          </h1>

          <ColoredPins pin="red" classname="top-0 left-1/2" />
        </div>
      </div>
      <Buttons classname="comicPrev" action="prev" func={changeCards} />
      <Buttons classname="comicNext" action="next" func={changeCards} />
    </motion.div>
  );
};

export default ComicPages;
