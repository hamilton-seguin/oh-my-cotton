import React, { useContext } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import { Logo } from "../Logo";
import { Menu } from "./Menu";

import { useIsDesktop } from "../../utils/utils";
import { InitialRenderContext, menuStateEnum } from "../../utils/context";
import { Hamburger } from "./Hamburger";

export const Navigation = () => {
  const isDesktop = useIsDesktop();
  const { menuState, setMenuState } = useContext(InitialRenderContext);

  const openMenu = () => {
    setMenuState(menuStateEnum.isOpen);
    const body = document.body;
    body.style.position = "fixed";

    // set padding if desktop
    isDesktop && (body.style.marginRight = "14px");
    
    // against body scroll
    const scrollY =
      document.documentElement.style.getPropertyValue("--scroll-y");
    body.style.top = `-${scrollY}`;
  };

  const closeMenu = () => {
    setMenuState(menuStateEnum.isClose);
    const body = document.body;
    body.style.position = "";

    // clear padding if desktop
    body.style.marginRight = "";

    // against body scroll
    const scrollY = body.style.top;
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
    <nav id="Nav" className="myBorder bg-myWhite z-10 w-full max-w-[100vw]">
      <div className="flex items-center justify-center">
        <div className="lg:flex flex-1 justify-evenly hidden">
          <Link to="/#find-us" title="Find Us">Find Us</Link>
          <a href="#">Product Care</a>
          <a href="#">Sustainability</a>
        </div>
        <div className="flex mr-[0.5vw] 2xl:mr-[1.5vw]">
          <Link
            to="/"
            title="Oh My Cotton Title"
            {...(menuState === "openMenu" ? { onClick: closeMenu } : {})}
          >
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
          <Link to="/#news" title="News">News</Link>
          <a href="#contactUs">Contact</a>
        </div>
        {/* {menuState === "closeMenu" || menuState === "default" ? (
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
            className="lg:hidden absolute right-[4.5vw] min-w-[15px] w-[4vw] flex"
            onClick={closeMenu}
          >
            <StaticImage src="../../images/close.png" alt="menu" />
          </button>
        )} */}
        <Hamburger openMenu={openMenu} closeMenu={closeMenu}/>
      </div>
      <Menu closeMenu={closeMenu} />
    </nav>
  );
};
