import React, { createContext, useState } from "react";

interface InitialRenderContextType {
  initialRender: boolean;
  toggleInitialRender: React.Dispatch<React.SetStateAction<boolean>>;
  menuState: menuStateEnum;
  setMenuState: React.Dispatch<React.SetStateAction<menuStateEnum>>;
}
export enum menuStateEnum {
  isClose = "closeMenu",
  isOpen = "openMenu",
  isDefault = "default",
}

export const InitialRenderContext = createContext<InitialRenderContextType>({
  initialRender: true,
  toggleInitialRender: () => {},
  menuState: menuStateEnum.isDefault,
  setMenuState: () => {},
});

type ContextProps = {
  children: JSX.Element;
};

export const InitialRenderProvider = ({ children }: ContextProps) => {
  const [initialRender, setInitialRender] = useState(true);
  const toggleInitialRender = () => setInitialRender(false);
  const [menuState, setMenuState] = useState<menuStateEnum>(menuStateEnum.isDefault);


  return (
    <InitialRenderContext.Provider
      value={{ initialRender, toggleInitialRender, menuState, setMenuState }}
    >
      {children}
    </InitialRenderContext.Provider>
  );
};
