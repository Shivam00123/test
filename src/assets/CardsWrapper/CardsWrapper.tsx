import { memo, useState, useEffect } from "react";
import { useHookstate } from "@hookstate/core";
import { motion } from "framer-motion";

import {
  useContentStartingText,
  useDisplayingComponent,
} from "@/globalStates/states";
import React from "react";
import Blog from "../Cards/Blog";
import Comic from "../Cards/Comic";
import Mail from "../Cards/Mail";
import Meet from "../Cards/Meet";
import ContactUs from "../Cards/ContactUs";
import ComicPages from "../ComicPages/ComicPages";

const CardsWrapper = () => {
  const displayingComponentState = useHookstate(useDisplayingComponent());
  const startingText = useHookstate(useContentStartingText());
  const [showContent, setShowContents] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContents(true);
    }, 1200);
  }, []);

  return (
    <>
      {showContent ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full h-full relative bg-transparent"
        >
          {displayingComponentState?.value == "blog" && <Blog />}
          {displayingComponentState?.value == "mail" && <Mail />}
          {displayingComponentState?.value == "meet" && <Meet />}
          {displayingComponentState?.value == "comic" && <Comic />}
          {displayingComponentState?.value == "contactus" && <ContactUs />}
        </motion.div>
      ) : (
        <div className="w-full h-full bg-white grid place-items-center absolute top-0">
          <h1 className="text-5xl font-bold">{startingText?.value}</h1>
        </div>
      )}
    </>
  );
};

export default memo(CardsWrapper);
