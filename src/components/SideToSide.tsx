import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export const SideToSide = () => {
  return (
    <div className="flex my-16 relative flex-col lg:flex-row lg:justify-between">
      <div className="relative mb-8 lg:mb-0 max-h-fit lg:max-w-[49.4%] ">
        <StaticImage
          src="../images/main2.jpeg"
          alt="ohmycotton"
          className="max-h-[40vh]"
          />
        <div className="text-center offset-text-middle lg:offset-text-left bottom-[6%] white whitespace-nowrap">
          <Link to="/#" className="underline">
            Ode to the sun
          </Link>
        </div>
      </div>
      <div className="relative lg:mb-0 max-h-fit lg:max-w-[49.4%]">
        <StaticImage
          src="../images/main3.jpeg"
          alt="ohmycotton"
          className="max-h-[40vh]"
        />
        <div className="text-center offset-text-middle lg:offset-text-right bottom-[6%] white whitespace-nowrap">
          <Link
            to="/projects/self-confidence"
            title="Projects"
            className="underline"
          >
            Tribute to Self-confidence
          </Link>
        </div>
      </div>
    </div>
  );
};
