import { Link } from "gatsby";
import React from "react";

export const Locations = () => {
  return (
    <div
      id="find-us"
      className="lg:grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 mt-16 xl:mt-32 lg:flex-row mb-10"
    >
      <div className="lg:justify-between relative lg:max-w-[50vw] px-4 lg:px-16 xl:px-[8%]">
        <div className="lg:max-w-xs leading-9 mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-8">Locations</h1>
          <p>Our pieces are at unique concept stores only.</p>
        </div>
        <div className="hidden lg:block">
          <Link to="#find-us" className="underline">
            Find us
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-x-6 gap-y-8 px-4 lg:pl-16 xl:px-[8%]">
        <div className="">
          <p>BARCELONA</p>
          <p>La Rambla 202</p>
          <p>08002</p>
        </div>
        <div className="">
          <p>PARIS </p>
          <p>80 Bd Saint-Germain</p>
          <p>75005</p>
        </div>
        <div className="">
          <p>WARSAW</p>
          <p>Mokotowska 31</p>
          <p>00-020</p>
        </div>
        <div className="">
          <p>LISBON</p>
          <p>Rua da Palma 73</p>
          <p>1100-394</p>
        </div>
        <div className="">
          <p>MARSEILLE</p>
          <p>2 Rue de Rivoli</p>
          <p>13006</p>
        </div>
      </div>
    </div>
  );
};
