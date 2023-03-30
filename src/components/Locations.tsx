import { Link } from "gatsby";
import React from "react";

export const Locations = () => {
  return (
    <div id="find-us" className="flex mx-4 flex-col lg:flex-row lg:m-10 lg:mx-16 overflow-x-hidden">
      <div className="flex flex-col flex-1 justify-between lg:min-w-[50%]">
        <div className="lg:max-w-xs leading-9 mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-8">Locations</h1>
          <p>Our pieces are at unique concept stores only.</p>
        </div>
        <div className="hidden lg:block">
          <Link to="#find-us" className="underline">
            Find us
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:m-auto min-w-[50%] gap-8 lg:mx-12">
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
