import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export const Reusable1 = () => {
  return (
    <div className="flex my-16">
      <StaticImage
        src="../images/main5.jpeg"
        alt="we recyle, we go green"
        className="max-w-[49.4%]"
      />
      <div className="flex flex-col max-w-md mx-auto px-10 justify-evenly leading-7 mb-28">
        <div className="text-3xl lg:text-4xl font-bold">
          We recycle, we go green
        </div>
        <p>
          Our products are made with recycled and ecological materials including
          organic cotton - making us a green company. We are a Sustainable
          Business Award winner.
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
    <div className="flex my-16">
      <StaticImage
        src="../images/main6.jpeg"
        alt="We know how to keep clothes in good condition"
        className="max-w-[49.4%]"
      />
      <div className="flex flex-col max-w-md mx-auto px-10 justify-evenly leading-7 mb-28">
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
