import React from "react";
import { motion } from "framer-motion";
import BackButton from "../BackButton/BackButton";
import Title from "../Title/Title";
import horizontalRope from "@/public/Images/ropehorizontal.png";
import descBackMeet from "@/public/Images/for website/Meet the cast page 2/descBackMeet.png";
import Cards from "../MeetTheCast/assets/Cards";
import CharcterDetails from "./CharcterDetails";
import CharacterDesc from "../CharacterDesc";
import purplepin from "@/public/Images/MeetThecast/purplepin.png";
import yellowpin from "@/public/Images/MeetThecast/yellowpin.png";
import useGetCharcterInfo from "@/hooks/use-getCharcter-info";
import { cast } from "@/data/cast";
import castcard from "@/public/Images/castcard.png";

const CastInfo = () => {
  const {
    displayingCards,
    getCharacterInfo,
    changeDisplayingCards,
    useClickedId,
  } = useGetCharcterInfo(cast);

  const fetchClickedCardInfo = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLDivElement;
    if (displayingCards[displayingCards.length - 1]?.id == target.id) {
      changeDisplayingCards("next");
    }
    getCharacterInfo(target.id);
    return;
  };

  return (
    <motion.div
      style={{
        gridTemplateColumns:
          "[col1-start] 10% [col2-start] 15% [col3-start] 15% [col4-start] 10% [col5-start] 10% [col6-start] 30% [col7-start] 10% [col7-end]",
        gridTemplateRows:
          " [row1-start] 10% [row2-start] 50% [row3-start] 5% [row4-start] 35% [row4-end]",
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 80,
      }}
      className="w-full h-full grid place-content-center py-2"
    >
      <div className="backbutton relative">
        <BackButton />
      </div>
      <div className="titleBox rotate-1 ml-2 mt-2">
        <Title title="Meet the cast" />
      </div>
      <div className="titleTodescCard  -z-10 relative">
        <div className="titleTodescCardRope w-full h-[5px] mt-5 absolute">
          <img
            src={horizontalRope}
            alt="thread"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
      <div className="descCard grid place-items-center">
        <div className="w-[80%] h-full relative">
          <div className="w-full h-full absolute top-0 ">
            <img
              src={descBackMeet}
              alt="border"
              className="w-full h-full object-fill"
            />
          </div>
          <div className="w-[90%] h-[64%] absolute bottom-[7%] left-1/2 -translate-x-1/2">
            <CharacterDesc
              charactername={useClickedId?.value?.name}
              characterdesc={useClickedId?.value?.desc}
            />
          </div>
        </div>
      </div>
      <div className="infocard grid place-items-center">
        <div className="w-[85%] h-[95%] -rotate-6 relative z-20">
          <div className="w-full h-full absolute top-0 z-50">
            <img
              src={castcard}
              alt="border"
              className="w-full h-full object-fill"
            />
          </div>
          <CharcterDetails characterdetails={useClickedId?.value} />
        </div>
      </div>
      <div className="descCardtoinfocard relative">
        <div className="w-full h-[5px] descCardtoinfocardRope absolute flex items-center">
          <img
            src={horizontalRope}
            alt="thread"
            className="w-full h-full object-fill"
          />
          <div className="w-8 h-8 absolute -right-[1%]">
            <img
              src={purplepin}
              alt="pin"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="descCardtoinfocard relative z-50">
        <div className="w-full h-[5px] descCardtoinfocardRope absolute flex items-center">
          <div className="w-8 h-8 absolute left-[13.5%]">
            <img
              src={yellowpin}
              alt="pin"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="cardContainer flex items-center justify-between pr-5 z-50 relative">
        {displayingCards.map((card, index) => (
          <>
            <div
              key={card.id}
              className="w-1/4  h-full relative card cursor-pointer"
              onClick={(e) => fetchClickedCardInfo(e)}
            >
              <Cards character={card} />

              <div
                style={{
                  visibility:
                    index === displayingCards.length - 1 ? "visible" : "hidden",
                }}
                className="absolute top-[55%] -left-[20%] w-full h-1/2 pointer-events-none"
              >
                {/* <img
                  src={more}
                  alt="more-img"
                  className="w-full h-full object-contain"
                /> */}
              </div>
            </div>
          </>
        ))}
        <div className="w-1/4  h-full absolute card cursor-pointer right-[2%] -z-10 rotate-6">
          <Cards />
        </div>
      </div>
      <div className="cardContainerTocardInfo relative">
        <div className="cardContainerTocardInfoRope w-full h-[5px] absolute flex items-center">
          <img
            src={horizontalRope}
            alt="thread"
            className="w-full h-full object-fill"
          />
        </div>
        <div className="cardContainerTocardInfoRope w-full h-[5px] absolute flex items-center z-50">
          <div className="w-8 h-8 absolute z-50  right-[25%]">
            <img
              src={purplepin}
              alt="pin"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CastInfo;
