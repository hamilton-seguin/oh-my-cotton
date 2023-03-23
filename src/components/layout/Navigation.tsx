import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-Links";

import { Logo } from "../Logo";

export const Navigation = () => {
  return (
    <nav className="m-4">
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
          <Link to="/projects/self-confidence" title="Projects">Projects</Link>
          <Link to="/our-story" title="Our Story">
            Our Story
          </Link>
          <AnchorLink
            to="#/news"
            title="News"
            className="stripped"
            stripHash
          ></AnchorLink>
          <AnchorLink
            to="/#contactUs"
            title="Contact Us"
            className="stripped"
            stripHash
          ></AnchorLink>
        </div>
      </div>
    </nav>
  );
};
