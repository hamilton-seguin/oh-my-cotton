import React, { useContext, useEffect } from "react";

import { InitialRenderContext } from "../../utils/context";

type HamburgerProps = {
  openMenu: () => void;
  closeMenu: () => void;
};

export const Hamburger = ({ openMenu, closeMenu }: HamburgerProps) => {
  const { menuState } = useContext(InitialRenderContext);

  const handleChange = () => {
    const hamburger = document.getElementById("hamburger") as HTMLInputElement;
    hamburger && hamburger.checked ? openMenu() : closeMenu();
  };

  useEffect(() => {
    const menu = document?.getElementById("menu");
    const hamburger = document.getElementById("hamburger") as HTMLInputElement;
    if (menuState === "closeMenu") {
      menu?.addEventListener("animationstart", () => {
        if (menu?.classList.contains("closeMenu")) {
          hamburger.checked = false;
        }
        return () => menu?.removeEventListener("animationstart", () => {});
      });
    }
  }, [menuState]);

  return (
    <label htmlFor="hamburger" className="hamburger-menu flex flex-col max-w-max cursor-pointer lg:hidden">
      <input
        id="hamburger"
        type="checkbox"
        onChange={handleChange}
        aria-label="toggle menu"
      />
    </label>
  );
};
