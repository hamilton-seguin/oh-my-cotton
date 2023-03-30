import "./src/styles/global.css";

import React from "react";
import RootElement from "./src/components/RootElement";

export const wrapRootElement = ({ element }) => (
  <RootElement>{element}</RootElement>
);

export const onRouteUpdate = () => {
    // window.scrollTo(0, 0);
};
