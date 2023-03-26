import React from "react";
import { Link } from "gatsby";

import { Logo } from "../Logo";

export const Navigation = () => {
  return (
    <nav id="Nav" className="myBorder bg-myWhite z-10 w-full">
      <div className="flex justify-center items-center">
        <div className="flex flex-1 justify-around">
          <a href="#">Find Us</a>
          <a href="#">Product Care</a>
          <a href="#">Sustainability</a>
        </div>
        <div className="flex">
          <Link to="/" title="Product care">
            <Logo />
          </Link>
        </div>
        <div className="flex flex-1 justify-around">
          <Link to="/projects/self-confidence" title="Projects">
            Projects
          </Link>
          <Link to="/our-story" title="Our Story">
            Our Story
          </Link>
          <a href="/#news">News</a>
          <a href="#contactUs">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};
