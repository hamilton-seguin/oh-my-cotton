import React, { useContext } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import { Logo } from "../Logo";
import { Menu } from "./Menu";

import { useIsDesktop } from "../../utils/utils";
import { InitialRenderContext, menuStateEnum } from "../../utils/context";

export const Navigation = () => {
  const isDesktop = useIsDesktop();
  const { menuState, setMenuState } = useContext(InitialRenderContext);

  const openMenu = () => {
    setMenuState(menuStateEnum.isOpen);

    // against body scroll
    const scrollY =
      document.documentElement.style.getPropertyValue("--scroll-y");
    const body = document.body;
    body.style.position = "fixed";
    // set padding if desktop
    isDesktop && (body.style.marginRight = "14px");
    body.style.top = `-${scrollY}`;
  };

  const closeMenu = () => {
    setMenuState(menuStateEnum.isClose);

    // against body scroll
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.marginRight = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  };

  //Todo reset scrollY on new route
  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    window.addEventListener("scroll", () => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}px`
      );
    });
  }

  return (
    <nav id="Nav" className="myBorder bg-myWhite z-10 w-full">
      <div className="flex items-center justify-center">
        <div className="lg:flex flex-1 justify-evenly hidden">
          <a href="#">Find Us</a>
          <a href="#">Product Care</a>
          <a href="#">Sustainability</a>
        </div>
        <div className="flex mr-[0.5vw] 2xl:mr-[1.5vw]">
          <Link to="/" title="Oh My Cotton Title" {...(menuState === "openMenu" ? { onClick: closeMenu } : {})}>
            <Logo maxWidth />
          </Link>
        </div>
        <div className="lg:flex flex-1 justify-evenly hidden">
          <Link to="/projects/self-confidence" title="Projects">
            Projects
          </Link>
          <Link to="/our-story" title="Our Story">
            Our Story
          </Link>
          <a href="/#news">News</a>
          <a href="#contactUs">Contact</a>
        </div>
        {menuState === "closeMenu" || menuState === "default" ? (
          <button
            id="set"
            className="lg:hidden absolute right-[3vw] min-w-[25px] w-[7vw] flex"
            onClick={openMenu}
          >
            <StaticImage src="../../images/hamburugu.png" alt="menu" />
          </button>
        ) : (
          <button
            id="set"
            className="lg:hidden absolute right-[6vw] min-w-[15px] w-[4vw] flex"
            onClick={closeMenu}
          >
            <StaticImage src="../../images/close.png" alt="menu" />
          </button>
        )}
      </div>
      <Menu closeMenu={closeMenu} />
    </nav>
  );
};
