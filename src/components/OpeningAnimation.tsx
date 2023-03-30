import React, { useContext } from "react";
import { Logo } from "./Logo";

import { InitialRenderContext } from "../utils/context";

export const OpeningAnimation = () => {
  const { initialRender } = useContext(InitialRenderContext);

  return (
    <>
      {initialRender && (
        <>
          <div id="white-rect"></div>
          <Logo id="title" className="mr-[0.5vw] 2xl:mr-[1.5vw]" />
        </>
      )}
    </>
  );
};
