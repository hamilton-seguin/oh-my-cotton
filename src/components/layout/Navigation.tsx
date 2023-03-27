import React, { useState } from "react";
import { Link } from "gatsby";

import { Logo } from "../Logo";
import { StaticImage } from "gatsby-plugin-image";

export const Navigation = () => {
  const [close, setclose] = useState<boolean>(true);

  const openMenu = () => {
    setclose(false);
    document.getElementById("menu")?.classList.remove("closeMenu");
    document.getElementById("menu")?.classList.add("openMenu");
    // against body scroll
    const scrollY =
      document.documentElement.style.getPropertyValue("--scroll-y");
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}`;
    console.log("close is ", close);

    //TODO: onChangeRoute relive fixed from body, mays utils funtion 

  };
  const closeMenu = () => {
    setclose(true);
    document.getElementById("menu")?.classList.remove("openMenu");
    document.getElementById("menu")?.classList.add("closeMenu");
    // against body scroll
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
    console.log("close is ", close);
  };
  window.addEventListener("scroll", () => {
    document.documentElement.style.setProperty(
      "--scroll-y",
      `${window.scrollY}px`
    );
  });

  return (
    <nav id="Nav" className="myBorder bg-myWhite z-10 w-full">
      <div className="flex items-center justify-center">
        <div className="lg:flex flex-1 justify-evenly hidden">
          <a href="#">Find Us</a>
          <a href="#">Product Care</a>
          <a href="#">Sustainability</a>
        </div>
        <div className="flex">
          <Link to="/" title="Product care">
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
        {close ? (
          <button
            id="toggle"
            className="lg:hidden absolute right-[3vw] min-w-[25px] w-[7vw] flex"
            onClick={openMenu}
          >
            <StaticImage src="../../images/hamburugu.png" alt="menu" />
          </button>
        ) : (
          <button
            id="toggle"
            className="lg:hidden absolute right-[6vw] min-w-[15px] w-[4vw] flex"
            onClick={closeMenu}
          >
            <StaticImage src="../../images/close.png" alt="menu" />
          </button>
        )}
      </div>
      <div id="menu" className="closeMenu">
        <div>
          <div className="flex flex-col bg-myWhite px-4 pt-4 pb-16 justify-evenly align-start h-[100vh] font-bold">
            <a href="#">Find us</a>
            <a href="#">Product care</a>
            <a href="#">Sustainability</a>
            <Link to="/projects/self-confidence">Projects</Link>
            <Link to="/our-story">Our story</Link>
            <a href="#">News</a>
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
      </div>
    </nav>
  );
};
