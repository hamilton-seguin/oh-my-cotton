import { Link } from "gatsby";
import React from "react";

const date = new Date().getFullYear();
export const Footer = () => {
  return (
    <footer id="contactUs" className="flex mb-10 mt-16 mx-16">
      <div className="flex flex-col flex-1 justify-between  min-w-[50%]">
        <div className="max-w-xs  leading-9">
          <h1 className="text-3xl lg:text-4xl font-bold mb-8">
            Contact us to get a special offer
          </h1>

          <p>office@ohmycotton.com</p>
          <p>+3465 785 552</p>
        </div>
        <div className="text-sm text-gray-300 mt-10">
          <p>{`© ${date} OHMYCOTTON DESIGN, SITE BY MADGALENA FIOLKA & HAMILTON`}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 m-auto min-w-[50%] gap-8 ml-12 underline">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-8">
            <Link to="#instagram">Instagram</Link>
            <Link to="#linkedIn">LinkedIn</Link>
          </div>
          <Link to="#privacyPolicy">Privacy policy</Link>
        </div>
        <div className="flex flex-col justify-between gap-8">
          <Link to="/#findUs">Find us</Link>
          <Link to="#productcare">Product Care</Link>
          <Link to="#sustainability">Sustainability</Link>
          <Link to="/projects/self-confidence">Projects</Link>
          <Link to="/our-story">Our story</Link>
          <Link to="/#news">News</Link>
        </div>
      </div>
    </footer>
  );
};
