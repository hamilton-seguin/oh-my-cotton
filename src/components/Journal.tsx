import React, { useRef } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Draggable } from "./Draggable";

export const Journal = () => {
  const journalRef = useRef<HTMLDivElement>(null);
  return (
    <div
      id="news"
      className="flex flex-col ml-4 lg:mt-24 overflow-hidden min-w-3xl will-change-auto hover:will-change-scroll lg:flex-row lg:ml-0"
    >
      <div className="flex flex-col lg:mx-16 xl:ml-[4%] min-w-[20vw] lg:h-0">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-8 lg:pb-3 ">
            Journal
          </h1>
          <Link to="/#" className="underline">
            All news
          </Link>
        </div>
      </div>
      <Draggable>
        <div
          className="flex snap-x overflow-x-auto scroll-smooth max-w-fit"
          ref={journalRef}
        >
          <div className="snap-start shrink-0 max-w-[68vw] lg:max-w-[28vw] mr-2 2xl:mr-3">
            <StaticImage
              src="../images/journal1.jpeg"
              alt="ohmycotton vogue cover"
              className=" lg:max-w-[28vw]"
              draggable={false}
            />
            <p className="font-light text-sm py-8 whitespace-normal">
              OHMYCOTTON on the cover of Vogue Thailand
            </p>
          </div>
          <div className="snap-start shrink-0 max-w-[68vw] lg:max-w-[28vw] mx-2 2xl:mx-3">
            <StaticImage
              src="../images/journal2.jpeg"
              alt="ohmycotton l'uomo cover"
              className=" lg:max-w-[28vw]"
              draggable={false}
            />
            <p className="font-light text-sm py-8 whitespace-normal">
              OHMYCOTTON on the cover of L'UOMO Vogue
            </p>
          </div>
          <div className="snap-start shrink-0 max-w-[68vw] lg:max-w-[28vw] mx-2 2xl:mx-3">
            <StaticImage
              src="../images/journal3.jpeg"
              alt="donate and win visit the atelier"
              className=" lg:max-w-[28vw]"
              draggable={false}
            />
            <p className="font-light text-sm py-8 whitespace-normal">
              Donate and win a day at journal atelier
            </p>
          </div>
          <div className="snap-start shrink-0 max-w-[68vw] lg:max-w-[28vw] mx-2 2xl:mx-3">
            <StaticImage
              src="../images/journal1.jpeg"
              alt="ohmycotton vogue cover"
              className=" lg:max-w-[28vw]"
              draggable={false}
            />
            <p className="font-light text-sm py-8 whitespace-normal">
              OHMYCOTTON on the cover of Vogue Thailand
            </p>
          </div>
          <div className="snap-start shrink-0 max-w-[68vw] lg:max-w-[28vw] mx-2 2xl:mx-3">
            <StaticImage
              src="../images/journal2.jpeg"
              alt="ohmycotton l'uomo cover"
              className=" lg:max-w-[28vw]"
              draggable={false}
            />
            <p className="font-light text-sm py-8 whitespace-normal">
              OHMYCOTTON on the cover of L'UOMO Vogue
            </p>
          </div>
          <div className="snap-end shrink-0 max-w-[68vw] lg:max-w-[28vw] mx-2 2xl:mx-3">
            <StaticImage
              src="../images/journal3.jpeg"
              alt="donate and win visit the atelier"
              className=" lg:max-w-[28vw]"
              draggable={false}
            />
            <p className="font-light text-sm py-8 whitespace-normal">
              Donate and win a day at journal atelier
            </p>
          </div>
        </div>
      </Draggable>
    </div>
  );
};
