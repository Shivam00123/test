import { objectType } from "@/Interface/object";
import comicone from "@/public/Images/Comic/ComicCovers/comicone.png";
import comictwo from "@/public/Images/Comic/ComicCovers/comictwo.png";
import comicthree from "@/public/Images/Comic/ComicCovers/comicthree.png";
import pagetwo from "@/public/Images/Comic/ComicPages/pagetwo.png";
import { knifeRecovery } from "./AllComics/knife-recovery";
import { ShesHere } from "./AllComics/shes-here";
import { LetstryEnglish } from "./AllComics/lets-try-english";

export const comics: objectType[] = [
  {
    id: 1,
    issueNumber: 1,
    coverImage: `${comicone}`,
    subtitle: "She's here",
    pages: ShesHere,
  },
  {
    id: 2,
    issueNumber: 2,
    coverImage: `${comictwo}`,
    subtitle: "Let's try english",
    pages: LetstryEnglish,
  },
  {
    id: 3,
    issueNumber: 3,
    coverImage: `${comicthree}`,
    subtitle: "Knife recovery",
    pages: knifeRecovery,
  },
];
