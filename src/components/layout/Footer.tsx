import { Link } from "gatsby";
import React from "react";

const date = new Date().getFullYear();
export const Footer = () => {
  return (
    <footer id="contactUs" className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 mt-16 lg:flex-row mb-10">
      <div className="flex flex-col flex-1 justify-between relative lg:max-w-[50vw] px-4 lg:px-16 xl:px-[8%]">
        <div className="max-w-xs mb-8 leading-9">
          <h1 className="text-3xl lg:text-4xl font-bold mb-8">
            Contact us to get a special offer
          </h1>
          <p>office@ohmycotton.com</p>
          <p>+3465 785 552</p>
        </div>
        <div className="text-sm text-gray-300 mt-10 hidden lg:block">
          <p>{`© ${date} OHMYCOTTON DESIGN, SITE BY MADGALENA FIOLKA & HAMILTON`}</p>
        </div>
      </div>
      <div className="grid lg:grid row-start-2 lg:row-start-1 lg:col-start-2 lg:grid-cols-3 lg:gap-x-6 underline lg:max-w-[50vw] px-4 lg:pl-16 xl:px-[8%]">
        <div className="flex flex-col lg:col-start-1 col-start-2 gap-3 lg:justify-between order-last lg:order-none ">
          <div className="flex flex-col gap-3 lg:gap-8">
            <Link to="#instagram">Instagram</Link>
            <Link to="#linkedIn">LinkedIn</Link>
          </div>
          <Link to="#privacyPolicy">Privacy policy</Link>
        </div>
        <div className="flex flex-col justify-between gap-3 lg:gap-8 ">
          <Link to="/#find-us">Find us</Link>
          <Link to="#productcare">Product Care</Link>
          <Link to="#sustainability">Sustainability</Link>
          <Link to="/projects/self-confidence">Projects</Link>
          <Link to="/our-story">Our story</Link>
          <Link to="/#news">News</Link>
        </div>
      </div>
      <div className="px-4 text-sm col-start-1 text-gray-300 mt-10 lg:relative lg:hidden">
          <p>{`© ${date} OHMYCOTTON DESIGN, SITE BY MADGALENA FIOLKA & HAMILTON`}</p>
        </div>
    </footer>
  );
};
