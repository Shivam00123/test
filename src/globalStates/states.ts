import { createState, useState } from "@hookstate/core";

const trailerState = createState<string>("starting");
export const useTrailerState = () => useState(trailerState);

const clickedComponent = createState<string>("");
export const useClickedComponent = () => useState(clickedComponent);

// -----------------------------------------------------

const displayingComponent = createState<string>("");
export const useDisplayingComponent = () => useState(displayingComponent);
