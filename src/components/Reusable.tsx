import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export const Reusable1 = () => {
  return (
    <div className="flex mb-16 my-8 lg:mt-16 flex-col-reverse lg:flex-row">
      <StaticImage
        src="../images/main5.jpeg"
        alt="we recyle, we go green"
        className="max-h-[40vh] lg:max-w-[49%] xl:max-h-[60vh]"
      />
      <div className="flex flex-col mx-4 min-h-[20vh] max-h-[80vh] justify-evenly leading-7 mb-16 lg:max-w-md lg:mx-auto lg:px-10">
        <div className="text-3xl lg:text-4xl font-bold">
          We recycle, we go green
        </div>
        <p className=" my-4">
          Our products are made with recycled and ecological materials including
          organic cotton - making us a green company.
          <br />
          We are a Sustainable Business Award winner.
        </p>
        <Link to="/#" className="underline">
          Sustainability program
        </Link>
      </div>
    </div>
  );
};

export const Reusable2 = () => {
  return (
    <div className="flex my-12 flex-col lg:flex-row ">
      <StaticImage
        src="../images/main6.jpg"
        alt="We know how to keep clothes in good condition"
        className="max-h-[40vh] lg:max-w-[49%] xl:max-h-[60vh]"
      />
      <div className="flex flex-col mt-8 mx-4 min-h-[20vh] justify-evenly leading-7 lg:max-w-md lg:mx-auto lg:px-10 ">
        <div className="text-3xl lg:text-4xl font-bold">
          We know how to keep clothes in good condition
        </div>
        <p>We have experience, we can share it.</p>
        <Link to="/#" className="underline">
          Product care
        </Link>
      </div>
    </div>
  );
};
