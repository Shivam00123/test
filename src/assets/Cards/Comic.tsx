import React, { useEffect, useState } from "react";
import { comics } from "@/data/comic";
import useGetCharcterInfo from "@/hooks/use-getCharcter-info";
import { AnimateSharedLayout } from "framer-motion";
import ComicCollection from "../ComicCollection/ComicCollection";
import ComicPages from "../ComicPages/ComicPages";

const Comic = () => {
  const [openComic, setOpenComic] = useState<boolean>(false);
  const { useClickedId, getClickedItem } = useGetCharcterInfo(comics);

  useEffect(() => {
    if (useClickedId?.value?.pages?.length) {
      setOpenComic(true);
    }
  }, [useClickedId?.value]);

  const changeOpenComicState = (set: boolean, id: string | number) => {
    getClickedItem(id);
  };

  return (
    <div className="w-full h-full relative">
      <AnimateSharedLayout>
        {openComic ? (
          <ComicPages setOpenComic={setOpenComic} data={useClickedId.value} />
        ) : (
          <ComicCollection setOpenComic={changeOpenComicState} />
        )}
      </AnimateSharedLayout>
    </div>
  );
};

export default Comic;
