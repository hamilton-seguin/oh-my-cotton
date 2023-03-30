import { Link } from "gatsby";
import React from "react";

const date = new Date().getFullYear();
export const Footer = () => {
  return (
    <footer id="contactUs" className="flex flex-col mx-4 mt-16 lg:flex-row mb-10 lg:mx-16">
      <div className="flex flex-col flex-1 justify-between relative min-w-[50%]">
        <div className="max-w-xs mb-8 leading-9">
          <h1 className="text-3xl lg:text-4xl font-bold mb-8">
            Contact us to get a special offer
          </h1>
          <p>office@ohmycotton.com</p>
          <p>+3465 785 552</p>
        </div>
        <div className="text-sm text-gray-300 mt-10  hidden lg:block">
          <p>{`© ${date} OHMYCOTTON DESIGN, SITE BY MADGALENA FIOLKA & HAMILTON`}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:m-auto min-w-[50%] lg:gap-8 lg:ml-12 underline">
        <div className="flex flex-col gap-3 lg:justify-between order-last lg:order-none">
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
      <div className="text-sm text-gray-300 mt-10 lg:relative lg:hidden">
          <p>{`© ${date} OHMYCOTTON DESIGN, SITE BY MADGALENA FIOLKA & HAMILTON`}</p>
        </div>
    </footer>
  );
};
