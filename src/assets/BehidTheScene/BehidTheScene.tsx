import React, { useEffect } from "react";
import Shortslayout from "@/assets/ShortsLayout/ShortsLayout";
import useGetCharcterInfo from "@/hooks/use-getCharcter-info";
import { behindthescenes } from "@/data/behind-the-scenes";

const BehidTheScene = () => {
  const {
    useCastInfoArray,
    getCharacterInfo,
    changeDisplayingCards,
    useClickedId,
  } = useGetCharcterInfo(behindthescenes, 4);

  useEffect(() => {
    changeCard(behindthescenes[0]?.id);
  }, []);

  const changeCard = (id: string | number) => {
    getCharacterInfo(id);
  };

  return (
    <>
      <Shortslayout
        cardInfo={useClickedId?.value}
        changeCard={changeCard}
        filteredArray={useCastInfoArray?.value}
      />
    </>
  );
};

export default BehidTheScene;
