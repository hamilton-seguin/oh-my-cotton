import React, { useContext, useEffect } from "react";
import { Link } from "gatsby";
import { InitialRenderContext, menuStateEnum } from "../../utils/context";


type MenuProps = {
  closeMenu: () => void;
};

export const Menu = ({ closeMenu }: MenuProps) => {
  const { menuState, setMenuState } = useContext(InitialRenderContext);

  const isBrowser = typeof document !== "undefined"
    const menu = document?.getElementById("menu");
    if (isBrowser && menuState === "closeMenu") {
      menu?.addEventListener("animationend", () => {
        if (menu?.classList.contains("closeMenu")) {
          setMenuState(menuStateEnum.isDefault);
        }
        return () => menu?.removeEventListener("animationend", () => {});
      });
    }


  return (
    <>
      <div id="menu" className={menuState}>
        <div className="flex flex-col bg-myWhite px-4 pt-4 pb-16 justify-evenly align-start h-[100vh] font-bold">
          <Link to="/#find-us" onClick={closeMenu}>
            Find us
          </Link>
          <a href="#">Product care</a>
          <a href="#">Sustainability</a>
          <Link to="/projects/self-confidence" onClick={closeMenu}>
            Projects
          </Link>
          <Link to="/our-story" onClick={closeMenu}>
            Our story
          </Link>
          <a href="/#">News</a>
          <a href="#">Contact</a>
          <div className="border-t-[2px] border-grey w-full"></div>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <div className="border-t-[2px] border-grey w-full"></div>
          <div>
            <p className="pb-4">Contact:</p>
            <p className="font-light">office@ohmycotton.com</p>
            <p className="font-light">3465 785 552</p>
          </div>
        </div>
      </div>
    </>
  );
};
