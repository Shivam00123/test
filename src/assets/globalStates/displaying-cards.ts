import { objectType } from "@/Interface/object";
import { createState, useState } from "@hookstate/core";

export const visibleCards = createState<objectType[]>([]);
export const useVisiblecards = () => useState<objectType[]>(visibleCards);
