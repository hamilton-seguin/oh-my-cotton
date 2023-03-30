import React from "react";

import { InitialRenderProvider } from "../utils/context";

type ContextProps = {
  children: JSX.Element;
};

const RootElement = ({ children }: ContextProps) => {
  return <InitialRenderProvider>{children}</InitialRenderProvider>;
};

export default RootElement;
