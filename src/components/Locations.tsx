import { Link } from "gatsby";
import React from "react";

export const Locations = () => {
  return (
    <div id="findUs" className="flex m-10 mx-16">
      <div className="flex flex-col flex-1 justify-between min-w-[50%]">
        <div className="max-w-xs  leading-9">
          <h1 className="text-3xl lg:text-4xl font-bold mb-8">Locations</h1>
          <p>Our pieces are at unique concept stores only.</p>
        </div>
        <div className="">
          <Link to="#findUs" className="underline">
            Find us
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 m-auto min-w-[50%] gap-8 ml-12">
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
