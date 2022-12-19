import { createState, useState } from "@hookstate/core";

const displayingComponent = createState<string>("");
export const useDisplayingComponent = () => useState(displayingComponent);

const contentStartingText = createState<string>("");

export const setContentStartingText = (text: string) => {
  if (!text) return;
  switch (text) {
    case "blog":
      contentStartingText.set("Blog");
      break;
    case "mail":
      contentStartingText.set("Mail");
      break;
    case "meet":
      contentStartingText.set("Meet The Cast");
      break;
    case "comic":
      contentStartingText.set("Dotson Comic");
      break;
    case "contactus":
      contentStartingText.set("Contact Us");
      break;
    default:
      contentStartingText.set("");
  }
};
export const useContentStartingText = () => useState(contentStartingText);
